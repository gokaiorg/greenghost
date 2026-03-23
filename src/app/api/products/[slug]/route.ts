import { NextRequest, NextResponse } from "next/server";
export const revalidate = 86400;
import { getProductById, getProductsByCategory, localizeProduct } from "@/lib/products";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  try {
    const knownCategories = [
      "buds",
      "strains",
      "pre-rolls",
      "gadgets",
      "edibles",
      "concentrates",
    ];
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get("lang") || "en";

    if (knownCategories.includes(slug)) {
      // It's a category
      const capitalizedCategory = (slug === "buds" ? "strains" : slug).charAt(0).toUpperCase() + (slug === "buds" ? "strains" : slug).slice(1);
      const rawProducts = await getProductsByCategory(capitalizedCategory);
      const products = rawProducts.map(p => localizeProduct(p, lang));
      return NextResponse.json(products);
    } else {
      // It's an individual product id
      const rawProduct = await getProductById(slug);
      if (!rawProduct) {
        return NextResponse.json(
          { error: "Product not found" },
          { status: 404 },
        );
      }
      const product = localizeProduct(rawProduct, lang);
      return NextResponse.json(product);
    }
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}
