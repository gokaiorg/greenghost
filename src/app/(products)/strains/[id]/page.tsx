import { notFound } from 'next/navigation'
import type { Metadata, Viewport } from 'next'
import StrainProductClient from './StrainProductClient'
import { Product } from '@/lib/types'
import { generateProductMetadata, generateProductSchema } from '@/lib/config/product-metadata'
import { getProductById } from '@/lib/products'

interface PageProps {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

async function getProduct(id: string): Promise<Product | null> {
  try {
    const product = await getProductById(id)

    if (!product || product.type !== 'Strains') {
      console.error('Invalid product data or type:', product)
      return null
    }

    // Generate image paths programmatically
    // The StrainImage component will handle missing images with fallback
    product.images = [
      `/images/strains/green-ghost-degen-weed-shop-strain-${product.id}-cover.avif`,
      `/images/strains/green-ghost-degen-weed-shop-strain-${product.id}-bud-01.avif`,
      `/images/strains/green-ghost-degen-weed-shop-strain-${product.id}-bud-02.avif`,
    ];

    return product
  } catch (error) {
    console.error('Error fetching product:', error)
    return null
  }
}

export const viewport: Viewport = {
  themeColor: '#13DE00',
  colorScheme: 'dark',
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
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

export default async function StrainProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
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
      <StrainProductClient product={product} />
    </>
  )
}
