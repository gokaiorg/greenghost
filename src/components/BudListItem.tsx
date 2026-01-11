'use client'

import React, { memo } from 'react'
import Link from 'next/link'
import { Product } from '@/lib/types'
import MiniSlider from './MiniSlider'
import BagAddButton from './BagAddButton'

interface BudListItemProps {
  bud: Product
}

const BudListItem = memo(({ bud }: BudListItemProps) => {
  const images = [
    `/images/strains/green-ghost-degen-weed-shop-strain-${bud.id}-cover.avif`,
    `/images/strains/green-ghost-degen-weed-shop-strain-${bud.id}-bud-01.avif`
  ]

  return (
    <li className="relative">
      <Link href={`/strains/${bud.id}`} title={bud.name}>
        <div className={`hover:bg-[#13DE00]/13 p-1 flex flex-col relative cursor-pointer`}>
          <div className="relative mb-2">
            <MiniSlider
              images={images}
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
      <div className="mt-8 md:mt-0 md:absolute md:top-1 md:left-1 md:right-1 md:h-[232px] lg:h-[185px] xl:h-[193px] 2xl:h-[236px] pointer-events-none z-10">
        <div className="absolute bottom-1 right-1 pointer-events-auto">
          <BagAddButton product={bud} category="Buds" compact />
        </div>
      </div>
    </li>
  )
})

BudListItem.displayName = 'BudListItem'

export default BudListItem
