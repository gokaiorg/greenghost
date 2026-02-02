import { getProducts } from "@/lib/products";
import { Strain } from "@/lib/strain-utils";

export async function getStrains(): Promise<Strain[]> {
  try {
    const products = await getProducts();

    if (products.length === 0) return [];

    return products
      .filter((p) => p.type === "Strains" && p.status === "In stock")
      .map((p) => ({
        name: p.name,
        type: "Strain", // Legacy type expected by Strain interface
        thc: p.thc,
        cbd: p.cbd,
        description: p.description
          .replace(/\\n/g, " ")
          .replace(/"/g, ""),
        effects: p.effects,
        relieves: p.relieves,
        dominance: p.dominance,
      }));
  } catch (error) {
    console.error("Error loading strains:", error);
    return [];
  }
}

