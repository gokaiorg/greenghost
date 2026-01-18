"use client";

import { useState, useEffect } from "react";
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
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative sm:min-h-[250px] md:min-h-[400px] flex flex-col items-center justify-center text-white md:p-8 mb-4 md:mb-8 overflow-hidden">
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
          objectPosition: `center ${offsetY * 0.5}px`,
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
