import { notFound } from 'next/navigation'
import { toJsonLd } from '@/lib/utils/json-ld';
import type { Metadata } from 'next'
import ConcentrateProductClient from './ConcentrateProductClient'
import { Product } from '@/lib/types'
import { generateProductMetadata, generateProductSchema } from '@/lib/config/product-metadata'
import { getProductById } from '@/lib/products'
import fs from 'fs/promises'
import path from 'path'

interface PageProps {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

async function getProduct(id: string): Promise<Product | null> {
  try {
    const product = await getProductById(id)

    if (!product || product.type !== 'Concentrates') {
      return null
    }

    // Filter out non-existent images
    const validImages: string[] = [];

    const potentialImages = [
      `/images/concentrates/green-ghost-degen-weed-shop-menu-concentrates-${product.id}-cover.avif`,
      `/images/concentrates/green-ghost-degen-weed-shop-menu-concentrates-${product.id}-01.avif`,
      `/images/concentrates/green-ghost-degen-weed-shop-menu-concentrates-${product.id}-02.avif`,
    ];

    for (const imgPath of potentialImages) {
      const fullPath = path.join(process.cwd(), 'public', imgPath);
      try {
        await fs.access(fullPath);
        validImages.push(imgPath);
      } catch {
        // Image does not exist, skip it
        console.warn(`Image not found: ${imgPath}`);
      }
    }
    product.images = validImages;

    return product
  } catch (error) {
    console.error('Error fetching product:', error)
    return null
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const product = await getProduct(id)

  if (!product) {
    return {
      title: 'Product Not Found | Green Ghost Weed Shop',
      description: 'The requested product could not be found.'
    }
  }

  console.log('Generating metadata for product:', product.name, 'SEO:', product.seo)
  return generateProductMetadata(product)
}

export default async function ConcentrateProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = await getProduct(id)

  if (!product) {
    notFound()
  }

  const schema = generateProductSchema(product);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(schema)
        }}
      />
      <ConcentrateProductClient product={product} />
    </>
  )
}
