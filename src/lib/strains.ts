import { parseCSV } from "@/lib/utils/csv";

interface Strain {
  name: string;
  type: string;
  thc: number;
  cbd: number;
  description: string;
  effects: string;
  relieves: string;
  dominance: string;
}

interface ProductCSVRow {
  "Item name": string;
  "Item Name"?: string;
  Type: string;
  Status: string;
  Description: string;
  Dominance: string;
  THC: string;
  CBD: string;
  effects: string;
  relieves: string;
  [key: string]: string | undefined;
}

export async function getStrains(): Promise<Strain[]> {
  try {
    const response = await fetch("/datas/products.csv");
    const csvText = await response.text();

    const parsedData = parseCSV<ProductCSVRow>(csvText);

    if (parsedData.length === 0) return [];

    return parsedData
      .map((row) => {
        const type = (row["Type"] || "").trim();
        const status = (row["Status"] || "").trim();

        // Only include strains (not gadgets) that are in stock
        if (type !== "Strain" || status !== "In stock") return null;

        return {
          name: (row["Item name"] || row["Item Name"] || "").trim(),
          type,
          thc: parseFloat(row["THC"] || "0") || 0,
          cbd: parseFloat(row["CBD"] || "0") || 0,
          description: (row["Description"] || "")
            .replace(/\\n/g, " ")
            .replace(/"/g, ""),
          effects: (row["effects"] || "").trim(),
          relieves: (row["relieves"] || "").trim(),
          dominance: (row["Dominance"] || "").trim(),
        };
      })
      .filter((s): s is Strain => s !== null);
  } catch (error) {
    console.error("Error loading strains:", error);
    return [];
  }
}

export function findStrain(strains: Strain[], query: string): Strain | null {
  if (!query) return null;

  const queryLower = query.toLowerCase();

  // First try exact match
  const exactMatch = strains.find((s) => s.name.toLowerCase() === queryLower);
  if (exactMatch) return exactMatch;

  // Then try partial match in name
  const nameMatch = strains.find((s) =>
    s.name.toLowerCase().includes(queryLower),
  );
  if (nameMatch) return nameMatch;

  // Then try matching effects or relief
  const effectMatch = strains.find(
    (s) =>
      s.effects.toLowerCase().includes(queryLower) ||
      s.relieves.toLowerCase().includes(queryLower) ||
      s.dominance.toLowerCase().includes(queryLower),
  );

  return effectMatch || null;
}

export function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function formatStrainInfo(strain: Strain): string {
  return (
    `🌿 *${escapeHtml(strain.name)}* (${escapeHtml(strain.dominance)})
` +
    `THC: ${strain.thc}% | CBD: ${strain.cbd}%
` +
    `Effects: ${escapeHtml(strain.effects)}
` +
    `Relieves: ${escapeHtml(strain.relieves)}

` +
    `${escapeHtml(strain.description.substring(0, 200))}${strain.description.length > 200 ? "..." : ""}`
  );
}
