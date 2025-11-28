import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import GadgetProductClient from './GadgetProductClient'
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

    if (!product || product.type !== 'Gadgets') {
      return null
    }

    // Filter out non-existent images
    const validImages: string[] = [];

    const potentialImages = [
      `/images/gadgets/green-ghost-degen-weed-shop-menu-gadget-${product.id}-01.avif`,
      `/images/gadgets/green-ghost-degen-weed-shop-menu-gadget-${product.id}-02.avif`,
      `/images/gadgets/green-ghost-degen-weed-shop-menu-gadget-${product.id}-03.avif`,
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

export default async function GadgetProductPage({ params }: { params: Promise<{ id: string }> }) {
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
          __html: JSON.stringify(schema)
        }}
      />
      <GadgetProductClient product={product} />
    </>
  )
}
