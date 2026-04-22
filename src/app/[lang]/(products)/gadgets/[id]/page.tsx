import { notFound } from "next/navigation";
import type { Metadata } from "next";

import GadgetProductClient from "./GadgetProductClient";

import { toJsonLd } from "@/lib/utils/json-ld";
import { Product } from "@/lib/types";
import {
  generateProductMetadata,
  generateProductSchema,
} from "@/lib/config/product-metadata";
import { getProductById, localizeProduct } from "@/lib/products";
import fs from "fs/promises";
import path from "path";

import GadgetSection from "@/components/GadgetSection";
import MenuListInline from "@/components/MenuListInline";

interface PageProps {
  params: Promise<{ id: string; lang: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

async function getProduct(id: string, lang: string): Promise<Product | null> {
  try {
    const rawProduct = await getProductById(id);
    if (!rawProduct || rawProduct.type !== "Gadgets") {
      return null;
    }
    
    // Localize the product fields first
    const product = localizeProduct(rawProduct, lang);

    const validImages: string[] = [];
    const potentialImages = [
      `/images/gadgets/green-ghost-degen-weed-shop-menu-gadget-${product.id}-01.avif`,
      `/images/gadgets/green-ghost-degen-weed-shop-menu-gadget-${product.id}-02.avif`,
      `/images/gadgets/green-ghost-degen-weed-shop-menu-gadget-${product.id}-03.avif`,
    ];

    for (const imgPath of potentialImages) {
      const fullPath = path.join(process.cwd(), "public", imgPath);
      try {
        await fs.access(fullPath);
        validImages.push(imgPath);
      } catch {
        // console.warn(`Image not found: ${imgPath}`);
      }
    }
    product.images = validImages;

    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id, lang } = await params;
  const product = await getProduct(id, lang);

  if (!product) {
    return {
      title: "Product Not Found | Green Ghost Weed Shop",
      description: "The requested product could not be found.",
    };
  }

  return generateProductMetadata(product);
}

export default async function GadgetProductPage({
  params,
}: {
  params: Promise<{ id: string; lang: string }>;
}) {
  const { id, lang } = await params;
  const product = await getProduct(id, lang);

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
      <GadgetProductClient
        product={product}
        menuSlot={<MenuListInline locale={lang} />}
        locale={lang}
      />
      <GadgetSection locale={lang} />
    </>
  );
}
