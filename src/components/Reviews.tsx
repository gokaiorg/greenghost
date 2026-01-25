"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { sanitizeUrl } from "@/lib/utils/url";
import { Review } from "@/lib/types";

interface ReviewsProps {
  reviews: Review[];
}

export default function Reviews({ reviews = [] }: ReviewsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const navScrollContainerRef = useRef<HTMLDivElement>(null);
  // For verify we are not in infinite loop
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth >= 768 ? 3 : 1);
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalSlides = Math.ceil(reviews.length / itemsPerPage);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  }, [totalSlides]);

  // Auto-play logic
  useEffect(() => {
    if (totalSlides <= 1 || isDragging) return;

    const startAutoPlay = () => {
      timeoutRef.current = setTimeout(() => {
        nextSlide();
      }, 5000);
    };

    startAutoPlay();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, totalSlides, isDragging, nextSlide]);

  // Scroll active dot into view
  useEffect(() => {
    if (navScrollContainerRef.current) {
      const activeDot = navScrollContainerRef.current.children[
        currentIndex
      ] as HTMLElement;
      if (activeDot) {
        const container = navScrollContainerRef.current;
        const scrollLeft =
          activeDot.offsetLeft -
          container.clientWidth / 2 +
          activeDot.clientWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: "smooth" });
      }
    }
  }, [currentIndex]);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setStartX("touches" in e ? e.touches[0].clientX : e.clientX);
    setCurrentX("touches" in e ? e.touches[0].clientX : e.clientX);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;

    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    setCurrentX(x);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;

    const diff = startX - currentX;
    const threshold = 50; // Minimum drag distance to trigger slide change

    if (Math.abs(diff) > threshold) {
      if (diff > 0 && currentIndex < totalSlides - 1) {
        // Dragged left, go to next slide
        setCurrentIndex(currentIndex + 1);
      } else if (diff > 0 && currentIndex === totalSlides - 1) {
        // Wrap around to first
        setCurrentIndex(0);
      } else if (diff < 0 && currentIndex > 0) {
        // Dragged right, go to previous slide
        setCurrentIndex(currentIndex - 1);
      } else if (diff < 0 && currentIndex === 0) {
        // Wrap around to last
        setCurrentIndex(totalSlides - 1);
      }
    }

    setIsDragging(false);
    setCurrentX(0);
    setStartX(0);
  };

  if (reviews.length === 0) {
    return null;
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
          style={{ animationDelay: "1s" }}
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
        <div
          className="relative group"
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
          onMouseLeave={() => {
            /* Effect will restart loop naturally */ nextSlide();
          }} // Trigger restart
        >
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
              className="grid grid-cols-1 list-none m-0 p-0"
              aria-label="Customer reviews"
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <li
                  key={slideIndex}
                  className={`w-full col-start-1 row-start-1 transition-opacity duration-1000 ease-in-out ${
                    currentIndex === slideIndex
                      ? "opacity-100 z-10 relative"
                      : "opacity-0 z-0 absolute top-0 left-0 pointer-events-none"
                  }`}
                  aria-hidden={currentIndex !== slideIndex}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {reviews
                      .slice(
                        slideIndex * itemsPerPage,
                        (slideIndex + 1) * itemsPerPage,
                      )
                      .map((review, index) => (
                        <div
                          key={index}
                          className="bg-[#13DE00]/13 p-6 flex flex-col justify-between h-full"
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
                            <a
                              href={sanitizeUrl(review.link)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-[#13DE00] hover:underline"
                              title="Read full review"
                            >
                              Read full review
                            </a>
                            {review.shop && (
                              <Link
                                href={`/locations/${review.shop.toLowerCase()}`}
                                className="text-xs bg-gray-700 text-white py-1 px-2 hover:bg-gray-600 transition-colors"
                                title={review.shop}
                              >
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
            <div className="mt-8 px-4">
              <div
                ref={navScrollContainerRef}
                className="flex justify-start md:justify-center space-x-2 overflow-x-auto pb-4 md:pb-0 scrollbar-hide snap-x"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`shrink-0 w-4 h-4 transition-all cursor-pointer snap-center ${
                      currentIndex === index
                        ? "bg-[#13DE00] w-10"
                        : "bg-gray-700 hover:bg-gray-500"
                    }`}
                    aria-label={`Go to slide ${index + 1} of ${totalSlides}`}
                    aria-current={currentIndex === index ? "true" : "false"}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
