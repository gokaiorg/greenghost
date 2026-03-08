"use client";

import { useState, useEffect } from "react";
import { NFTData } from "@/lib/bigquery-types";
import NFTsList from "./NFTsList";
import NFTModal from "./NFTModal";

interface NFTPageContentProps {
  nfts: NFTData[];
  initialSlug?: string;
}

export default function NFTPageContent({
  nfts,
  initialSlug,
}: NFTPageContentProps) {
  const [selectedSlug, setSelectedSlug] = useState<string | undefined>(
    initialSlug,
  );

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const slug = path.split("/").pop();
      // If we are at /nft, slug is 'nft', so selectedSlug should be undefined
      // If we are at /nft/1, slug is '1', so selectedSlug should be '1'
      if (path === "/nft" || path === "/nft/") {
        setSelectedSlug(undefined);
      } else if (slug && slug !== "nft") {
        setSelectedSlug(slug);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleSelect = (slug: string) => {
    setSelectedSlug(slug);
    window.history.pushState(null, "", `/nft/${slug}`);
  };

  const handleClose = () => {
    setSelectedSlug(undefined);
    window.history.pushState(null, "", "/nft");
  };

  const selectedNFT = selectedSlug
    ? nfts.find((n) => n.slug === selectedSlug)
    : undefined;

  return (
    <div className="text-white">
      <div className="mb-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
          Get Your <span className="text-[#13DE00]">NFT</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://opensea.io/collection/greenghostdegen/overview"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#13DE00] text-black px-6 py-3 font-bold hover:bg-[#13DE00]/80 transition-colors"
          >
            View on OpenSea
          </a>
          <a
            href="https://nftcalendar.io/event/green-ghost-degen/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#13DE00] text-black px-6 py-3 font-bold hover:bg-[#13DE00]/80 transition-colors"
          >
            NFT Calendar
          </a>
        </div>
      </div>

      <NFTsList nfts={nfts} onSelect={handleSelect} />

      {selectedNFT && <NFTModal nft={selectedNFT} onClose={handleClose} />}
    </div>
  );
}
