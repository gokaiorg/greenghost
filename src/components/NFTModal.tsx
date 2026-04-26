"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { NFTData } from "@/lib/bigquery-types";

interface NFTModalProps {
  nft: NFTData;
  onClose: () => void;
}

export default function NFTModal({ nft, onClose }: NFTModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const attributes = [
    { label: "Embellishments", value: nft.embellishments },
    { label: "Ghost", value: nft.ghost },
    { label: "Headgear", value: nft.headgear },
    { label: "Joint", value: nft.joint },
    { label: "Leaves", value: nft.leaves },
    { label: "Shades", value: nft.shades },
    { label: "Vibe", value: nft.vibe },
    { label: "Vibes", value: nft.vibes },
  ].filter((attr) => attr.value && attr.value !== "0");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-4xl bg-black border border-[#13DE00] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-[80vh] animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/69 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-1/2 bg-black/40 relative aspect-square md:aspect-auto">
          <Image
            src={nft.logo}
            alt={nft.name}
            fill
            className="object-contain p-4"
            priority
          />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto bg-black">
          <h2 className="text-xl font-bold text-white mb-2">{nft.name}</h2>
          <p className="text-[#13DE00] font-mono text-sm mb-6">
            {nft.description}
          </p>

          <div className="space-y-6">
            <h3 className="text-md font-semibold text-white/90 border-b border-[#13DE00] pb-2">
              Attributes
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {attributes.map((attr) => (
                <div
                  key={attr.label}
                  className="bg-white/5 p-3 border border-white/5 hover:border-[#13DE00] transition-colors"
                >
                  <span className="block text-[10px] text-white/50 uppercase tracking-wider mb-1">
                    {attr.label}
                  </span>
                  <span className="block text-xs font-medium text-white/90">
                    {attr.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
