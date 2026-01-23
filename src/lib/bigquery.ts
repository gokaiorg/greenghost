import { BigQuery } from "@google-cloud/bigquery";

import path from "path";

const credentials =
  process.env.GOOGLE_CLIENT_EMAIL && process.env.GOOGLE_PRIVATE_KEY
    ? {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    }
    : undefined;

const bigquery = new BigQuery({
  projectId: process.env.GOOGLE_PROJECT_ID || 'green-ghost-432101',
  location: 'europe-west1',
  scopes: [
    'https://www.googleapis.com/auth/bigquery',
    'https://www.googleapis.com/auth/drive',
  ],
  ...(credentials
    ? { credentials }
    : {
      keyFilename: path.join(
        process.cwd(),
        'green-ghost-432101-58ca22dd1b4c.json'
      ),
    }),
});

export interface PageData {
  title: string;
  subtitle: string;
  description: string;
  section_title: string;
  section_description: string;
  label: string;
  meta_title: string;
  meta_description: string;
}

import { cache } from "react";

export const getPagesData = cache(
  async (pageTitle: string): Promise<PageData | null> => {
    const query = `
SELECT
      string_field_0 AS title,
  string_field_1 AS subtitle,
    string_field_2 AS description,
      string_field_3 AS section_title,
        string_field_4 AS section_description,
          string_field_5 AS label,
            string_field_6 AS meta_title,
              string_field_7 AS meta_description
    FROM \`green-ghost-432101.greenghostdataset.pages\`
    WHERE string_field_0 LIKE @pageTitle
    LIMIT 1
  `;

    try {
      const [rows] = await bigquery.query({
        query,
        params: { pageTitle: `${pageTitle}%` },
      });
      return rows.length > 0 ? (rows[0] as PageData) : null;
    } catch (error) {
      console.error("BigQuery fetching error:", error);
      return null;
    }
  },
);
