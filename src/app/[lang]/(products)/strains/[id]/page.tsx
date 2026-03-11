import { notFound } from "next/navigation";
import type { Metadata, Viewport } from "next";

import StrainProductClient from "./StrainProductClient";

import { toJsonLd } from "@/lib/utils/json-ld";
import { Product } from "@/lib/types";
import {
  generateProductMetadata,
  generateProductSchema,
} from "@/lib/config/product-metadata";
import { getProductById } from "@/lib/products";

import StrainSection from "@/components/StrainSection";
import MenuListInline from "@/components/MenuListInline";

interface PageProps {
  params: Promise<{ id: string; lang: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

async function getProduct(id: string): Promise<Product | null> {
  try {
    const product = await getProductById(id);
    if (!product || product.type !== "Strains") {
      console.error("Invalid product data or type:", product);
      return null;
    }
    product.images = [
      `/images/strains/green-ghost-degen-weed-shop-strain-${product.id}-cover.avif`,
      `/images/strains/green-ghost-degen-weed-shop-strain-${product.id}-bud-01.avif`,
      `/images/strains/green-ghost-degen-weed-shop-strain-${product.id}-bud-02.avif`,
    ];
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export const viewport: Viewport = {
  themeColor: "#13DE00",
  colorScheme: "dark",
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = await getProduct(id);
  if (!product) {
    return {
      title: "Product Not Found | Green Ghost Weed Shop",
      description: "The requested product could not be found.",
    };
  }

  console.log(
    "Generating metadata for product:",
    product.name,
    "SEO:",
    product.seo,
  );
  return generateProductMetadata(product);
}

export default async function StrainProductPage({
  params,
}: {
  params: Promise<{ id: string; lang: string }>;
}) {
  const { id, lang } = await params;
  const product = await getProduct(id);
  if (!product) {
    notFound();
  }
  const schema = generateProductSchema(product);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(schema),
        }}
      />
      <StrainProductClient
        product={product}
        menuSlot={<MenuListInline locale={lang} />}
      />
      <StrainSection locale={lang} />
    </>
  );
}
