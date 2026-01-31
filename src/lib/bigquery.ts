import { BigQuery } from "@google-cloud/bigquery";
import { cache } from "react";
import path from "path";

// ... (Votre configuration BigQuery reste la même, elle est bonne) ...
const credentials =
  process.env.GOOGLE_CLIENT_EMAIL && process.env.GOOGLE_PRIVATE_KEY
    ? {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    }
    : undefined;

const bigquery = new BigQuery({
  projectId: process.env.GOOGLE_PROJECT_ID || 'green-ghost-432101',
  location: 'europe-west9', // Vérifiez que votre dataset est bien ici, sinon mettez 'US' ou enlevez la ligne
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

export const getPagesData = cache(
  async (pageTitle: string): Promise<PageData | null> => {
    // CORRECTION ICI : On utilise les noms propres et la vue staging

    const query = `
      SELECT
        title,
        subtitle,
        description,
        section_title,
        section_description,
        label,
        meta_title,
        meta_description
      FROM \`green-ghost-432101.staging.stg_pages\`
      WHERE LOWER(title) LIKE LOWER(@pageTitle)
      LIMIT 1
    `;

    try {
      const [rows] = await bigquery.query({
        query,
        params: { pageTitle: `${pageTitle}%` },
      });

      console.log(`[BigQuery] Rows found for ${pageTitle}:`, rows.length);
      if (rows.length > 0) {
        // console.log(`[BigQuery] First row title:`, rows[0].title);
      }

      return rows.length > 0 ? (rows[0] as PageData) : null;
    } catch (error) {
      console.error("BigQuery fetching error:", error);
      return null;
    }
  }
);

export interface GardenData {
  date: string;
  description: string;
  image: string;
}

export const getGardensData = cache(async (): Promise<GardenData[]> => {
  const query = `
    SELECT
      garden_date,
      description
    FROM \`green-ghost-432101.staging.stg_gardens\`
    ORDER BY garden_date DESC
  `;

  try {
    const [rows] = await bigquery.query({ query });
    const totalRows = rows.length;

    return rows.map((row: any, index: number) => {
      // Format date from YYYY-MM-DD to DD MM YYYY
      const dateVal = row.garden_date.value || row.garden_date;
      const [year, month, day] = dateVal.split("-");
      const formattedDate = `${day} ${month} ${year}`;

      // Assign image index: Newest (first row) gets highest number (totalRows)
      // Oldest (last row) gets 01
      const imageIndex = (totalRows - index).toString().padStart(2, "0");
      const image = `/images/gardens/green-ghost-garden-phuket-${imageIndex}.avif`;

      return {
        date: formattedDate,
        description: row.description,
        image,
      };
    });
  } catch (error) {
    console.error("BigQuery fetching error (gardens):", error);
    return [];
  }
});
