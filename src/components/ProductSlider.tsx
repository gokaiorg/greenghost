"use client";

import { useState, useRef, useEffect, memo } from "react";
import { Product } from "@/lib/types";
import StrainImage from "./StrainImage";
import Link from "next/link";

import BagAddButton from "./BagAddButton";

interface ProductSlideProps {
  products: Product[];
  category?: string;
  slideIndex: number;
  itemsToShow: number;
}

// Optimization: Wrap the slide content in React.memo to prevent unnecessary re-renders of the
// product cards when the slider's `currentIndex` state changes (which only affects the transform).
const ProductSlide = memo(function ProductSlide({
  products,
  category,
  slideIndex,
  itemsToShow,
}: ProductSlideProps) {
  const slideProducts = products.slice(
    slideIndex * itemsToShow,
    (slideIndex + 1) * itemsToShow,
  );

  return (
    <div className="w-full flex-shrink-0 px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {slideProducts.map((product) => (
          <div key={product.id} className="relative">
            <Link href={`/strains/${product.id}`} title={product.name}>
              <div
                className={`hover:bg-[#13DE00]/13 p-6 flex flex-col relative cursor-pointer`}
              >
                <div className="relative mb-2">
                  <StrainImage
                    src={`/images/strains/green-ghost-degen-weed-shop-strain-${product.id}-cover.avif`}
                    alt={product.name}
                    width={100}
                    height={100}
                    className="w-full h-auto mx-auto"
                  />
                </div>
                <h2 className="text-base md:text-lg font-semibold mb-2">
                  {product.name}
                </h2>
                <div className="flex justify-between flex-wrap">
                  <p
                    className={`text-xs ${
                      product.dominance &&
                      product.dominance.startsWith("Sativa")
                        ? "text-[#d1fee5]"
                        : product.dominance &&
                            product.dominance.startsWith("Hybrid")
                          ? "text-[#c0ef24]"
                          : product.dominance &&
                              product.dominance.startsWith("Indica")
                            ? "text-[#ee9cc9]"
                            : "text-gray-400"
                    }`}
                  >
                    {product.dominance}
                  </p>
                  {product.thc && product.thc > 0 ? (
                    <p className="text-xs text-gray-400">THC {product.thc}%</p>
                  ) : product.cbd && product.cbd > 0 ? (
                    <p className="text-xs text-gray-400">CBD {product.cbd}%</p>
                  ) : null}
                </div>
                <p className="absolute top-0 right-2 bg-black text-[#13DE00] px-2 py-1 text-sm">
                  {product.price}฿
                </p>
              </div>
            </Link>
            <div className="absolute top-6 left-6 right-6 h-[100px] pointer-events-none z-10">
              <div className="absolute bottom-1 left-1 pointer-events-auto">
                <BagAddButton product={product} category={category} compact />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

interface ProductSliderProps {
  products: Product[];
  category?: string;
}

export default function ProductSlider({
  products,
  category = "Buds",
}: ProductSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isDragging = useRef(false);
  const startPos = useRef(0);
  const scrollLeft = useRef(0);

  const sliderRef = useRef<HTMLDivElement>(null);

  // Get number of items to show based on screen size
  const getItemsToShow = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3; // Desktop
      if (window.innerWidth >= 768) return 2; // Tablet
      return 1; // Mobile
    }
    return 1;
  };

  const [itemsToShow, setItemsToShow] = useState(getItemsToShow());

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setItemsToShow(getItemsToShow());
      }, 150);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  const totalSlides = Math.ceil(products.length / itemsToShow);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    startPos.current = e.touches[0].clientX;
    if (sliderRef.current) {
      sliderRef.current.style.transition = "none";
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const currentPos = e.touches[0].clientX;
    const diff = startPos.current - currentPos;
    scrollLeft.current = diff;

    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(calc(-${currentIndex * 100}% - ${diff}px))`;
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    if (sliderRef.current) {
      sliderRef.current.style.transition = "transform 300ms ease-in-out";
    }

    const threshold = 50;
    if (Math.abs(scrollLeft.current) > threshold) {
      if (scrollLeft.current > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    } else {
      // Snap back if threshold not met
      if (sliderRef.current) {
        sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
    }
    scrollLeft.current = 0;
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goToPrevious();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goToNext();
    }
  };

  if (products.length === 0) {
    return (
      <div className="w-full py-8">
        <p className="text-center text-gray-400">No products available</p>
      </div>
    );
  }

  return (
    <div
      className="relative w-full py-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#13DE00]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label={`Featured products in ${category}`}
    >
      {/* Slider Container */}
      <div className="overflow-hidden">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <ProductSlide
              key={slideIndex}
              products={products}
              category={category}
              slideIndex={slideIndex}
              itemsToShow={itemsToShow}
            />
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      {totalSlides > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-1 bottom-1 bg-black bg-opacity-50 text-white p-2  hover:bg-opacity-75 transition-all z-10 cursor-pointer"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-1 bottom-1 bg-black bg-opacity-50 text-white p-2  hover:bg-opacity-75 transition-all z-10 cursor-pointer"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {totalSlides > 1 && (
        <div className="flex justify-center mt-4 space-x-2 absolute bottom-5 left-5">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 p-2 transition-all cursor-pointer ${
                currentIndex === index
                  ? "bg-[#13DE00] w-10"
                  : "bg-gray-400 hover:bg-gray-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
