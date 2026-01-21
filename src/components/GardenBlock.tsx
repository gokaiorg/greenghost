"use client";

import Link from "next/link";
import MiniSlider from "@/components/MiniSlider";

const CAROUSEL_IMAGES = [
  "/images/gardens/green-ghost-garden-phuket-01.avif",
  "/images/gardens/green-ghost-garden-phuket-03.avif",
  "/images/gardens/green-ghost-garden-phuket-05.avif",
];

export default function GardenBlock() {
  return (
    <div className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Image Column - Left on desktop */}
          <div className="order-1 md:col-span-1">
            <div className="relative overflow-hidden aspect-square w-full h-auto">
              <MiniSlider
                images={CAROUSEL_IMAGES}
                alt="Green Ghost's Garden"
                width={500}
                height={500}
                autoRotate={true}
              />
            </div>
          </div>

          {/* Text Column - Right on desktop */}
          <div className="order-2 md:col-span-2">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
              <span className="text-white">Our Green Ghost</span>{" "}
              <span className="text-[#13DE00]">Garden</span>
            </h2>

            <p className="text-md lg:text-lg xl:text-xl text-gray-300 mb-8 leading-relaxed">
              Experience the source of our premium quality. Our organic green
              garden in Phuket are where the magic happens, cultivated with
              traditional expertise and modern sustainability practices. We take
              pride in growing the finest cannabis strains under the Thai sun,
              ensuring purity and potency in every harvest.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/garden"
                className="bg-[#13DE00] hover:bg-[#10c500] text-black font-bold py-4 px-8 text-lg transition-colors duration-300 text-center"
                title="Green Ghost Garden"
              >
                Green Ghost Garden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
