"use client";

import Image from "next/image";
import { NFTData } from "@/lib/bigquery-types";

interface NFTsListProps {
  nfts: NFTData[];
  onSelect: (slug: string) => void;
}

export default function NFTsList({ nfts, onSelect }: NFTsListProps) {
  return (
    <ul
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4"
      aria-label="NFT Collection List"
    >
      {nfts.map((nft) => (
        <li
          key={nft.slug}
          className="cursor-pointer group relative flex flex-col items-center bg-black/20 overflow-hidden border border-[#13DE00] hover:border-[#13DE00] transition-all duration-300 hover:shadow-[0_0_20px_#13DE00] list-none"
          onClick={() => onSelect(nft.slug)}
        >
          <div className="relative w-full aspect-square overflow-hidden">
            <Image
              src={nft.logo}
              alt={nft.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="p-3 w-full text-center">
            <h3 className="text-xs font-bold text-white/90 group-hover:text-[#13DE00] transition-colors">
              {nft.name}
            </h3>
          </div>
        </li>
      ))}
    </ul>
  );
}
