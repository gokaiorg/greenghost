import { NextRequest, NextResponse } from "next/server";
export const revalidate = 86400;
import { getProductById, getProductsByCategory } from "@/lib/products";

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
    if (knownCategories.includes(slug)) {
      // It's a category
      const capitalizedCategory = slug.charAt(0).toUpperCase() + slug.slice(1);
      console.log(`Fetching products for category: ${capitalizedCategory}`);
      const products = await getProductsByCategory(capitalizedCategory);
      console.log(`Found ${products.length} products`);
      return NextResponse.json(products);
    } else {
      // It's an individual product id
      console.log(`Fetching product by id: ${slug}`);
      const product = await getProductById(slug);
      if (!product) {
        return NextResponse.json(
          { error: "Product not found" },
          { status: 404 },
        );
      }
      return NextResponse.json(product);
    }
  } catch (error) {
    console.error("Error fetching:", error);
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}
