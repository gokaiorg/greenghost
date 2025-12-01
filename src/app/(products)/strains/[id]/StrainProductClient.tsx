'use client'

import { useState } from 'react'



import { Product } from '@/lib/types'
import MenuTypes from '@/components/MenuTypes'
import ImageSlider from '@/components/ImageSlider'
import BackButton from '@/components/BackButton'
import AddToCartButton from '@/components/AddToCartButton'

interface StrainProductClientProps {
  product: Product
}

export default function StrainProductClient({ product }: StrainProductClientProps) {

  const [isPreRoll, setIsPreRoll] = useState(false)

  return (
    <div className="relative">
      <MenuTypes />
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-4">
          <BackButton />
          <h1 className="text-xl md:text-2xl font-bold">{product.name}</h1>
        </div>
        <ImageSlider
          images={product.images && product.images.length > 0
            ? product.images.map((img, index) => ({
              src: img,
              alt: index === 0
                ? `${product.name} cover`
                : `${product.name} ${img.includes('bud-01') ? 'bud 01' : 'bud 02'}`
            }))
            : [{
              src: '/images/logo-green-ghost-degen-weed-shop.png',
              alt: 'No image available'
            }]
          }
          width={200}
          height={200}
        />

        {/* Mobile Price Section - Shows above other info on mobile */}
        <div className="md:hidden mb-4">
          {product.status === 'In stock' ? (
            <div className="flex flex-col items-center space-y-2">
              <div className="text-center">
                <p className="text-sm"><span className="text-white">1g</span> <span className="text-[#13DE00]">{product.price}฿</span></p>
                <p className="text-sm"><span className="text-white">5g</span> <span className="text-[#13DE00]">{product.price * 4}฿</span></p>
                <p className="text-sm"><span className="text-white">30g</span> <span className="text-[#13DE00]">{product.price * 21}฿</span></p>
              </div>
              <AddToCartButton product={product} category={isPreRoll ? 'Pre-rolls' : 'Buds'} className="w-full" compact />
              <div className="flex items-center space-x-2 mt-2">
                <input
                  type="checkbox"
                  id="mobile-pre-roll"
                  checked={isPreRoll}
                  onChange={(e) => setIsPreRoll(e.target.checked)}
                  className="w-4 h-4 text-[#13DE00] bg-gray-700 border-gray-600 rounded focus:ring-[#13DE00] focus:ring-2"
                />
                <label htmlFor="mobile-pre-roll" className="text-sm text-white">Pre-roll</label>
              </div>
            </div>
          ) : (
            <p className="text-red-500 text-right text-center">Sold out</p>
          )}
        </div>

        {/* Desktop Layout - Price on right, info on left */}
        <div className="hidden md:flex justify-between items-start mb-4">
          <ul className="flex flex-col text-sm text-gray-400 space-y-1" aria-label="Product Information">
            <li className={`whitespace-nowrap ${product.dominance && product.dominance.startsWith('Sativa') ? 'text-[#d1fee5]' : product.dominance && product.dominance.startsWith('Hybrid') ? 'text-[#c0ef24]' : product.dominance && product.dominance.startsWith('Indica') ? 'text-[#ee9cc9]' : ''}`}>{product.dominance || 'Unknown'}</li>
            <li className="whitespace-nowrap">{product.cbd > 0 ? `CBD ${product.cbd}%` : `THC ${product.thc}%`}</li>
            {product.effects && <li><span className="text-gray-400">Feelings:</span> <span className="text-yellow-600">{product.effects}</span></li>}
            {product.relieves && <li><span className="text-gray-400">Relieves:</span> <span className="text-yellow-600">{product.relieves}</span></li>}
          </ul>
          {product.status === 'In stock' ? (
            <div className="flex flex-col items-end">
              <div className="text-right mb-2">
                <p className="text-sm"><span className="text-white">1g</span> <span className="text-[#13DE00]">{product.price}฿</span></p>
                <p className="text-sm"><span className="text-white">5g</span> <span className="text-[#13DE00]">{product.price * 4}฿</span></p>
                <p className="text-sm"><span className="text-white">30g</span> <span className="text-[#13DE00]">{product.price * 21}฿</span></p>
              </div>
              <AddToCartButton product={product} category={isPreRoll ? 'Pre-rolls' : 'Buds'} compact />
              <div className="flex items-center space-x-2 mt-2">
                <input
                  type="checkbox"
                  id="desktop-pre-roll"
                  checked={isPreRoll}
                  onChange={(e) => setIsPreRoll(e.target.checked)}
                  className="w-4 h-4 text-[#13DE00] bg-gray-700 border-gray-600 rounded focus:ring-[#13DE00] focus:ring-2"
                />
                <label htmlFor="desktop-pre-roll" className="text-sm text-white">Pre-roll</label>
              </div>
            </div>
          ) : (
            <p className="text-red-500 text-right">Sold out</p>
          )}
        </div>

        {/* Mobile Product Info - Shows below price on mobile */}
        <div className="md:hidden mb-4">
          <ul className="flex flex-col text-sm text-gray-400 space-y-1" aria-label="Product Information">
            <li className={`whitespace-nowrap ${product.dominance && product.dominance.startsWith('Sativa') ? 'text-[#d1fee5]' : product.dominance && product.dominance.startsWith('Hybrid') ? 'text-[#c0ef24]' : product.dominance && product.dominance.startsWith('Indica') ? 'text-[#ee9cc9]' : ''}`}>{product.dominance || 'Unknown'}</li>
            <li className="whitespace-nowrap">{product.cbd > 0 ? `CBD ${product.cbd}%` : `THC ${product.thc}%`}</li>
            {product.effects && <li><span className="text-gray-400">Feelings:</span> <span className="text-yellow-600">{product.effects}</span></li>}
            {product.relieves && <li><span className="text-gray-400">Relieves:</span> <span className="text-yellow-600">{product.relieves}</span></li>}
          </ul>
        </div>
        {product.description && (
          <div className="mb-4">
            <p
              className="text-xs md:text-sm lg:text-base text-gray-200"
              dangerouslySetInnerHTML={{
                __html: product.description
                  .replace(/\\n\\n/g, '<br><br>')  // Handle escaped newlines
                  .replace(/\n\n/g, '<br><br>')    // Handle actual newlines
              }}
            ></p>
          </div>
        )}
      </div>
    </div>
  )
}
