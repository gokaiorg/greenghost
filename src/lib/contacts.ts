import path from "path";
import fs from "fs";
import Papa from "papaparse";

export interface Contact {
  name: string;
  link: string;
}

export async function getContacts(): Promise<Contact[]> {
  const csvPath = path.join(process.cwd(), "public/datas/contacts.csv");
  const csvContent = fs.readFileSync(csvPath, "utf-8");

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
