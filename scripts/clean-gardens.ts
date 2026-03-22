import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import * as path from "path";
import * as fs from "fs";

async function run() {
  const keyPath = path.join(process.cwd(), "green-ghost-432101-58ca22dd1b4c.json");
  const serviceAccount = JSON.parse(fs.readFileSync(keyPath, "utf8"));

  if (!getApps().length) {
    initializeApp({
      credential: cert(serviceAccount),
    });
  }

  const db = getFirestore("greenghost-db");
  const collection = db.collection("gardens");
  
  console.log("Cleaning gardens collection...");
  const snapshot = await collection.get();
  console.log(`Deleting ${snapshot.size} documents...`);

  const batch = db.batch();
  snapshot.forEach(doc => {
    batch.delete(doc.ref);
  });
  
  await batch.commit();
  console.log("Cleaned gardens.");

  process.exit(0);
}

run().catch(console.error);
