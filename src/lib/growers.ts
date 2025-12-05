import path from 'path';
import fs from 'fs';
import Papa from 'papaparse';

export interface Grower {
    name: string;
    link: string;
}

export async function getGrowers(): Promise<Grower[]> {
    const csvPath = path.join(process.cwd(), 'public/datas/growers.csv');
    const csvContent = fs.readFileSync(csvPath, 'utf-8');

    const { data } = Papa.parse(csvContent, {
        header: true,
        skipEmptyLines: true,
    });

    interface CsvRow {
        name: string;
        link: string;
    }

    return (data as CsvRow[]).map((row) => ({
        name: row.name,
        link: row.link,
    }));
}
