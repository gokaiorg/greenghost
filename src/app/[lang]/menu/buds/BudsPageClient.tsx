"use client";
import { useState, useEffect } from "react";

import { Product } from "@/lib/types";

import StrainFilter from "@/components/StrainFilter";
import BannerMenu from "@/components/BannerMenu";
import BudListItem from "@/components/BudListItem";
import LoadingSpinner from "@/components/LoadingSpinner";

import { ReactNode } from "react";

interface BudsPageContentProps {
  menuSlot: ReactNode;
  locale?: string;
  title?: string;
  description?: string;
}

export default function BudsPageContent({
  menuSlot,
  locale = 'en',
  title = "Buds Menu",
  description = "Buds price for 1 gram."
}: BudsPageContentProps) {
  // Since it's client, fetch here
  const [allBuds, setAllBuds] = useState<Product[]>([]);
  const [selectedDominances, setSelectedDominances] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products/strains")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data
          .filter((strain: Product) => strain.status === "In stock")
          .sort((a: Product, b: Product) => a.price - b.price);
        setAllBuds(filtered);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const buds =
    selectedDominances.length > 0
      ? allBuds.filter((bud) =>
        selectedDominances.some((d) => bud.dominance?.startsWith(d)),
      )
      : allBuds;

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
        <ul
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2 list-none m-0 p-0"
          aria-label="Buds menu"
        >
          {buds.map((bud) => (
            <BudListItem key={bud.id} bud={bud} locale={locale} />
          ))}
        </ul>
      </div>

      <BannerMenu imageSrc="/images/banners/green-ghost-best-degen-weed-menu-buds.avif" />
    </div>
  );
}
