'use client'

import Link from 'next/link'

import { Product } from '@/lib/types'
import { useState, useEffect } from 'react'
import MenuCategories from '@/components/MenuCategories'
import StrainFilter from '@/components/StrainFilter'
import MiniSlider from '@/components/MiniSlider'
import BannerMenu from '@/components/BannerMenu'
import BagAddButton from '@/components/BagAddButton'

export default function BudsPage() {


  // Since it's client, fetch here
  const [allBuds, setAllBuds] = useState<Product[]>([])
  const [selectedDominances, setSelectedDominances] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/products/strains')
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter((strain: Product) => strain.status === 'In stock').sort((a: Product, b: Product) => a.price - b.price)
        setAllBuds(filtered)
        setLoading(false)
      })
  }, [])

  const buds = selectedDominances.length > 0 ? allBuds.filter(bud => selectedDominances.some(d => bud.dominance?.startsWith(d))) : allBuds

  return (
    <div className="relative">
      <div className="container mx-auto px-4">
        <div className="sm:ml-auto sm:w-fit"><MenuCategories /></div>
        <div className="flex  md:flex-row flex-col md:items-center space-x-2 mb-2">
          <h1 className="text-xl lg:text-2xl font-bold text-left whitespace-nowrap">Buds Menu</h1><p className="text-xs text-gray-400">Buds price for 1 gram.</p>
        </div>
        <StrainFilter selectedDominances={selectedDominances} onFilterChange={setSelectedDominances} />
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2 list-none m-0 p-0" aria-label="Buds menu">
          {buds.map((bud) => (
            <li key={bud.id} className="relative">
              <Link href={`/strains/${bud.id}`} title={bud.name}>
                <div className={`hover:bg-[#13DE00]/13 p-1 flex flex-col relative cursor-pointer`}>
                  <div className="relative mb-2">
                    <MiniSlider
                      images={[
                        `/images/strains/green-ghost-degen-weed-shop-strain-${bud.id}-cover.avif`,
                        `/images/strains/green-ghost-degen-weed-shop-strain-${bud.id}-bud-01.avif`
                      ]}
                      alt={bud.name}
                      width={100}
                      height={100}
                      autoRotate={true}
                    />
                  </div>
                  <ul className="list-none m-0 p-0" aria-label="Product details">
                    <li>
                      <h2 className="text-base lg:text-lg font-semibold mb-1 text-sm leading-tight">{bud.name}</h2>
                    </li>
                    <li className="flex justify-between flex-wrap">
                      <ul className="flex justify-between flex-wrap w-full list-none m-0 p-0" aria-label="Product attributes">
                        <li>
                          <p className={`text-[10px] sm:text-xs whitespace-nowrap mb-1 ${bud.dominance && bud.dominance.startsWith('Sativa') ? 'text-[#d1fee5]' : bud.dominance && bud.dominance.startsWith('Hybrid') ? 'text-[#c0ef24]' : bud.dominance && bud.dominance.startsWith('Indica') ? 'text-[#ee9cc9]' : 'text-gray-400'}`}>{bud.dominance}</p>
                        </li>
                        {bud.thc && bud.thc > 0 ? (
                          <li>
                            <p className="text-[10px] sm:text-xs text-gray-400 whitespace-nowrap">THC {bud.thc}%</p>
                          </li>
                        ) : bud.cbd && bud.cbd > 0 ? (
                          <li>
                            <p className="text-[10px] sm:text-xs text-gray-400 whitespace-nowrap">CBD {bud.cbd}%</p>
                          </li>
                        ) : null}
                      </ul>
                    </li>
                    <li className="absolute top-2 right-2">
                      <p className={`px-2 py-1 text-sm ${bud.status === 'In stock' ? 'bg-black text-[#13DE00]' : 'bg-black text-red-500'}`}>
                        {bud.status === 'In stock' ? `${bud.price}฿` : 'Sold out'}
                      </p>
                    </li>
                  </ul>
                </div>
              </Link>
              <div className="mt-8 md:mt-0 md:absolute md:top-1 md:left-1 md:right-1 md:h-[232px] lg:h-[185px] xl:h-[193px] 2xl:h-[236px] pointer-events-none z-10">                <div className="absolute bottom-1 right-1 pointer-events-auto">
                <BagAddButton product={bud} category="Buds" compact />
              </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {loading && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="w-12 h-12 bg-[#13DE00] animate-pulse"></div>
        </div>
      )}
      <BannerMenu imageSrc="/images/banners/green-ghost-best-degen-weed-menu-buds.avif" />
    </div>
  )
}
