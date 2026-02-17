"use client";

import Link from "next/link";

import { Product } from "@/lib/types";
import { useState, useEffect } from "react";

import MiniSlider from "@/components/MiniSlider";
import BannerMenu from "@/components/BannerMenu";
import BagAddButton from "@/components/BagAddButton";
import { ReactNode } from "react";

interface EdiblesPageContentProps {
  menuSlot: ReactNode;
  locale?: string;
  title?: string;
  description?: string;
}

export default function EdiblesPageContent({
  menuSlot,
  locale = 'en',
  title = "Edibles Menu",
  description = "Edibles price per serving."
}: EdiblesPageContentProps) {
  const [edibles, setEdibles] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products/edibles")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.sort((a: Product, b: Product) => {
          if (a.status !== b.status) {
            return a.status === "In stock" ? -1 : 1;
          }
          return a.price - b.price;
        });
        setEdibles(filtered);
      });
  }, []);

  return (
    <div className="relative">
      <div className="container mx-auto px-4">
        <div className="sm:ml-auto sm:w-fit">{menuSlot}</div>
        <div className="flex  md:flex-row flex-col md:items-center space-x-2 mb-2">
          <h1 className="text-xl lg:text-2xl font-bold text-left whitespace-nowrap">
            {title}
          </h1>
          <p className="text-xs text-gray-400">{description}</p>
        </div>
        <ul
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2 list-none m-0 p-0"
          aria-label="Edibles menu"
        >
          {edibles.map((edible) => (
            <li key={edible.id} className="relative">
              <Link href={`${locale === 'en' ? '' : `/${locale}`}/edibles/${edible.id}`} title={edible.name}>
                <div className="hover:bg-[#13DE00]/13 p-1 flex flex-col relative">
                  <div className="relative mb-2">
                    <MiniSlider
                      images={[
                        `/images/edibles/green-ghost-degen-weed-shop-menu-edible-${edible.id}-cover.avif`,
                        `/images/edibles/green-ghost-degen-weed-shop-menu-edible-${edible.id}-01.avif`,
                      ]}
                      alt={edible.name}
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
                        {edible.name}
                      </h2>
                    </li>
                    <li>
                      {edible.thc && edible.thc > 0 ? (
                        <p className="text-[10px] sm:text-xs text-gray-400 whitespace-nowrap">
                          THC {edible.thc}mg
                        </p>
                      ) : edible.cbd && edible.cbd > 0 ? (
                        <p className="text-[10px] sm:text-xs text-gray-400 whitespace-nowrap">
                          CBD {edible.cbd}mg
                        </p>
                      ) : null}
                    </li>
                    <li className="absolute top-2 right-2">
                      <p
                        className={`px-2 py-1 text-sm ${edible.status === "In stock" ? "bg-black text-[#13DE00]" : "bg-black text-red-500"}`}
                      >
                        {edible.status === "In stock"
                          ? `${edible.price}฿`
                          : "Sold out"}
                      </p>
                    </li>
                  </ul>
                </div>
              </Link>
              {edible.status === "In stock" && (
                <div className="mt-8 md:mt-0 md:absolute md:top-1 md:left-1 md:right-1 md:h-[232px] lg:h-[185px] xl:h-[193px] 2xl:h-[236px] pointer-events-none z-10">
                  {" "}
                  <div className="absolute bottom-1 right-1 pointer-events-auto">
                    <BagAddButton product={edible} category="Edibles" compact />
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <BannerMenu imageSrc="/images/banners/green-ghost-best-degen-weed-menu-edibles.avif" />
    </div>
  );
}
