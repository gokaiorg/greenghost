'use client'


import { useCart } from '@/contexts/CartContext'
import { Product } from '@/lib/types'
import MenuTypes from '@/components/MenuTypes'
import ImageSlider from '@/components/ImageSlider'
import BackButton from '@/components/BackButton'
import AddToCartButton from '@/components/AddToCartButton'

interface ConcentrateProductClientProps {
  product: Product
}

export default function ConcentrateProductClient({ product }: ConcentrateProductClientProps) {
  const { addItem } = useCart()

  return (
    <div className="relative">
      <MenuTypes />
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-4">
          <BackButton />
          <h1 className="text-xl md:text-2xl font-bold">{product.name}</h1>
        </div>
        <ImageSlider
          images={[
            {
              src: `/images/concentrates/green-ghost-degen-weed-shop-menu-concentrates-${product.id}-cover.avif`,
              alt: `${product.name} cover`
            },
            {
              src: `/images/concentrates/green-ghost-degen-weed-shop-menu-concentrates-${product.id}-01.avif`,
              alt: `${product.name} 01`
            },
            {
              src: `/images/concentrates/green-ghost-degen-weed-shop-menu-concentrates-${product.id}-02.avif`,
              alt: `${product.name} 02`
            }
          ]}
          width={200}
          height={200}
        />

        {/* Mobile Price Section - Shows above other info on mobile */}
        <div className="md:hidden mb-4">
          {product.status === 'In stock' ? (
            <div className="flex flex-col items-center space-y-2">
              <div className="text-center">
                <p className="text-sm text-[#13DE00]">{product.price}฿</p>
              </div>
              <AddToCartButton product={product} category="Concentrates" className="w-full" compact />
            </div>
          ) : (
            <div className="text-center">
              <p className="text-red-500 text-right">Sold out</p>
            </div>
          )}
        </div>

        {/* Desktop Layout - Price on right, info on left */}
        <div className="hidden md:flex justify-between mb-4">
          <div className="flex flex-col text-sm text-gray-400">
            <span className="whitespace-nowrap">THC {product.thc}%</span>
            {product.effects && <span><span className="text-gray-400">Feelings:</span> <span className="text-yellow-600">{product.effects}</span></span>}
            {product.relieves && <span><span className="text-gray-500">Relieves:</span> <span className="text-yellow-600">{product.relieves}</span></span>}
          </div>
          {product.status === 'In stock' ? (
            <div className="flex flex-col items-end">
              <div className="text-right mb-2">
                <p className="text-sm text-[#13DE00]">{product.price}฿</p>
              </div>
              <AddToCartButton product={product} category="Concentrates" compact />
            </div>
          ) : (
            <p className="text-red-500 text-right">Sold out</p>
          )}
        </div>

        {/* Mobile Product Info - Shows below price on mobile */}
        <div className="md:hidden mb-4">
          <div className="flex flex-col text-sm text-gray-400">
            <span className="whitespace-nowrap">THC {product.thc}%</span>
            {product.effects && <span><span className="text-gray-400">Feelings:</span> <span className="text-yellow-600">{product.effects}</span></span>}
            {product.relieves && <span><span className="text-gray-400">Relieves:</span> <span className="text-yellow-600">{product.relieves}</span></span>}
          </div>
        </div>

        {product.description && (
          <div className="mb-4">
            <p
              className="text-xs md:text-sm lg:text-base text-gray-200"
              dangerouslySetInnerHTML={{
                __html: product.description
                  .replace(/\\n\\n|\n\n/g, '<br><br>')
              }}
            ></p>
          </div>
        )}
      </div>
    </div>
  )
}
