'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface BannerProps {
  title: string
  description: string
  bgSrc: string
  iconSrc?: string
  iconAlt?: string
}

export default function Banner({ title, description, bgSrc, iconSrc, iconAlt }: BannerProps) {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative sm:min-h-[250px] md:min-h-[400px] flex flex-col items-center justify-center text-white md:p-8 mb-4 md:mb-8 overflow-hidden">
      <Image
        src={`/images${bgSrc}`}
        alt={title}
        fill
        priority
        fetchPriority="high"
        className="object-cover z-0"
        style={{
          objectPosition: `center ${offsetY * 0.5}px`,
        }}
      />

      <div className="relative z-10 flex flex-col items-center mt-6">
        {iconSrc && (
          <Image
            src={iconSrc}
            alt={iconAlt || title}
            width={120}
            height={120}
            priority
            className="max-h-[80px] md:max-h-[120px] w-auto"
            style={{ width: 'auto', height: 'auto' }}
          />
        )}
        <div className="bg-black/69 p-4 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-shadow-lg/50">{title}</h1>
          <p className="banner-description text-xs sm:text-sm md:text-base text-shadow-lg/50">{description}</p>
        </div>
      </div>
    </div>
  )
}
