"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { useState, useEffect } from "react";

import { Product } from "@/lib/types";

import MiniSlider from "@/components/MiniSlider";
import BannerMenu from "@/components/BannerMenu";
import BagAddButton from "@/components/BagAddButton";

interface ConcentratesPageContentProps {
  menuSlot: ReactNode;
  locale?: string;
  title?: string;
  description?: string;
}

export default function ConcentratesPageContent({
  menuSlot,
  locale = "en",
  title = "Concentrates Menu",
  description = "Concentrates price for 1 gram.",
}: ConcentratesPageContentProps) {
  const [concentrates, setConcentrates] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products/concentrates")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.sort((a: Product, b: Product) => {
          if (a.status !== b.status) {
            return a.status === "In stock" ? -1 : 1;
          }
          return a.price - b.price;
        });
        setConcentrates(filtered);
      });
  }, []);

  return (
    <div className="relative">
      <div className="container mx-auto px-4">
        <div className="sm:ml-auto sm:w-fit">{menuSlot}</div>
        <div className="flex  md:flex-row flex-col md:items-center space-x-4 mb-2">
          <h1 className="text-xl lg:text-2xl font-bold text-left whitespace-nowrap">
            {title}
          </h1>
          <p className="text-xs text-gray-400">{description}</p>
        </div>
        <ul
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2 list-none m-0 p-0"
          aria-label="Concentrates menu"
        >
          {concentrates.map((concentrate) => (
            <li key={concentrate.id} className="relative">
              <Link
                href={`${locale === "en" ? "" : `/${locale}`}/concentrates/${concentrate.id}`}
                title={concentrate.name}
              >
                <div className="hover:bg-[#13DE00]/13 p-1 flex flex-col relative">
                  <div className="relative mb-2">
                    <MiniSlider
                      images={[
                        `/images/concentrates/green-ghost-degen-weed-shop-menu-concentrates-${concentrate.id}-cover.avif`,
                        `/images/concentrates/green-ghost-degen-weed-shop-menu-concentrates-${concentrate.id}-01.avif`,
                      ]}
                      alt={concentrate.name}
                      width={100}
                      height={100}
                      autoRotate={true}
                      interactive={false}
                    />
                  </div>
                  <ul
                    className="list-none m-0 p-0"
                    aria-label="Product details"
                  >
                    <li>
                      <h2 className="text-base lg:text-md font-semibold mb-1 text-sm leading-tight">
                        {concentrate.name}
                      </h2>
                    </li>
                    <li>
                      <p className="text-[10px] sm:text-xs text-gray-400 whitespace-nowrap">
                        THC {concentrate.thc}%
                      </p>
                    </li>
                    <li className="absolute top-2 right-2">
                      <p
                        className={`px-2 py-1 text-sm ${concentrate.status === "In stock" ? "bg-black text-[#13DE00]" : "bg-black text-red-500"}`}
                      >
                        {concentrate.status === "In stock"
                          ? `${concentrate.price}฿`
                          : "Sold out"}
                      </p>
                    </li>
                  </ul>
                </div>
              </Link>
              {concentrate.status === "In stock" && (
                <div className="mt-8 md:mt-0 md:absolute md:top-1 md:left-1 md:right-1 md:h-[232px] lg:h-[185px] xl:h-[193px] 2xl:h-[236px] pointer-events-none z-10">
                  {" "}
                  <div className="absolute bottom-1 right-1 pointer-events-auto">
                    <BagAddButton
                      product={concentrate}
                      category="Concentrates"
                      compact
                    />
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <BannerMenu imageSrc="/images/banners/green-ghost-best-degen-weed-menu-concentrates.avif" />
    </div>
  );
}
