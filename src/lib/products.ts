import { Product } from "@/lib/types";
import path from "path";

// Helper function to parse CSV line with proper handling of quoted fields
function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
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
    } else if (char === "," && !inQuotes) {
      // Field separator
      result.push(current);
      current = "";
    } else {
      current += char;
    }
  }

  // Add last field
  result.push(current);

  return result;
}

async function fetchProductsFromCSV(): Promise<Product[]> {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "datas",
      "products.csv",
    );

    // Use promises for file access
    const fsPromises = (await import("fs/promises")).default;

    // Check if file exists asynchronously
    try {
      await fsPromises.access(filePath);
    } catch (err) {
      console.error("CSV file not found at:", filePath);
      return [];
    }

    const data = await fsPromises.readFile(filePath, "utf-8");
    const lines = data.trim().split("\n");

    if (lines.length < 2) return []; // No data or only header

    const products: Product[] = [];
    const usedIds = new Set<string>();

    for (let i = 1; i < lines.length; i++) {
      // Parse CSV line properly handling quoted fields with commas
      const parts = parseCSVLine(lines[i]);
      if (parts.length < 13) continue; // Skip malformed lines

      // Extract fields with proper mapping for the new format
      // Format: Item name,Type,Wsp,Price,Initial,Stock,Status,Description,SEO,Dominance,THC,CBD,effects,relieves
      const [
        itemName,
        productType,
        wsp,
        priceStr,
        initialStr,
        stockStr,
        status,
        description,
        seo,
        dominance,
        thcStr,
        cbdStr,
        effects,
        relieves,
      ] = parts;

      // Get values with fallbacks and clean them
      const name = (itemName || "").trim();
      const cleanType = (productType || "").trim();
      const cleanPriceStr = (priceStr || "0").replace("฿", "").trim();
      const cleanStockStr = (stockStr || "0").trim();
      const cleanStatus = (status || "").trim();
      const cleanDescription = (description || "").trim();
      const cleanSeo = (seo || "").trim();
      const cleanDominance = (dominance || "").trim();
      const cleanThc = (thcStr || "0").trim();
      const cleanCbd = (cbdStr || "0").trim();
      const cleanEffects = (effects || "").trim();
      const cleanRelieves = (relieves || "").trim();
      const initial = (initialStr || "0").trim();
      const wholesalePrice = (wsp || "0").replace("฿", "").trim();

      // Convert string values to numbers with proper type handling
      const price = parseFloat(cleanPriceStr) || 0;
      const stock = parseInt(cleanStockStr, 10) || 0;
      const thc = parseFloat(cleanThc) || 0;
      const cbd = parseFloat(cleanCbd) || 0;
      const initialNum = parseInt(initial, 10) || 0;
      const wholesaleNum = parseFloat(wholesalePrice) || 0;

      // Map types to categories
      let category: string;
      if (cleanType === "Strain") category = "Strains";
      else if (cleanType === "Edible") category = "Edibles";
      else if (cleanType === "Concentrate") category = "Concentrates";
      else if (cleanType === "Gadget") category = "Gadgets";
      else continue; // Skip if type doesn't match any category

      // Skip if no name
      if (!name) continue;

      // Generate id from name
      const words = name.split(/\s+/);
      const processedWords = words;
      let id = processedWords
        .join("-")
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, "")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
      let counter = 1;
      const originalId = id;
      while (usedIds.has(id)) {
        id = `${originalId}-${counter}`;
        counter++;
      }
      usedIds.add(id);

      // Generate images array based on category and id
      let images: string[] = [];
      if (category === "Strains") {
        images = [
          `/images/strains/green-ghost-degen-weed-shop-strain-${id}-bud-01.avif`,
          `/images/strains/green-ghost-degen-weed-shop-strain-${id}-bud-02.avif`,
        ];
      } else if (category === "Edibles") {
        images = [
          `/images/edibles/green-ghost-degen-weed-shop-menu-edible-${id}-cover.avif`,
          `/images/edibles/green-ghost-degen-weed-shop-menu-edible-${id}-01.avif`,
        ];
      } else if (category === "Concentrates") {
        images = [
          `/images/concentrates/green-ghost-degen-weed-shop-menu-concentrates-${id}-cover.avif`,
          `/images/concentrates/green-ghost-degen-weed-shop-menu-concentrates-${id}-02.avif`,
        ];
      } else if (category === "Gadgets") {
        images = [
          `/images/gadgets/green-ghost-degen-weed-shop-menu-gadget-${id}-01.avif`,
          `/images/gadgets/green-ghost-degen-weed-shop-menu-gadget-${id}-02.avif`,
        ];
      }

      // Create product object with all fields
      const product: Product = {
        id,
        name,
        type: category,
        price,
        stock,
        initial: initialNum,
        wholesale: wholesaleNum,
        status: cleanStatus === "In stock" ? "In stock" : "Sold out",
        description: cleanDescription,
        seo: cleanSeo,
        dominance: cleanDominance,
        thc,
        cbd,
        effects: cleanEffects,
        relieves: cleanRelieves,
        image:
          category === "Strains"
            ? `/images/strains/green-ghost-degen-weed-shop-strain-${id}-cover.avif`
            : `/images/products/${id}-cover.avif`,
        images: images,
      };

      products.push(product);
    }
    return products;
  } catch (error) {
    console.error("Error fetching from CSV:", error);
    return [];
  }
}

let productsCache: Product[] = [];

export async function getProducts(): Promise<Product[]> {
  if (productsCache.length > 0) return productsCache;

  const csvData = await fetchProductsFromCSV();
  if (csvData.length > 0) {
    productsCache = csvData;
    return csvData;
  }

  return [];
}

export async function getProductById(id: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((product) => product.id === id);
}

export async function getProductsByCategory(
  category: string,
): Promise<Product[]> {
  const products = await getProducts();
  return products.filter((p) => p.type === category);
}
