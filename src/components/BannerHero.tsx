'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MenuCategories from '@/components/MenuCategories';

const HERO_IMAGES = [
  '/images/banners/green-ghost-best-degen-weed-shop-delivery-01.avif',
  '/images/banners/green-ghost-best-degen-weed-shop-delivery-02.avif',
  '/images/banners/green-ghost-best-degen-weed-shop-delivery-03.avif',
];

export default function BannerHero() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const rect = parallaxRef.current.getBoundingClientRect();
        const scrolled = window.scrollY;

        // Only apply parallax when hero section is in view
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setOffset(scrolled * 0.5);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={parallaxRef}
      className="relative md:py-24 2xl:py-32 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            transform: `translateY(${offset}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          {HERO_IMAGES.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <Image
                src={src}
                alt="Green Ghost - Best Degen Weed Shop"
                fill
                sizes="100vw"
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black/50 z-10"></div>
      </div>

      {/* Content */}
      <div className="container md:max-w-6xl md:px-4 bg-black/69 p-5 md:mx-auto z-30 text-center">
        <h1 className="md:max-w-3xl mx-auto text-[25px] sm:text-[30px] md:text-[55px] font-bold mb-6 leading-tight">
          <span className="text-[#13DE00]">Best Degen Weed Shop and Delivery</span>
        </h1>

        <p className="text-sm sm:text-md md:text-lg text-gray-300 mb-10 max-w-5xl mx-auto">
          Discover Thailand&apos;s top-rated cannabis dispensary offering premium quality weed hand-picked from the finest local growers. Green Ghost delivers exceptional strains, edibles, concentrates, and accessories across Phuket, Bangkok, and nationwide. Experience fast, reliable weed delivery with expert service, competitive prices, and organic products. From Rawai to Karon, we&apos;re your trusted source for authentic Thai cannabis. Also serving premium CBD products in France!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/menu"
            className="bg-[#13DE00] hover:bg-[#10c500] text-black font-bold py-4 px-8 text-lg transition-colors duration-300"
            title="Shop Now"
          >
            Shop Now
          </Link>
          <Link
            href="/delivery"
            className="bg-transparent border-2 border-[#13DE00] text-[#13DE00] hover:bg-[#13DE00]/13 font-bold py-4 px-8 text-lg transition-colors duration-300"
            title="Order Online"
          >
            Order Online
          </Link>
        </div>

        {/* Products Menu */}
        <div className="my-10 mx-auto">
          <MenuCategories />
        </div>
      </div>

    </div>
  );
}
