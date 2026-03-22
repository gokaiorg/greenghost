import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { db, getAuthClient } from "@/lib/firebase-admin";

const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID;
const GOOGLE_SHEET_ID_STRAINS = process.env.GOOGLE_SHEET_ID_STRAINS;

interface SheetSyncConfig {
  sheet: string;
  collection: string;
  idField?: string;
  sourceId?: string;
  autoId?: boolean;
  range?: string;
}

const SHEETS_TO_SYNC: SheetSyncConfig[] = [
  { sheet: "pages", collection: "pages", idField: "title_en" },
  { sheet: "sections", collection: "sections", idField: "id" },
  { sheet: "gardens", collection: "gardens", idField: "date" },
  { sheet: "reviews", collection: "reviews", idField: "user_name" },
  { sheet: "locations", collection: "locations", idField: "slug" },
  { sheet: "best_shops_thailand", collection: "best_shops", idField: "name" },
  { sheet: "laws", collection: "laws", idField: "title" },
  { sheet: "laws_faq", collection: "laws_faq", idField: "title" },
  { sheet: "growers", collection: "growers", idField: "name" },
  { sheet: "seeds", collection: "seeds", idField: "name" },
  { sheet: "wholesales", collection: "wholesales", idField: "strain" },
  { sheet: "listings", collection: "listings", idField: "name" },
  { sheet: "tops", collection: "tops", idField: "name" },
  { sheet: "socials", collection: "socials", idField: "name" },
  { sheet: "contacts", collection: "contacts", idField: "name" },
  { sheet: "delivery", collection: "delivery", idField: "name" },
  { sheet: "clubs", collection: "clubs", idField: "name" },
  { sheet: "payments", collection: "payments", idField: "name" },
  { sheet: "nfts", collection: "nfts", idField: "slug" },
  { sheet: "cbds", collection: "cbds", idField: "item_name" },
  { sheet: "promotes", collection: "promotes", idField: "title" },
  { sheet: "weeds", collection: "weeds", idField: "title" },
  // Products and Strains are now in the same sheet 'products' with a 'type' column
  { sheet: "products", collection: "products", idField: "item_name", range: "products!A:ZZ", sourceId: GOOGLE_SHEET_ID_STRAINS },
];

/**
 * Generates a clean slug from a string.
 */
function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')     // Replace spaces with -
    .replace(/[^\w-]+/g, '')  // Remove all non-word chars
    .replace(/--+/g, '-')     // Replace multiple - with single -
    .replace(/^-+/, '')       // Trim - from start of text
    .replace(/-+$/, '');      // Trim - from end of text
}

/**
 * Maps raw Google Sheets rows (array of arrays) into objects based on headers.
 */
function mapRowsToObjects(rows: unknown[][]) {
  if (!rows || rows.length < 2) return [];

  const headers = rows[0].map(h => String(h).toLowerCase().trim());
  const dataRows = rows.slice(1);

  return dataRows.map((row, index) => {
    const obj: Record<string, unknown> = {};
    headers.forEach((header, hIndex) => {
      // Map each row value to its lowercased header key
      obj[header] = row[hIndex] !== undefined ? row[hIndex] : null;
    });
    // Add order field to preserve sheet sequence in Firestore
    obj["order"] = index + 1;
    return obj;
  });
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");

  if (!secret || secret !== process.env.CRON_SECRET) {
    return NextResponse.json(
      { success: false, error: "Unauthorized: Invalid or missing secret token." },
      { status: 401 }
    );
  }

  if (!GOOGLE_SHEET_ID) {
    return NextResponse.json({ error: "GOOGLE_SHEET_ID is not configured" }, { status: 500 });
  }

  const results: Record<string, any> = {}; // eslint-disable-line @typescript-eslint/no-explicit-any

  try {
    const auth = getAuthClient();
    const sheets = google.sheets({ version: "v4", auth: auth as unknown as any }); // eslint-disable-line @typescript-eslint/no-explicit-any

    for (const { sheet, collection, idField, sourceId, autoId, range } of SHEETS_TO_SYNC) {
      const spreadsheetId = sourceId || GOOGLE_SHEET_ID;

      if (!spreadsheetId) {
        console.warn(`No spreadsheet ID for collection "${collection}", skipping.`);
        continue;
      }

      console.log(`Syncing sheet "${sheet}" to collection "${collection}" from spreadsheet "${spreadsheetId}"...`);

      try {
        const response = await sheets.spreadsheets.values.get({
          spreadsheetId,
          range: range || `${sheet}!A:ZZ`, // Fetch all columns
        });

        const rows = response.data.values;
        if (!rows || rows.length === 0) {
          console.log(`No data found in sheet "${sheet}".`);
          results[collection] = { synced: 0, status: "empty" };
          continue;
        }

        const objects = mapRowsToObjects(rows);
        console.log(`Mapped ${objects.length} objects for ${collection}. First object keys:`, Object.keys(objects[0]));

        const batch = db.batch();

        let writeCount = 0;
        objects.forEach((data: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
          let targetCollection = collection;
          let docId = "";

          // Handle Dynamic Routing for products/strains
          if (collection === "products") {
            targetCollection = "products";
            docId = slugify(String(data.item_name || ""));
          } else if (autoId) {
            // Let Firestore auto-generate IDs if configured
          } else if (collection === "gardens") {
            const baseId = String(data.date || "");
            const descPart = String(data.description || "").substring(0, 30);
            docId = slugify(`${baseId}-${descPart}`);
          } else {
            // Specific ID logic for others
            const idVal = data[idField || ""] || "";
            docId = String(idVal).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
          }

          if (!docId && !autoId) {
            docId = Math.random().toString(36).substring(7);
          }

          const docRef = autoId ? db.collection(targetCollection).doc() : db.collection(targetCollection).doc(docId);
          batch.set(docRef, data as FirebaseFirestore.DocumentData);
          writeCount++;
        });

        console.log(`Committing batch with ${writeCount} writes for ${collection} (into ${collection === "products" ? "strains/products" : collection})...`);
        await batch.commit();
        console.log(`Successfully committed ${collection}.`);
        results[collection] = { synced: objects.length };
      } catch (sheetError: unknown) {
        const message = sheetError instanceof Error ? sheetError.message : String(sheetError);
        console.error(`Error syncing sheet "${sheet}":`, message);

        // If it's a range error, try to list all available sheets to help debugging
        if (message.includes("Unable to parse range")) {
          try {
            const meta = await sheets.spreadsheets.get({ spreadsheetId });
            const availableSheets = meta.data.sheets?.map(s => s.properties?.title) || [];
            console.log(`Available sheets in "${spreadsheetId}":`, availableSheets);
          } catch (metaErr) {
            console.error("Failed to fetch spreadsheet metadata:", metaErr);
          }
        }

        results[collection] = { success: false, error: message };
      }
    }

    return NextResponse.json({ success: true, results });
  } catch (error: unknown) {
    console.error("Sync error:", error);
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}

