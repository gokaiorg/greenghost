"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface BannerMenuProps {
  imageSrc: string;
  alt?: string;
}

export default function BannerMenu({
  imageSrc,
  alt = "Green Ghost Menu Banner",
}: BannerMenuProps) {
  const [isMobile, setIsMobile] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    let ticking = false;
    const onScroll = () => {
      if (!ticking && window.innerWidth >= 768) {
        window.requestAnimationFrame(() => {
          if (imageContainerRef.current) {
            const img = imageContainerRef.current.querySelector('img.object-cover') as HTMLImageElement;
            if (img) {
              img.style.objectPosition = `50% ${-window.pageYOffset * 0.1}px`;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", checkMobile);
    // Initial calculation
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div ref={imageContainerRef} className="relative w-full h-[250px] md:h-[450px] overflow-hidden mt-8 md:mt-12">
      <Image
        src={imageSrc}
        alt={alt}
        fill
        priority
        fetchPriority="high"
        className="object-cover"
        style={{
          objectPosition: isMobile ? "50% 0" : "50% 0px", // Initial state
        }}
        sizes="100vw"
      />
    </div>
  );
}
