"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { getLocalizedUrl } from "@/lib/i18n-helpers";

const HERO_IMAGES = [
  "/images/banners/green-ghost-best-degen-weed-shop-delivery-01.avif",
  "/images/banners/green-ghost-best-degen-weed-shop-delivery-02.avif",
  "/images/banners/green-ghost-best-degen-weed-shop-delivery-03.avif",
];

const PARALLAX_FACTOR = 0.5;

interface BannerHeroProps {
  menuSlot?: ReactNode;
  subtitle?: string;
  description?: string;
  locale?: string;
}

export default function BannerHero({
  menuSlot,
  subtitle,
  description,
  locale,
}: BannerHeroProps) {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // ⚡ Bolt: Throttled scroll event using requestAnimationFrame to prevent
    // main thread blocking and layout thrashing. The `ticking` flag ensures
    // we only process one frame at a time, making parallax scrolling smoother.
    let ticking = false;
    let rafId: number | null = null;
    const handleScroll = () => {
      if (!ticking) {
        rafId = window.requestAnimationFrame(() => {
          if (parallaxRef.current && bgRef.current) {
            const rect = parallaxRef.current.getBoundingClientRect();

            // Only apply parallax when hero section is in view
            if (rect.top < window.innerHeight && rect.bottom > 0) {
              const scrolled = window.scrollY;
              const offset = scrolled * PARALLAX_FACTOR;
              bgRef.current.style.transform = `translateY(${offset}px)`;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial calculation in case we start scrolled down
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <section
      ref={parallaxRef}
      className="relative md:py-24 2xl:py-32 flex flex-col items-center justify-center overflow-hidden"
      aria-label="Banner Hero"
    >
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <div
          ref={bgRef}
          className="absolute inset-0 w-full h-full"
          style={{
            transform: "translateY(0px)", // Initial state
          }}
        >
          {HERO_IMAGES.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={src}
                alt="Green Ghost - Best Degen Weed Shop"
                fill
                sizes="100vw"
                className="object-cover"
                priority={index === 0}
                fetchPriority={index === 0 ? "high" : "low"}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black/50 z-10"></div>
      </div>

      {/* Content */}
      <div className="container md:max-w-6xl md:px-4 bg-black/69 p-5 md:mx-auto z-30 text-center">
        <h1 className="md:max-w-3xl mx-auto text-[25px] sm:text-[30px] md:text-[40px] font-bold mb-6 leading-tight">
          <span className="text-[#13DE00]">{subtitle}</span>
        </h1>

        <p className="text-sm sm:text-md md:text-[1rem] text-gray-300 mb-10 max-w-5xl mx-auto">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href={getLocalizedUrl("/menu", locale || "en")}
            className="bg-[#13DE00] hover:bg-[#10c500] text-black font-bold py-4 px-8 text-lg transition-colors duration-300"
            title="Cannabis Thailand"
          >
            CANNABIS THAILAND
          </Link>
          <Link
            href={getLocalizedUrl("/cbd-france", locale || "en")}
            className="bg-transparent border-2 border-[#13DE00] text-[#13DE00] hover:bg-[#13DE00]/13 font-bold py-4 px-8 text-lg transition-colors duration-300"
            title="CBD France"
          >
            CBD FRANCE
          </Link>
        </div>

        {/* Products Menu */}
        <div className="my-10 mx-auto">{menuSlot}</div>
      </div>
    </section>
  );
}
