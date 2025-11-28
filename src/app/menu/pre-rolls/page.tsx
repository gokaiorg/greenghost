'use client'

import Link from 'next/link'
import { useCart } from '@/contexts/CartContext'
import { Product } from '@/lib/types'
import { useState, useEffect } from 'react'
import MenuTypes from '@/components/MenuTypes'
import StrainFilter from '@/components/StrainFilter'
import BannerMenu from '@/components/BannerMenu'

export default function PreRollsPage() {
  const { addItem } = useCart()
  const [allPreRolls, setAllPreRolls] = useState<Product[]>([])
  const [selectedDominances, setSelectedDominances] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/products/strains')
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter((strain: Product) => strain.status === 'In stock').sort((a: Product, b: Product) => a.price - b.price)
        setAllPreRolls(filtered)
        setLoading(false)
      })
  }, [])

  const preRolls = selectedDominances.length > 0 ? allPreRolls.filter(roll => selectedDominances.some(d => roll.dominance?.startsWith(d))) : allPreRolls

  return (
    <div className="relative">
      <MenuTypes />
      <div className="container mx-auto px-4">
        <div className="flex  md:flex-row flex-col md:items-center space-x-2 mb-2">
          <h1 className="text-xl lg:text-2xl font-bold text-left">Pre-rolls Menu</h1><p className="text-xs text-gray-400">On demand. +20THB on delivery. Free on store.</p>
        </div>
        <StrainFilter selectedDominances={selectedDominances} onFilterChange={setSelectedDominances} />
        <ul className="space-y-2 list-none m-0 p-0" aria-label="Pre-rolls menu">
          {preRolls.map((roll) => (
            <li key={roll.id}>
              <Link href={`/strains/${roll.id}`} title={roll.name}>
                <div className="bg-black p-2 transition-all flex items-center justify-between mb-2 sm:mb-0">
                  <ul className="flex flex-col flex-grow list-none m-0 p-0" aria-label="Product details">
                    <li className="flex items-baseline space-x-2">
                      <h2 className="text-base md:text-lg font-semibold text-sm leading-tight">{roll.name}</h2>
                      <ul className="flex items-center space-x-1 list-none m-0 p-0" aria-label="Product attributes">
                        <li>
                          <p className={`text-[10px] sm:text-xs whitespace-nowrap mb-1 ${roll.dominance && roll.dominance.startsWith('Sativa') ? 'text-[#d1fee5]' : roll.dominance && roll.dominance.startsWith('Hybrid') ? 'text-[#c0ef24]' : roll.dominance && roll.dominance.startsWith('Indica') ? 'text-[#ee9cc9]' : 'text-gray-400'}`}>
                            {roll.dominance || 'Unknown'}
                          </p>
                        </li>
                        <li>
                          <p className="text-[10px] sm:text-xs text-gray-400 whitespace-nowrap">THC {roll.thc}%</p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="flex items-center sm:space-x-2 list-none m-0 p-0" aria-label="Product price and actions">
                    <li>
                      <p className="text-sm text-[#13DE00] font-bold whitespace-nowrap mr-2">{roll.price}฿</p>
                    </li>
                    <li>
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          addItem(roll, 'Pre-rolls')
                        }}
                        className="!bg-[#13DE00] text-black px-3 py-2 text-xs hover:!bg-black hover:text-[#13DE00] cursor-pointer flex-shrink-0"
                      >
                        Buy 1g
                      </button>
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
      <BannerMenu imageSrc="/images/banners/green-ghost-best-degen-weed-menu-pre-rolls.avif" />
    </div>
  )
}
