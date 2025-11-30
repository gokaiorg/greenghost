'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Product } from '@/lib/types'
import { useCart } from '@/contexts/CartContext'
import MiniSlider from '@/components/MiniSlider'
import JsonLd from '@/components/JsonLd'
import AddToCartButton from '@/components/AddToCartButton'

const featuredStrainNames = [
  'Strawneapple',
  'Mango Sticky Rice',
  'Toasted Toffee',
  "Ben & Gary's",
  'Thai Stick',
  'Slaphappy',
]

export default function FeaturedProducts() {
  const { addItem } = useCart()
  const [featuredStrains, setFeaturedStrains] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/products/strains')
      .then(res => res.json())
      .then(data => {
        const filtered = data
          .filter(
            (strain: Product) =>
              featuredStrainNames.includes(strain.name) && strain.status === 'In stock'
          )
          .slice(0, 6) // Ensure only 6 are shown
        setFeaturedStrains(filtered)
        setLoading(false)
      })
  }, [])

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Top 6 Must-Try Weed Strains in 2026',
    description:
      'Explore the best weed in Phuket in 2026 with our curated selection of top-quality strains. Handpicked for their superior effects and flavors, these strains include a variety of Sativa, Hybrid, and Indica dominances, each chosen to elevate your experience.',
    itemListElement: featuredStrains.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.name,
        url: `https://green.gd/strains/${product.id}`,
        image: `https://green.gd/images/strains/green-ghost-degen-weed-shop-strain-${product.id}-cover.avif`,
        description: product.description,
        brand: {
          '@type': 'Brand',
          name: 'Green Ghost',
        },
        offers: {
          '@type': 'Offer',
          url: `https://green.gd/strains/${product.id}`,
          priceCurrency: 'THB',
          price: product.price,
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'Organization',
            name: 'Green Ghost',
          },
        },
      },
    })),
  }

  if (loading || featuredStrains.length === 0) {
    return null // Don't show anything if loading or no products found
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <JsonLd data={itemListSchema} />
      <h2 className="text-xl lg:text-2xl font-bold text-left mb-2">Top 6 Must-Try Weed Strains in 2026</h2>
      <p className="text-gray-400 mb-4">
        Explore the best weed in Phuket in 2026 with our curated selection of top-quality strains. Handpicked for their superior effects and flavors, these strains include a variety of Sativa, Hybrid, and Indica dominances, each chosen to elevate your experience.
      </p>
      <ul
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 list-none m-0 p-0"
        aria-label="Top 6 Must-Try Weed Strains"
      >
        {featuredStrains.map(bud => (
          <li key={bud.id} className="relative">
            <Link href={`/strains/${bud.id}`} title={bud.name}>
              <div className={`hover:bg-[#13DE00]/13 p-1 flex flex-col relative cursor-pointer`}>
                <div className="relative mb-2">
                  <MiniSlider
                    images={[
                      `/images/strains/green-ghost-degen-weed-shop-strain-${bud.id}-cover.avif`,
                      `/images/strains/green-ghost-degen-weed-shop-strain-${bud.id}-bud-01.avif`,
                    ]}
                    alt={bud.name}
                    width={100}
                    height={100}
                    autoRotate={true}
                  />
                </div>
                <h2 className="text-base lg:text-lg font-semibold mb-1 text-sm leading-tight">{bud.name}</h2>
                <div className="flex justify-between flex-wrap">
                  <p className={`text-[10px] sm:text-xs whitespace-nowrap mb-1 ${bud.dominance?.startsWith('Sativa') ? 'text-[#d1fee5]' : bud.dominance?.startsWith('Hybrid') ? 'text-[#c0ef24]' : bud.dominance?.startsWith('Indica') ? 'text-[#ee9cc9]' : 'text-gray-400'}`}>{bud.dominance}</p>
                  {bud.thc && bud.thc > 0 ? <p className="text-[10px] sm:text-xs text-gray-400 whitespace-nowrap">THC {bud.thc}%</p> : bud.cbd && bud.cbd > 0 ? <p className="text-[10px] sm:text-xs text-gray-400 whitespace-nowrap">CBD {bud.cbd}%</p> : null}
                </div>
                <p className={`absolute top-2 right-2 px-2 py-1 text-sm bg-black text-[#13DE00]`}>
                  {bud.price}฿
                </p>
              </div>
            </Link>
            <div className="mt-8 md:mt-0 md:absolute md:top-1 md:left-1 md:right-1 md:h-[232px]  lg:h-[185px] xl:h-[236px] pointer-events-none z-10">              <div className="absolute bottom-1 right-1 pointer-events-auto">
              <AddToCartButton product={bud} category="Buds" compact />
            </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <Link
          href="/weed"
          title="Dive into weed"
          className="bg-transparent border-2 border-[#13DE00] text-[#13DE00] hover:bg-[#13DE00]/10 font-bold py-3 px-6 text-base transition-colors duration-300 text-center"
        >
          Dive into weed
        </Link>
        <Link
          href="/strains"
          title="Discover all strains"
          className="bg-[#13DE00] hover:bg-[#10c500] text-black font-bold py-3 px-6 text-base transition-colors duration-300 text-center"
        >
          Discover all strains
        </Link>
      </div>
    </div>
  )
}