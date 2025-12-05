import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';

export interface CBD {
    itemName: string;
    type: string;
    price: string;
    status: string;
    description: string;
    seo: string;
    cbd: string;
}

export async function getCBDProducts(): Promise<CBD[]> {
    const filePath = path.join(process.cwd(), 'public/datas/cbds.csv');
    const fileContent = fs.readFileSync(filePath, 'utf8');

    const { data } = Papa.parse<Record<string, string>>(fileContent, {
        header: true,
        skipEmptyLines: true,
    });

    // Map CSV columns to interface properties
    return data.map((row: Record<string, string>) => ({
        itemName: row['Item name'] || '',
        type: row['Type'] || '',
        price: row['Price'] || '',
        status: row['Status'] || '',
        description: row['Description'] || '',
        seo: row['SEO'] || '',
        cbd: row['CBD'] || '',
    }));
}
