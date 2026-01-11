'use client'

import { Product } from '@/lib/types'
import { useState, useEffect } from 'react'
import MenuCategories from '@/components/MenuCategories'
import StrainFilter from '@/components/StrainFilter'
import BannerMenu from '@/components/BannerMenu'
import BudListItem from '@/components/BudListItem'

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
            <BudListItem key={bud.id} bud={bud} />
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
