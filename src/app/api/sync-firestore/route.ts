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
  { sheet: "products", collection: "products", idField: "item_name", range: "products!A:ZZ", sourceId: GOOGLE_SHEET_ID_STRAINS },
];

function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

function mapRowsToObjects(rows: unknown[][]) {
  if (!rows || rows.length < 2) return [];

  const headers = rows[0].map(h => String(h).toLowerCase().trim());
  const dataRows = rows.slice(1);

  return dataRows.map((row, index) => {
    const obj: Record<string, unknown> = {};
    headers.forEach((header, hIndex) => {
      obj[header] = row[hIndex] !== undefined ? row[hIndex] : null;
    });
    if (!obj["item_name"]) {
      if (obj["product"]) {
        obj["item_name"] = obj["product"];
      } else if (obj["column 1"]) {
        obj["item_name"] = obj["column 1"];
      }
    }
    obj["order"] = index + 1;
    return obj;
  });
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");

  if (!secret || secret !== process.env.CRON_SECRET) {
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 }
    );
  }

  if (!GOOGLE_SHEET_ID) {
    return NextResponse.json({ error: "Configuration missing" }, { status: 500 });
  }

  const results: Record<string, any> = {};

  try {
    const auth = getAuthClient();
    const sheets = google.sheets({ version: "v4", auth: auth as unknown as any });

    for (const { sheet, collection, idField, sourceId, autoId, range } of SHEETS_TO_SYNC) {
      const spreadsheetId = sourceId || GOOGLE_SHEET_ID;
      if (!spreadsheetId) continue;

      try {
        const response = await sheets.spreadsheets.values.get({
          spreadsheetId,
          range: range || `${sheet}!A:ZZ`,
        });

        const rows = response.data.values;
        if (!rows || rows.length === 0) {
          results[collection] = { synced: 0, status: "empty" };
          continue;
        }

        const objects = mapRowsToObjects(rows);
        const batch = db.batch();

        objects.forEach((data: any) => {
          let docId = "";
          if (collection === "products") {
            docId = slugify(String(data.item_name || data.product || ""));
          } else if (collection === "gardens") {
            const baseId = String(data.date || "");
            const descPart = String(data.description || "").substring(0, 30);
            docId = slugify(`${baseId}-${descPart}`);
          } else {
            const idVal = data[idField || ""] || "";
            docId = String(idVal).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
          }

          if (!docId && !autoId) {
            docId = Math.random().toString(36).substring(7);
          }

          const docRef = autoId ? db.collection(collection).doc() : db.collection(collection).doc(docId);
          batch.set(docRef, data as FirebaseFirestore.DocumentData);
        });

        await batch.commit();
        results[collection] = { synced: objects.length };
      } catch (sheetError: unknown) {
        results[collection] = { success: false };
      }
    }

    return NextResponse.json({ success: true, results });
  } catch (error: unknown) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
