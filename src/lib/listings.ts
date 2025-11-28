import path from 'path';
import fs from 'fs';
import Papa from 'papaparse';

export interface Listing {
    name: string;
    link: string;
}

export async function getListings(): Promise<Listing[]> {
    const csvPath = path.join(process.cwd(), 'public/datas/listings.csv');
    const csvContent = fs.readFileSync(csvPath, 'utf-8');

    const { data } = Papa.parse(csvContent, {
        header: true,
        skipEmptyLines: true,
    });

    interface CsvRow {
        Name: string;
        Link: string;
    }

    return (data as CsvRow[]).map((row) => ({
        name: row.Name,
        link: row.Link,
    }));
}
