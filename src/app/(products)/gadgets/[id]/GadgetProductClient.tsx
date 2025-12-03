'use client'



import { Product } from '@/lib/types'
import MenuCategories from '@/components/MenuCategories'
import ImageSlider from '@/components/ImageSlider'
import BackButton from '@/components/BackButton'
import AddToCartButton from '@/components/AddToCartButton'

interface GadgetProductClientProps {
  product: Product
}

export default function GadgetProductClient({ product }: GadgetProductClientProps) {


  return (
    <div className="relative">
      <MenuCategories />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-4">
          <BackButton />
          <h1 className="text-xl md:text-2xl font-bold">{product.name}</h1>
        </div>
        <ImageSlider
          images={[
            {
              src: `/images/gadgets/green-ghost-degen-weed-shop-menu-gadget-${product.id}-01.avif`,
              alt: `${product.name} 01`
            },
            {
              src: `/images/gadgets/green-ghost-degen-weed-shop-menu-gadget-${product.id}-02.avif`,
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
              <AddToCartButton product={product} category="Gadgets" className="w-full" compact />
            </div>
          ) : (
            <div className="text-center">
              <p className="text-red-500 text-right">Sold out</p>
            </div>
          )}
        </div>

        {/* Desktop Layout - Price on right, info on left */}
        <div className="hidden md:flex justify-between items-center mb-4">
          <div className="flex flex-col text-sm text-gray-400">
          </div>
          {product.status === 'In stock' ? (
            <div className="flex flex-col items-end">
              <div className="text-right mb-2">
                <p className="text-sm text-[#13DE00]">{product.price}฿</p>
              </div>
              <AddToCartButton product={product} category="Gadgets" compact />
            </div>
          ) : (
            <p className="text-red-500 text-right">Sold out</p>
          )}
        </div>

        {/* Mobile Product Info - Shows below price on mobile */}
        <div className="md:hidden mb-4">
          <div className="flex flex-col text-sm text-gray-400 space-y-1">
          </div>
        </div>

        {product.description && (
          <div className="mb-4">
            <p
              className="text-xs md:text-sm lg:text-base text-gray-200"
              dangerouslySetInnerHTML={{
                __html: product.description
                  .replace(/\\\\n\\\\n/g, '<br><br>')
                  .replace(/\\n\\n/g, '<br><br>')
                  .replace(/\n\n/g, '<br><br>')
              }}
            ></p>
          </div>
        )}
      </div>
    </div>
  )
}
