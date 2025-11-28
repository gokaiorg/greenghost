'use client'

import Image from 'next/image'

interface StrainFilterProps {
  selectedDominances: string[]
  onFilterChange: (dominances: string[]) => void
}

export default function StrainFilter({ selectedDominances, onFilterChange }: StrainFilterProps) {
  const filters = [
    { label: 'Sativa', value: 'Sativa', color: '#d1fee5' },
    { label: 'Hybrid', value: 'Hybrid', color: '#c0ef24' },
    { label: 'Indica', value: 'Indica', color: '#ee9cc9' }
  ]

  const toggleFilter = (value: string) => {
    const newSelected = selectedDominances.includes(value) && selectedDominances.length === 1
      ? []
      : [value]
    onFilterChange(newSelected)
  }

  return (
    <div className="flex space-x-2 mb-2">
      {filters.map((filter) => {
        const isSelected = selectedDominances.includes(filter.value)
        return (
          <button
            key={filter.label}
            onClick={() => toggleFilter(filter.value)}
            className={`flex items-center px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-none transition-colors border-2 cursor-pointer ${isSelected
              ? ''
              : 'border-black'
              }`}
            style={isSelected ? { borderColor: filter.color, color: filter.color } : { color: filter.color }}
            aria-label={filter.label}
          >
            <div className="relative w-4 h-4 mr-1 sm:mr-2">
              <Image
                src={`/images/icons/${filter.value.toLowerCase()}-green-ghost.avif`}
                alt=""
                fill
                className="object-contain"
                aria-hidden="true"
                sizes="16px"
              />
            </div>
            {filter.label}
          </button>
        )
      })}
    </div>
  )
}
