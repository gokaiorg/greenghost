console.log("[Products] products.ts loaded");
import { Product } from "@/lib/types";

import { getProductsData } from "@/lib/firestore";
// import { ProductData } from "@/lib/bigquery-types";

async function fetchProductsFromFirestore(): Promise<Product[]> {
  try {
    const bqProducts = await getProductsData();
    console.log(`[Products] Raw products from Firestore: ${bqProducts.length}`);
    if (bqProducts.length > 0) {
      console.log(`[Products] Sample raw product types:`, bqProducts.slice(0, 3).map(p => p.type));
    }

    const products: Product[] = [];
    const usedIds = new Set<string>();

    for (const row of bqProducts) {
      // Get values with fallbacks and clean them
      const name = (row.item_name || "").trim();
      const cleanType = (row.type || "").trim();
      const cleanStatus = (row.status || "").trim();
      const cleanDescription = (row.description || "").trim();
      const cleanSeo = (row.seo || row.seo_description || "").trim();
      const cleanDominance = (row.dominance || "").trim();
      const cleanThc = (row.thc || "0").trim();
      const cleanCbd = (row.cbd || "0").trim();
      const cleanEffects = (row.effects || "").trim();
      const cleanRelieves = (row.relieves || "").trim();

      // Convert values
      const price = Number(row.price) || 0;
      // Calculate total stock from both locations
      const stock =
        (Number(row.rawai_stock) || 0) + (Number(row.karon_stock) || 0);
      const thc = parseFloat(cleanThc) || 0;
      const cbd = parseFloat(cleanCbd) || 0;
      const initialNum =
        (Number(row.rawai_entry) || 0) + (Number(row.karon_entry) || 0);
      const wholesaleNum = Number(row.wholesale_price) || 0;

      // Map types to categories
      let category: string;
      if (cleanType === "Strain") category = "Strains";
      else if (cleanType === "Edible") category = "Edibles";
      else if (cleanType === "Concentrate") category = "Concentrates";
      else if (cleanType === "Gadget") category = "Gadgets";
      else continue; // Skip if type doesn't match any category

      // Skip if no name
      if (!name) continue;

      // Generate id from name (Keep existing logic)
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

      // Generate images array based on category and id (Keep existing logic)
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
        item_name: row.item_name,
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
        image_url: row.image_url,
        image:
          category === "Strains"
            ? `/images/strains/green-ghost-degen-weed-shop-strain-${id}-cover.avif`
            : `/images/products/${id}-cover.avif`,
        images: images,
      };

      products.push(product);
    }
    const counts: Record<string, number> = {};
    products.forEach(p => {
      counts[p.type] = (counts[p.type] || 0) + 1;
    });
    console.log(`[Products] Mapped category counts:`, counts);
    console.log(`[Products] Successfully mapped ${products.length} products.`);
    return products;
  } catch (error) {
    console.error("Error fetching products from Firestore:", error);
    return [];
  }
}

let productsCache: Product[] = [];

export async function getProducts(): Promise<Product[]> {
  if (productsCache.length > 0) return productsCache;

  const data = await fetchProductsFromFirestore();
  if (data.length > 0) {
    productsCache = data;
    return data;
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

export async function getFilteredProductsForMenu(
  type: string,
  status: string = "In stock",
): Promise<Product[]> {
  const allProducts = await getProducts();
  
  // Normalize type for filtering
  const targetCategory = type === "Strain" ? "Strains" : 
                         type === "Edible" ? "Edibles" : 
                         type === "Concentrate" ? "Concentrates" : 
                         type === "Gadget" ? "Gadgets" : type;

  return allProducts.filter(
    (p) => p.type === targetCategory && p.status === status,
  );
}
