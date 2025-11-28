import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';

export interface Payment {
    name: string;
    description: string;
    subtitle: string;
    link: string;
}

export async function getPayments(): Promise<Payment[]> {
    const filePath = path.join(process.cwd(), 'public/datas/payments.csv');
    const fileContent = fs.readFileSync(filePath, 'utf8');

    const { data } = Papa.parse<Payment>(fileContent, {
        header: true,
        skipEmptyLines: true,
    });

    return data;
}
