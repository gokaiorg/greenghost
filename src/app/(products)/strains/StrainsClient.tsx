"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Product } from "@/lib/types";

import MiniSlider from "@/components/MiniSlider";
import StrainFilter from "@/components/StrainFilter";

export default function StrainsClient() {
  const [strains, setStrains] = useState<Product[]>([]);
  const [selectedDominances, setSelectedDominances] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch strains on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch strains
        const strainsRes = await fetch("/api/products/strains");
        if (!strainsRes.ok) throw new Error("Failed to fetch strains");
        const strainsData: Product[] = await strainsRes.json();
        setStrains(strainsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Filter strains by selected dominance and search term
  const filteredStrains = strains.filter((strain) => {
    const matchesDominance =
      selectedDominances.length === 0 ||
      selectedDominances.some((dominance) =>
        strain.dominance.toLowerCase().includes(dominance.toLowerCase()),
      );
    const matchesSearch =
      searchTerm === "" ||
      strain.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDominance && matchesSearch;
  });

  // Sort alphabetically by name
  const sortedStrains = filteredStrains.sort((a: Product, b: Product) =>
    a.name.localeCompare(b.name),
  );

  return (
    <div className="py-8">
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        <div className="flex-1">
          <StrainFilter
            selectedDominances={selectedDominances}
            onFilterChange={setSelectedDominances}
          />
        </div>
        <div className="lg:w-96">
          <input
            type="text"
            placeholder="Search strains by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 bg-black/30 border border-[#13DE00]/30 text-white placeholder-gray-400 focus:outline-none focus:border-[#13DE00]/60 focus:bg-black/40"
          />
        </div>
      </div>
      {loading ? (
        <div className="text-center text-white py-8">Loading strains...</div>
      ) : (
        <ul
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 list-none m-0 p-0"
          aria-label="Strains list"
        >
          {sortedStrains.map((strain) => (
            <li key={strain.id}>
              <Link href={`/strains/${strain.id}`} title={strain.name}>
                <div className="hover:bg-[#13DE00]/13 p-1 flex flex-col cursor-pointer">
                  <div className="mb-2">
                    <MiniSlider
                      images={[
                        `/images/strains/green-ghost-degen-weed-shop-strain-${strain.id}-bud-01.avif`,
                        `/images/strains/green-ghost-degen-weed-shop-strain-${strain.id}-bud-02.avif`,
                      ]}
                      alt={strain.name}
                      width={100}
                      height={100}
                      autoRotate={false}
                    />
                  </div>
                  <div className="text-white hover:text-white font-['Cubicfive12'] text-center text-sm leading-tight">
                    {strain.name}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
