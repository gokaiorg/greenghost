'use client'

import { useState, useEffect, memo } from 'react'
import StrainImage from './StrainImage'

interface MiniSliderProps {
  images: string[]
  alt: string
  width?: number
  height?: number
  autoRotate?: boolean
}

function MiniSlider({ images, alt, width = 100, height = 100, autoRotate = false }: MiniSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startPos, setStartPos] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  useEffect(() => {
    if (!autoRotate) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 6000) // Change image every 6 seconds

    return () => clearInterval(interval)
  }, [images.length, autoRotate])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartPos(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const currentPos = e.touches[0].clientX
    const diff = startPos - currentPos
    setScrollLeft(diff)
  }

  const handleTouchEnd = () => {
    if (!isDragging) return
    setIsDragging(false)

    const threshold = 30 // smaller threshold for mini sliders
    if (Math.abs(scrollLeft) > threshold) {
      if (scrollLeft > 0) {
        goToNext()
      } else {
        goToPrevious()
      }
    }
    setScrollLeft(0)
  }

  if (images.length === 0) {
    return (
      <StrainImage
        src="/images/green-ghost-degen-weed-shop.avif"
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto"
      />
    )
  }

  if (images.length === 1) {
    return (
      <StrainImage
        src={images[0]}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto"
      />
    )
  }

  return (
    <div
      className="relative overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <StrainImage
            key={index}
            src={image}
            alt={`${alt} ${index + 1}`}
            width={width}
            height={height}
            className="w-full h-auto flex-shrink-0"
          />
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-2 space-x-2 absolute bottom-1 left-1">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 p-2 transition-all cursor-pointer ${currentIndex === index ? 'bg-[#13DE00] w-10' : 'bg-gray-400 hover:bg-gray-600'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </div>
  )
}

export default memo(MiniSlider)
