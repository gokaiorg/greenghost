import * as dotenv from "dotenv";
import * as path from "path";
import * as fs from "fs";

// Load environment variables from .env.local
const envPath = path.resolve(process.cwd(), ".env.local");
if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
  console.log("✅ Loaded environment variables from .env.local");
} else {
  console.warn("⚠️  .env.local not found, using system environment variables");
  dotenv.config();
}

import admin from "firebase-admin";
import { google } from "googleapis";
import { getFirestore } from "firebase-admin/firestore";

// Configuration
const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID;
const GOOGLE_SHEET_ID_STRAINS = process.env.GOOGLE_SHEET_ID_STRAINS;
const projectId = process.env.GOOGLE_PROJECT_ID || "green-ghost-432101";
const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
const privateKey = process.env.GOOGLE_PRIVATE_KEY;

// Initialize Firebase Admin
if (!admin.apps.length) {
  const options: admin.AppOptions = { projectId };
  
  if (clientEmail && privateKey) {
    options.credential = admin.credential.cert({
      projectId,
      clientEmail,
      privateKey: privateKey.replace(/\\n/g, "\n"),
    });
    console.log("✅ Firebase Admin initialized with certificate credentials");
  } else {
    const keyPath = path.join(process.cwd(), "green-ghost-432101-58ca22dd1b4c.json");
    if (fs.existsSync(keyPath)) {
      const serviceAccount = JSON.parse(fs.readFileSync(keyPath, "utf8"));
      options.credential = admin.credential.cert(serviceAccount);
      console.log("✅ Firebase Admin initialized with local service account key");
    } else {
      console.warn("⚠️  No Firebase credentials found. Using default application credentials.");
      options.credential = admin.credential.applicationDefault();
    }
  }
  admin.initializeApp(options);
}

// Note: Using explicitly named database "greenghost-db" as found in project configuration
const db = getFirestore("greenghost-db");

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

function mapRowsToObjects(rows: any[][]) {
  if (!rows || rows.length < 2) return [];

  const headers = rows[0].map(h => String(h).toLowerCase().trim());
  const dataRows = rows.slice(1);

  return dataRows.map((row, index) => {
    const obj: Record<string, any> = {};
    headers.forEach((header, hIndex) => {
      let value = row[hIndex] !== undefined ? row[hIndex] : null;
      // Convert numeric strings to numbers if appropriate
      if (typeof value === "string" && value.trim() !== "" && !isNaN(Number(value))) {
        value = Number(value);
      }
      obj[header] = value;
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

async function syncAll() {
  if (!GOOGLE_SHEET_ID) {
    console.error("❌ GOOGLE_SHEET_ID is not configured in .env.local");
    process.exit(1);
  }

  console.log("\n🚀 Starting Firestore Synchronization...\n");

  try {
    const keyPath = path.join(process.cwd(), "green-ghost-432101-58ca22dd1b4c.json");
    const authOptions: any = {
      projectId,
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    };

    if (clientEmail && privateKey) {
      authOptions.credentials = {
        client_email: clientEmail,
        private_key: privateKey.replace(/\\n/g, "\n"),
      };
      console.log("🔑 Using environment credentials for Google Auth");
    } else if (fs.existsSync(keyPath)) {
      authOptions.keyFile = keyPath;
      console.log("🔑 Using local JSON key for Google Auth");
    } else {
      console.log("🔑 Using application default credentials for Google Auth");
    }

    const auth = new google.auth.GoogleAuth(authOptions);
    const authClient = await auth.getClient() as any;
    const sheets = google.sheets({ version: "v4", auth: authClient });

    for (const { sheet, collection, idField, sourceId, autoId, range } of SHEETS_TO_SYNC) {
      process.stdout.write(`📡 Syncing collection: ${collection.padEnd(15)} ... `);
      
      const spreadsheetId = sourceId || GOOGLE_SHEET_ID;
      if (!spreadsheetId) {
        console.log("⏩ Skipped (No Spreadsheet ID)");
        continue;
      }

      try {
        const response = await sheets.spreadsheets.values.get({
          spreadsheetId,
          range: range || `${sheet}!A:ZZ`,
        });

        const rows = response.data.values;
        if (!rows || rows.length === 0) {
          console.log("📭 Empty (No data found)");
          continue;
        }

        const objects = mapRowsToObjects(rows);
        const batch = db.batch();
        const validDocIds = new Set<string>();

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

          validDocIds.add(docId);
          const docRef = autoId ? db.collection(collection).doc() : db.collection(collection).doc(docId);
          batch.set(docRef, data);
        });

        // Delete orphaned documents (only for non-autoId collections)
        let deletedCount = 0;
        if (!autoId) {
          const snapshot = await db.collection(collection).get();
          snapshot.docs.forEach((doc) => {
            if (!validDocIds.has(doc.id)) {
              batch.delete(doc.ref);
              deletedCount++;
            }
          });
        }

        await batch.commit();
        console.log(`✅ Success (Synced ${objects.length} documents, Deleted ${deletedCount} documents)`);
      } catch (err: any) {
        console.log(`❌ Error: ${err.message}`);
      }
    }

    console.log("\n✨ Synchronization complete!\n");
  } catch (error: any) {
    console.error("❌ Fatal sync error:", error.message);
  }
}

syncAll();
