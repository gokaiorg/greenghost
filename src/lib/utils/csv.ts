import Papa from "papaparse";

export function parseCSV<T>(csvString: string): T[] {
  const { data, errors } = Papa.parse<T>(csvString, {
    header: true,
    skipEmptyLines: true,
  });

  if (errors.length > 0) {
    console.warn("CSV parsing errors:", errors);
  }

  return data;
}
