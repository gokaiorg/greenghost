import { Product } from '@/lib/types'
import path from 'path'
import { promises as fs } from 'fs'

// Define column name mappings to handle different CSV formats
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

async function fetchProductsFromCSV(): Promise<Product[]> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'datas', 'products.csv');
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.trim().split('\n');
    if (lines.length < 2) return []; // No data or only header

    // Parse header row
    const headers = parseCSVLine(lines[0]).map(h => h.trim());

    const products: Product[] = [];
    const usedIds = new Set<string>();

    for (let i = 1; i < lines.length; i++) {
      const values = parseCSVLine(lines[i]);
      if (values.length < headers.length) continue; // Skip malformed lines

      const row = mapRowToObject(headers, values);

      // Extract values with fallbacks
      const name = (row.name || '').trim();
      const type = (row.type || '').trim();
      const publicPrice = (row.price || '0').replace('฿', '').trim();
      const stockStr = (row.stock || '0').trim();
      const status = (row.status || '').trim();
      const description = (row.description || '').trim();
      const seo = (row.seo || '').trim();
      const dominance = (row.dominance || '').trim();
      const thc = (row.thc || '0').trim();
      const cbd = (row.cbd || '0').trim();
      const effects = (row.effects || '').trim();
      const relieves = (row.relieves || '').trim();

      // Skip if no name
      if (!name) continue;

      // Generate id from name
      const words = name.split(/\s+/);
      const processedWords = words;
      let id = processedWords.join('-').toLowerCase().replace(/[^a-z0-9-]/g, '').replace(/-+/g, '-').replace(/^-|-$/g, '')
      let counter = 1
      const originalId = id
      while (usedIds.has(id)) {
        id = `${originalId}-${counter}`
        counter++
      }
      usedIds.add(id)

      // Map types
      let category: string
      if (type === 'Strain') category = 'Strains'
      else if (type === 'Edible') category = 'Edibles'
      else if (type === 'Concentrate') category = 'Concentrates'
      else if (type === 'Gadget') category = 'Gadgets'
      else continue // Skip Drink, etc.

      // Map status
      const availability = status === 'In stock' ? 'In stock' : 'Sold out'

      products.push({
        id,
        name,
        type: category,
        price: parseFloat(publicPrice) || 0,
        stock: parseInt(stockStr) || 0,
        initial: 0, // Default value
        wholesale: 0, // Default value
        status: availability,
        dominance: dominance?.trim() || '',
        thc: parseFloat(thc) || 0,
        cbd: parseFloat(cbd) || 0,
        description: description?.trim() || '',
        seo: seo?.trim() || '',
        effects: effects?.trim() || '',
        relieves: relieves?.trim() || '',
        image: '', // Default value
        images: [] // Default value
      })
    }
    return products
  } catch (error) {
    console.error('Error fetching from CSV:', error)
    return []
  }
}

let productsCache: Product[] | null = null

async function getProducts(): Promise<Product[]> {
  if (productsCache) return productsCache

  const csvData = await fetchProductsFromCSV()
  if (csvData.length > 0) {
    productsCache = csvData
    return csvData
  }

  // Fallback to mock if CSV fails
  productsCache = [
    {
      id: '1',
      name: 'Blue Dream',
      type: 'Buds',
      price: 25,
      stock: 10,
      status: 'Available',
      initial: 0,
      wholesale: 0,
      dominance: 'Sativa',
      thc: 18,
      cbd: 0.1,
      description: 'A popular strain',
      seo: 'blue-dream',
      effects: 'Relaxed',
      relieves: 'Stress',
      image: '',
      images: []
    },
    // ... rest of mock
  ]
  return productsCache as Product[]
}

export async function getProductById(id: string): Promise<Product | undefined> {
  const products = await getProducts()
  return products.find(product => product.id === id)
}
