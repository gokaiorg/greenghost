'use client'

import Link from 'next/link'
import { useCart } from '@/contexts/CartContext'
import { Product } from '@/lib/types'
import { useState, useEffect } from 'react'

import MenuTypes from '@/components/MenuTypes'
import MiniSlider from '@/components/MiniSlider'
import BannerMenu from '@/components/BannerMenu'

export default function ConcentratesPage() {
  const { addItem } = useCart()
  const [concentrates, setConcentrates] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/products/concentrates')
      .then(res => res.json())
      .then(data => {
        const filtered = data.sort((a: Product, b: Product) => {
          if (a.status !== b.status) {
            return a.status === 'In stock' ? -1 : 1
          }
          return a.price - b.price
        })
        setConcentrates(filtered)
        setLoading(false)
      })
  }, [])

  return (
    <div className="relative">
      <MenuTypes />
      <div className="container mx-auto px-4">
        <div className="flex  md:flex-row flex-col md:items-center space-x-2 mb-2">
          <h1 className="text-xl lg:text-2xl font-bold text-left">Concentrates Menu</h1><p className="text-xs text-gray-400">Concentrates price for 1 gram.</p>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2 list-none m-0 p-0" aria-label="Concentrates menu">
          {concentrates.map((concentrate) => (
            <li key={concentrate.id}>
              <Link href={`/concentrates/${concentrate.id}`} title={concentrate.name}>
                <div className="hover:bg-[#13DE00]/13 p-1 flex flex-col relative">
                  <div className="relative mb-2">
                    <MiniSlider
                      images={[
                        `/images/concentrates/green-ghost-degen-weed-shop-menu-concentrates-${concentrate.id}-cover.avif`,
                        `/images/concentrates/green-ghost-degen-weed-shop-menu-concentrates-${concentrate.id}-01.avif`,
                      ]}
                      alt={concentrate.name}
                      width={100}
                      height={100}
                      autoRotate={true}
                    />
                    {concentrate.status === 'In stock' && (
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          addItem(concentrate, 'Concentrates')
                        }}
                        className="!bg-[#13DE00] text-black px-3 py-2 text-xs hover:!bg-black hover:text-[#13DE00] cursor-pointer absolute bottom-1 right-1 z-10"
                      >
                        Buy 1g
                      </button>
                    )}
                  </div>
                  <ul className="list-none m-0 p-0" aria-label="Product details">
                    <li>
                      <h2 className="text-base lg:text-lg font-semibold mb-1 text-sm leading-tight">{concentrate.name}</h2>
                    </li>
                    <li>
                      <p className="text-[10px] sm:text-xs text-gray-400 whitespace-nowrap">THC {concentrate.thc}%</p>
                    </li>
                    <li className="absolute top-2 right-2">
                      <p className={`px-2 py-1 text-sm ${concentrate.status === 'In stock' ? 'bg-black text-[#13DE00]' : 'bg-black text-red-500'}`}>{concentrate.status === 'In stock' ? `${concentrate.price}฿` : 'Sold out'}</p>
                    </li>
                  </ul>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {loading && (
        <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
          <div className="w-12 h-12 bg-[#13DE00] animate-pulse"></div>
        </div>
      )}
      <BannerMenu imageSrc="/images/banners/green-ghost-best-degen-weed-menu-concentrates.avif" />
    </div>
  )
}
