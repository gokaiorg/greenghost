import { NextResponse } from "next/server";
import { bigquery } from "@/lib/bigquery";

export async function GET() {
    try {
        const query = `
      SELECT *
      FROM \`green-ghost-432101.greenghostdataset.locations\`
      LIMIT 3
    `;

        const [rows] = await bigquery.query({ query });

        return NextResponse.json({ rows });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
