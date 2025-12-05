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

// Reuse the column mapping from data.ts
const COLUMN_MAPPING = {
  'Item name': 'name',
  'Item Name': 'name',
  'Type': 'type',
  'Wholesale': 'wholesale',
  'Wsp': 'wholesale',
  'Public Price': 'price',
  'Price': 'price',
  'Stock': 'stock',
  'Initial': 'initial',
  'Status': 'status',
  'Description': 'description',
  'SEO': 'seo',
  'Dominance': 'dominance',
  'THC': 'thc',
  'CBD': 'cbd',
  'effects': 'effects',
  'relieves': 'relieves'
} as const;

type ColumnKey = keyof typeof COLUMN_MAPPING;

interface CSVRow {
  [key: string]: string;
}

// Helper function to parse CSV line with proper handling of quoted fields
function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const nextChar = line[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        // Escaped quote
        current += '"';
        i++; // Skip next quote
      } else {
        // Toggle quote state
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      // Field separator
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }

  // Add last field
  result.push(current);

  return result;
}

// Convert array of values to object using header mapping
function mapRowToObject(headers: string[], values: string[]): CSVRow {
  const row: CSVRow = {};

  for (let i = 0; i < headers.length; i++) {
    if (i < values.length) {
      const header = headers[i].trim();
      const mappedKey = COLUMN_MAPPING[header as ColumnKey] || header.toLowerCase();
      row[mappedKey] = values[i];
    }
  }

  return row;
}

export async function getStrains(): Promise<Strain[]> {
  try {
    const response = await fetch('/datas/products.csv');
    const csvText = await response.text();
    const lines = csvText.trim().split('\n');

    if (lines.length < 2) return []; // No data or only header

    // Parse header row
    const headers = parseCSVLine(lines[0]).map(h => h.trim());

    return lines.slice(1) // Skip header
      .filter(line => line.trim() !== '')
      .map(line => {
        const values = parseCSVLine(line);
        if (values.length < headers.length) return null;

        const row = mapRowToObject(headers, values);

        const type = (row.type || '').trim();
        const status = (row.status || '').trim();

        // Only include strains (not gadgets) that are in stock
        if (type !== 'Strain' || status !== 'In stock') return null;

        return {
          name: (row.name || '').trim(),
          type,
          thc: parseFloat(row.thc || '0') || 0,
          cbd: parseFloat(row.cbd || '0') || 0,
          description: (row.description || '').replace(/\\n/g, ' ').replace(/"/g, ''),
          effects: (row.effects || '').trim(),
          relieves: (row.relieves || '').trim(),
          dominance: (row.dominance || '').trim()
        };
      })
      .filter(Boolean) as Strain[]; // Filter out nulls and cast to Strain[]
  } catch (error) {
    console.error('Error loading strains:', error);
    return [];
  }
}

export function findStrain(strains: Strain[], query: string): Strain | null {
  if (!query) return null;

  const queryLower = query.toLowerCase();

  // First try exact match
  const exactMatch = strains.find(s =>
    s.name.toLowerCase() === queryLower
  );
  if (exactMatch) return exactMatch;

  // Then try partial match in name
  const nameMatch = strains.find(s =>
    s.name.toLowerCase().includes(queryLower)
  );
  if (nameMatch) return nameMatch;

  // Then try matching effects or relief
  const effectMatch = strains.find(s =>
    s.effects.toLowerCase().includes(queryLower) ||
    s.relieves.toLowerCase().includes(queryLower) ||
    s.dominance.toLowerCase().includes(queryLower)
  );

  return effectMatch || null;
}

export function formatStrainInfo(strain: Strain): string {
  return `🌿 *${strain.name}* (${strain.dominance})
` +
    `THC: ${strain.thc}% | CBD: ${strain.cbd}%
` +
    `Effects: ${strain.effects}
` +
    `Relieves: ${strain.relieves}

` +
    `${strain.description.substring(0, 200)}${strain.description.length > 200 ? '...' : ''}`;
}
