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
  
  const snapshot = await collection.get();
  console.log(`Current gardens count: ${snapshot.size}`);
  
  if (snapshot.size > 0) {
    console.log("First 3 document IDs:");
    snapshot.docs.slice(0, 3).forEach(doc => {
      console.log(`- ${doc.id}:`, doc.data());
    });
  }

  process.exit(0);
}

run().catch(console.error);
