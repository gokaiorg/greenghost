import admin from "firebase-admin";
import fs from "fs";
import path from "path";
import { GoogleAuth } from "google-auth-library";

const projectId = process.env.GOOGLE_PROJECT_ID || "green-ghost-432101";
const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
const privateKey = process.env.GOOGLE_PRIVATE_KEY;

console.log("[Firebase Admin] Initializing...", {
  appsLength: admin.apps.length,
  nodeEnv: process.env.NODE_ENV,
  hasClientEmail: !!clientEmail,
  hasPrivateKey: !!privateKey,
});

if (!admin.apps.length) {
  const options: admin.AppOptions = {
    projectId,
  };

  if (clientEmail && privateKey) {
    options.credential = admin.credential.cert({
      projectId,
      clientEmail,
      privateKey: privateKey.replace(/\\n/g, "\n"),
    });
  } else if (process.env.NODE_ENV === "development") {
    // Fallback to local JSON key if available in development
    try {
      const keyPath = path.join(process.cwd(), "green-ghost-432101-58ca22dd1b4c.json");
      if (fs.existsSync(keyPath)) {
        const serviceAccount = JSON.parse(fs.readFileSync(keyPath, "utf8"));
        options.credential = admin.credential.cert(serviceAccount);
      }
    } catch (e) {
      console.warn("Error loading service account key file:", e);
    }
  }

  admin.initializeApp(options);
}

import { getFirestore } from "firebase-admin/firestore";

// Note: Using explicitly named database "greenghost-db" as found in project configuration
export const db = getFirestore("greenghost-db");
export { admin };

/**
 * Returns a Google Auth client for use with other Google APIs (e.g. Sheets API)
 */
export function getAuthClient() {
  const authOptions: {
    projectId: string;
    scopes: string[];
    credentials?: { client_email: string; private_key: string };
    keyFile?: string;
  } = {
    projectId,
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  };

  if (clientEmail && privateKey) {
    authOptions.credentials = {
      client_email: clientEmail,
      private_key: privateKey.replace(/\\n/g, "\n"),
    };
  } else if (process.env.NODE_ENV === "development") {
    const keyPath = path.join(process.cwd(), "green-ghost-432101-58ca22dd1b4c.json");
    if (fs.existsSync(keyPath)) {
      authOptions.keyFile = keyPath;
    }
  }

  return new GoogleAuth(authOptions);
}
