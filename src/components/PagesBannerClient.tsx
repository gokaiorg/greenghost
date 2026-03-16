"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export interface PagesBannerClientProps {
  title: string;
  subtitle: string;
  bgSrc: string;
  iconSrc?: string;
  iconAlt?: string;
}

export default function PagesBannerClient({
  title,
  subtitle,
  bgSrc,
  iconSrc,
  iconAlt,
}: PagesBannerClientProps) {
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (imageContainerRef.current) {
            // Target the next/image img element which is a direct child usually,
            // or we can query for the specific class.
            const img = imageContainerRef.current.querySelector('img.object-cover.z-0') as HTMLImageElement;
            if (img) {
              img.style.objectPosition = `center ${window.pageYOffset * 0.5}px`;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial position
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={imageContainerRef} className="relative sm:min-h-[250px] md:min-h-[400px] flex flex-col items-center justify-center text-white md:p-8 mb-4 md:mb-8 overflow-hidden">
      <Image
        src={`/images/banners/${bgSrc}`}
        alt={iconAlt || title}
        fill
        sizes="100vw"
        priority
        fetchPriority="high"
        loading="eager"
        className="object-cover z-0"
        style={{
          objectPosition: "center 0px", // Initial state
        }}
      />

      <div className="relative z-10 flex flex-col items-center mt-6">
        {iconSrc && (
          <Image
            src={`/images/icons/${iconSrc}`}
            alt={iconAlt || title}
            width={100}
            height={100}
            priority
            className="max-h-[100px] md:max-h-[150px] w-auto"
            style={{ width: "auto", height: "auto" }}
          />
        )}
        <div className="bg-black/[.69] p-4 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-shadow-lg/50">
            {title}
          </h1>
          <p className="banner-description text-xs sm:text-sm md:text-base text-shadow-lg/50">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
