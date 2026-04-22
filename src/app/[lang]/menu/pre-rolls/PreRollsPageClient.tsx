"use client";

import Link from "next/link";

import { Product } from "@/lib/types";
import { useState, useEffect } from "react";
import StrainFilter from "@/components/StrainFilter";
import BannerMenu from "@/components/BannerMenu";
import BagAddButton from "@/components/BagAddButton";
import LoadingSpinner from "@/components/LoadingSpinner";
import { ReactNode } from "react";

interface PreRollsPageContentProps {
  menuSlot: ReactNode;
  locale?: string;
  title?: string;
  description?: string;
}

export default function PreRollsPageContent({
  menuSlot,
  locale = "en",
  title = "Pre-rolls Menu",
  description = "On demand. +20THB on delivery. Free on store.",
}: PreRollsPageContentProps) {
  const [allPreRolls, setAllPreRolls] = useState<Product[]>([]);
  const [selectedDominances, setSelectedDominances] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/products/strains?lang=${locale}`)
      .then((res) => res.json())
      .then((data) => {
        const filtered = data
          .filter((strain: Product) => strain.status === "In stock")
          .sort((a: Product, b: Product) => a.price - b.price);
        setAllPreRolls(filtered);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const preRolls =
    selectedDominances.length > 0
      ? allPreRolls.filter((roll) =>
          selectedDominances.some((d) => roll.dominance?.startsWith(d)),
        )
      : allPreRolls;

  return (
    <div className="relative">
      {isLoading && <LoadingSpinner />}
      <div className="container mx-auto px-4">
        <div className="sm:ml-auto sm:w-fit">{menuSlot}</div>
        <div className="flex  md:flex-row flex-col md:items-center space-x-4 mb-2">
          <h1 className="text-xl lg:text-2xl font-bold text-left whitespace-nowrap">
            {title}
          </h1>
          <p className="text-xs text-gray-400">{description}</p>
        </div>
        <StrainFilter
          selectedDominances={selectedDominances}
          onFilterChange={setSelectedDominances}
        />
        <ul className="space-y-2 list-none m-0 p-0" aria-label="Pre-rolls menu">
          {preRolls.map((roll) => (
            <li
              key={roll.id}
              className="relative bg-black hover:bg-[#13DE00]/13 transition-all"
            >
              <Link
                href={`${locale === "en" ? "" : `/${locale}`}/strains/${roll.id}`}
                title={roll.name}
              >
                <div className="p-2 flex items-start sm:items-center justify-between mb-2 sm:mb-0 sm:pr-24">
                  <ul
                    className="flex flex-col flex-grow list-none m-0 p-0"
                    aria-label="Product details"
                  >
                    <li className="flex items-baseline flex-col sm:flex-row space-x-2">
                      <h2 className="text-base md:text-md font-semibold text-sm leading-tight md:min-w-[300px]">
                        {roll.name}
                      </h2>
                      <ul
                        className="flex flex-col sm:flex-row sm:items-center space-x-1 list-none m-0 p-0"
                        aria-label="Product attributes"
                      >
                        <li>
                          <p
                            className={`text-xs whitespace-nowrap mb-1 sm:mb-0 md:min-w-[140px] ${roll.dominance && roll.dominance.startsWith("Sativa") ? "text-[#d1fee5]" : roll.dominance && roll.dominance.startsWith("Hybrid") ? "text-[#c0ef24]" : roll.dominance && roll.dominance.startsWith("Indica") ? "text-[#ee9cc9]" : "text-gray-400"}`}
                          >
                            {roll.dominance || "Unknown"}
                          </p>
                        </li>
                        <li>
                          <p className="text-xs text-gray-400 whitespace-nowrap">
                            THC {roll.thc}%
                          </p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul
                    className="flex items-center sm:space-x-2 list-none m-0 p-0"
                    aria-label="Product price and actions"
                  >
                    <li>
                      <p className="text-sm text-[#13DE00] font-bold whitespace-nowrap sm:mr-2">
                        {roll.price + 20}฿
                      </p>
                    </li>
                  </ul>
                </div>
              </Link>
              <div className="absolute right-2 top-12 sm:top-1/2 -translate-y-1/2 z-10">
                <BagAddButton product={roll} category="Pre-rolls" compact />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <BannerMenu imageSrc="/images/banners/green-ghost-best-degen-weed-menu-pre-rolls.avif" />
    </div>
  );
}
