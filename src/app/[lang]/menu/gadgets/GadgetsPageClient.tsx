"use client";

import Link from "next/link";

import { Product } from "@/lib/types";
import { useState, useEffect } from "react";

import MiniSlider from "@/components/MiniSlider";
import BannerMenu from "@/components/BannerMenu";
import BagAddButton from "@/components/BagAddButton";
import LoadingSpinner from "@/components/LoadingSpinner";
import { ReactNode } from "react";

interface GadgetsPageContentProps {
  menuSlot: ReactNode;
  locale?: string;
  title?: string;
  description?: string;
}

export default function GadgetsPageContent({
  menuSlot,
  locale = "en",
  title = "Gadgets Menu",
  description = "Elevate your smoking experience.",
}: GadgetsPageContentProps) {
  const [gadgets, setGadgets] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/products/gadgets?lang=${locale}`)
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.sort((a: Product, b: Product) => {
          if (a.status !== b.status) {
            return a.status === "In stock" ? -1 : 1;
          }
          return a.price - b.price;
        });
        setGadgets(filtered);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

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
        <ul
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2 list-none m-0 p-0"
          aria-label="Gadgets menu"
        >
          {gadgets.map((gadget) => (
            <li key={gadget.id} className="relative">
              <Link
                href={`${locale === "en" ? "" : `/${locale}`}/gadgets/${gadget.id}`}
                title={gadget.name}
              >
                <div className="hover:bg-[#13DE00]/13 p-1 flex flex-col relative">
                  <div className="relative mb-2">
                    <MiniSlider
                      images={[
                        `/images/gadgets/green-ghost-degen-weed-shop-menu-gadget-${gadget.id}-01.avif`,
                        `/images/gadgets/green-ghost-degen-weed-shop-menu-gadget-${gadget.id}-02.avif`,
                      ]}
                      alt={gadget.name}
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
                        {gadget.name}
                      </h2>
                    </li>
                    <li className="absolute top-2 right-2">
                      <p
                        className={`px-2 py-1 text-sm ${gadget.status === "In stock" ? "bg-black text-[#13DE00]" : "bg-black text-red-500"}`}
                      >
                        {gadget.status === "In stock"
                          ? `${gadget.price}฿`
                          : "Sold out"}
                      </p>
                    </li>
                  </ul>
                </div>
              </Link>
              {gadget.status === "In stock" && (
                <div className="mt-8 md:mt-0 md:absolute md:top-1 md:left-1 md:right-1 md:h-[232px] lg:h-[185px] xl:h-[193px] 2xl:h-[236px] pointer-events-none z-10">
                  {" "}
                  <div className="absolute bottom-1 right-1 pointer-events-auto">
                    <BagAddButton product={gadget} category="Gadgets" compact />
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <BannerMenu imageSrc="/images/banners/green-ghost-best-degen-weed-menu-gadgets.avif" />
    </div>
  );
}
