'use client'

import { useState, useRef } from 'react'
import StrainImage from './StrainImage'

interface ImageSliderProps {
  images: Array<{
    src: string
    alt: string
  }>
  width?: number
  height?: number
}

// Mobile Slider Component - 1 image per slide
function MobileSlider({ images, width, height, currentIndex, goToSlide }: ImageSliderProps & { currentIndex: number, goToSlide: (index: number) => void }) {
  const isDragging = useRef(false)
  const startPos = useRef(0)
  const scrollLeft = useRef(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1
    goToSlide(newIndex)
  }

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1
    goToSlide(newIndex)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true
    startPos.current = e.touches[0].clientX
    if (sliderRef.current) {
      sliderRef.current.style.transition = 'none'
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return
    const currentPos = e.touches[0].clientX
    const diff = startPos.current - currentPos
    scrollLeft.current = diff

    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(calc(-${currentIndex * 100}% - ${diff}px))`
    }
  }

  const handleTouchEnd = () => {
    if (!isDragging.current) return
    isDragging.current = false

    if (sliderRef.current) {
      sliderRef.current.style.transition = 'transform 300ms ease-in-out'
    }



    const threshold = 50 // minimum drag distance to trigger slide change
    if (Math.abs(scrollLeft.current) > threshold) {
      if (scrollLeft.current > 0) {
        goToNext()
      } else {
        goToPrevious()
      }
    } else {
      if (sliderRef.current) {
        sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`
      }
    }
    scrollLeft.current = 0
  }

  return (
    <div
      className="relative w-full"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="overflow-hidden">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0"
            >
              <StrainImage
                src={image.src}
                alt={image.alt}
                width={width}
                height={height}
                className="w-full h-auto mx-auto"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 p-2 transition-all cursor-pointer ${currentIndex === index
              ? 'bg-[#13DE00] w-10'
              : 'bg-gray-400 hover:bg-gray-600'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

// Desktop Grid Component - Show all images in a responsive grid
function DesktopGrid({ images }: ImageSliderProps) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index} className="w-full aspect-square overflow-hidden">
          <StrainImage
            src={image.src}
            alt={image.alt}
            width={800}
            height={800}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  )
}

export default function ImageSlider({ images, width = 400, height = 300 }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  if (images.length === 0) {
    return (
      <div className="w-full py-8">
        <p className="text-center text-gray-400">No images available</p>
      </div>
    )
  }

  // If only 1 image, show it without slider or grid
  if (images.length === 1) {
    return (
      <div className="w-full mb-4">
        <StrainImage
          src={images[0].src}
          alt={images[0].alt}
          width={width}
          height={height}
          className="w-full h-auto mx-auto"
        />
      </div>
    )
  }

  return (
    <div className="relative w-full mb-4">
      {/* Mobile View - Slider with 1 image per slide */}
      <div className="md:hidden">
        <MobileSlider
          images={images}
          width={width}
          height={height}
          currentIndex={currentIndex}
          goToSlide={goToSlide}
        />
      </div>

      {/* Desktop View - Simple grid showing all images */}
      <div className="hidden md:block">
        <DesktopGrid
          images={images}
          width={width}
          height={height}
        />
      </div>
    </div>
  )
}
