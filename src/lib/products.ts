import { Product } from "@/lib/types";
import path from "path";
import { parseCSV } from "@/lib/utils/csv";

interface ProductCSVRow {
  "Item name": string;
  "Item Name"?: string;
  Type: string;
  Wsp: string;
  Wholesale?: string;
  Price: string;
  "Public Price"?: string;
  Initial: string;
  Stock: string;
  Status: string;
  Description: string;
  SEO: string;
  Dominance: string;
  THC: string;
  CBD: string;
  effects: string;
  relieves: string;
  [key: string]: string | undefined;
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
    } catch (_) {
      console.error("CSV file not found at:", filePath);
      return [];
    }

    const data = await fsPromises.readFile(filePath, "utf-8");
    const parsedData = parseCSV<ProductCSVRow>(data);

    if (parsedData.length === 0) return [];

    const products: Product[] = [];
    const usedIds = new Set<string>();

    for (const row of parsedData) {
      // Get values with fallbacks and clean them
      const name = (row["Item name"] || row["Item Name"] || "").trim();
      const cleanType = (row["Type"] || "").trim();
      const cleanPriceStr = (
        row["Price"] ||
        row["Public Price"] ||
        "0"
      )
        .replace("฿", "")
        .trim();
      const cleanStockStr = (row["Stock"] || "0").trim();
      const cleanStatus = (row["Status"] || "").trim();
      const cleanDescription = (row["Description"] || "").trim();
      const cleanSeo = (row["SEO"] || "").trim();
      const cleanDominance = (row["Dominance"] || "").trim();
      const cleanThc = (row["THC"] || "0").trim();
      const cleanCbd = (row["CBD"] || "0").trim();
      const cleanEffects = (row["effects"] || "").trim();
      const cleanRelieves = (row["relieves"] || "").trim();
      const initial = (row["Initial"] || "0").trim();
      const wholesalePrice = (
        row["Wsp"] ||
        row["Wholesale"] ||
        "0"
      )
        .replace("฿", "")
        .trim();

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
      let id = words
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
