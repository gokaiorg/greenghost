'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Star } from 'lucide-react'

type Review = {
  name: string;
  comment: string
  link: string
  shop: string
}

// Helper function to parse CSV line with proper handling of quoted fields
function parseCSVLineRobust(line: string): string[] {
  const result: string[] = []
  let current = ''
  let inQuotes = false

  for (let i = 0; i < line.length; i++) {
    const char = line[i]
    const nextChar = line[i + 1]

    if (char === '"') {
      if (inQuotes && nextChar === '"') { // Escaped quote
        current += '"'
        i++ // Skip next quote
      } else { // Toggle quote state
        inQuotes = !inQuotes
      }
    } else if (char === ',' && !inQuotes) { // Field separator
      result.push(current)
      current = ''
    } else {
      current += char
    }
  }

  // Add last field
  result.push(current)

  return result.map(field => field.trim().replace(/^"|"$/g, '')) // Trim and remove surrounding quotes
}

async function getReviews(): Promise<Review[]> {
  try {
    const res = await fetch('/datas/reviews.csv')
    const fileContent = await res.text()
    const lines = fileContent.trim().split('\n');
    if (lines.length < 2) return [];
    const headers = parseCSVLineRobust(lines[0]).map(h => h.trim());
    return lines.slice(1).map(line => {
      const values = parseCSVLineRobust(line);
      const reviewData: Record<string, string> = {};
      headers.forEach((header, index) => {
        reviewData[header.toLowerCase()] = values[index];
      });
      return {
        name: reviewData.name || 'Anonymous',
        comment: reviewData.comment || '',
        link: reviewData.link || '#',
        shop: reviewData.shop || '',
      };
    });
  } catch (error) {
    console.error('Error reading reviews.csv:', error);
    return [];
  }
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(3)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [currentX, setCurrentX] = useState(0)

  useEffect(() => {
    getReviews().then(setReviews)

    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth >= 768 ? 3 : 1)
    }

    updateItemsPerPage()
    window.addEventListener('resize', updateItemsPerPage)

    return () => window.removeEventListener('resize', updateItemsPerPage)
  }, [])

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true)
    setStartX('touches' in e ? e.touches[0].clientX : e.clientX)
    setCurrentX('touches' in e ? e.touches[0].clientX : e.clientX)
  }

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return

    const x = 'touches' in e ? e.touches[0].clientX : e.clientX
    setCurrentX(x)

    // Add visual feedback during drag
    const dragOffset = x - startX
    const sliderElement = document.getElementById('reviews-slider')
    if (sliderElement) {
      const baseTransform = -currentIndex * 100
      const dragTransform = baseTransform + (dragOffset / sliderElement.offsetWidth) * 100
      sliderElement.style.transform = `translateX(${dragTransform}%)`
    }
  }

  const handleDragEnd = () => {
    if (!isDragging) return

    const diff = startX - currentX
    const threshold = 50 // Minimum drag distance to trigger slide change

    // Reset transform before updating index
    const sliderElement = document.getElementById('reviews-slider')
    if (sliderElement) {
      sliderElement.style.transform = `translateX(-${currentIndex * 100}%)`
    }

    if (Math.abs(diff) > threshold) {
      if (diff > 0 && currentIndex < totalSlides - 1) {
        // Dragged left, go to next slide
        setCurrentIndex(currentIndex + 1)
      } else if (diff < 0 && currentIndex > 0) {
        // Dragged right, go to previous slide
        setCurrentIndex(currentIndex - 1)
      }
    }

    setIsDragging(false)
    setCurrentX(0)
    setStartX(0)
  }

  if (reviews.length === 0) {
    return null
  }

  const totalSlides = Math.ceil(reviews.length / itemsPerPage)

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="bg-black py-16 relative overflow-hidden">
      {/* Decorative Cannabis Leaves */}
      <div className="absolute top-10 left-10 opacity-80 pointer-events-none hidden md:block">
        <Image
          src="/images/icons/green-ghost-degen-weed-shop-cannabis-leaf.avif"
          alt="Leaf Green Ghost"
          width={150}
          height={150}
          className="rotate-12 animate-pulse"
        />
      </div>
      <div className="absolute bottom-10 right-10 opacity-80 pointer-events-none hidden md:block">
        <Image
          src="/images/icons/indica-green-ghost.avif"
          alt="Indica Green Ghost"
          width={120}
          height={120}
          className="-rotate-12 animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>
      <div className="absolute top-1/2 left-5 opacity-50 pointer-events-none hidden lg:block">
        <Image
          src="/images/icons/hybrid-green-ghost.avif"
          alt="Hybrid Green Ghost"
          width={80}
          height={80}
          className="rotate-45"
        />
      </div>
      <div className="absolute top-1/3 right-5 opacity-50 pointer-events-none hidden lg:block">
        <Image
          src="/images/icons/sativa-green-ghost.avif"
          alt="Sativa Green Ghost"
          width={100}
          height={100}
          className="-rotate-45"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-white">
          <span className="text-[#13DE00]">Green</span> Ghosted Peeps
        </h2>
        <div className="relative">
          <div
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
          >
            <ul
              id="reviews-slider"
              className="flex transition-transform duration-300 ease-in-out list-none m-0 p-0"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: isDragging ? 'none' : 'transform 0.3s ease-in-out'
              }}
              aria-label="Customer reviews"
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <li key={slideIndex} className="w-full shrink-0 px-2">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {reviews
                      .slice(
                        slideIndex * itemsPerPage,
                        (slideIndex + 1) * itemsPerPage
                      )
                      .map((review, index) => (
                        <div
                          key={index}
                          className="bg-[#13DE00]/13 p-6 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center mb-4">
                              <div className="flex text-[#13DE00]">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} size={20} fill="currentColor" />
                                ))}
                              </div>
                              <p className="ml-4 font-semibold text-white">
                                {review.name}
                              </p>
                            </div>
                            <p className="text-gray-300 mb-4 text-sm italic">
                              &quot;{review.comment}&quot;
                            </p>
                          </div>
                          <div className="flex justify-between items-center mt-4">
                            <a href={review.link} target="_blank" rel="noopener noreferrer" className="text-sm text-[#13DE00] hover:underline" title="Read full review">
                              Read full review
                            </a>
                            {review.shop && (
                              <Link href={`/locations/${review.shop.toLowerCase()}`} className="text-xs bg-gray-700 text-white py-1 px-2 hover:bg-gray-600 transition-colors" title={review.shop}>
                                {review.shop}
                              </Link>
                            )}
                          </div>
                        </div>
                      ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {totalSlides > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-4 h-4 p-2 transition-all cursor-pointer ${currentIndex === index ? 'bg-[#13DE00] w-10' : 'bg-gray-700 hover:bg-gray-500'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
