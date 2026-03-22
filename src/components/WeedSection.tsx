import React from "react";
import Image from "next/image";
import { WeedData } from "@/lib/bigquery-types";

interface WeedSectionProps {
  strains: WeedData[];
  compounds: WeedData[];
  info: WeedData[];
}

const WeedSection: React.FC<WeedSectionProps> = ({
  strains,
  compounds,
  info,
}) => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 space-y-12 md:space-y-16">
      {/* Section 1: Strains (3 columns) */}
      <section aria-labelledby="strains-heading">
        <h2 id="strains-heading" className="sr-only">
          Cannabis Strains
        </h2>
        <ul
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          aria-label="Cannabis Strains List"
        >
          {strains.map((item, index) => (
            <li
              key={index}
              className="flex flex-col items-center text-center bg-[#13DE00]/13 p-6 border border-[#13DE00]/30 transition-colors duration-300"
            >
              {item.image && (
                <div className="relative w-50 h-50 mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Section 2: Compounds (2 columns) */}
      <section aria-labelledby="compounds-heading">
        <h2 id="compounds-heading" className="sr-only">
          Cannabis Compounds
        </h2>
        <ul
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          aria-label="Cannabis Compounds List"
        >
          {compounds.map((item, index) => (
            <li
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start bg-[#13DE00]/13 p-6 border border-[#13DE00]/30 transition-colors duration-300"
            >
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Section 3: Info (1 column) */}
      <section aria-labelledby="info-heading">
        <h2 id="info-heading" className="sr-only">
          Cannabis Information
        </h2>
        <ul
          className="space-y-8 md:space-y-12"
          aria-label="Cannabis Information List"
        >
          {info.map((item, index) => (
            <li
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-6 md:gap-12 items-center bg-[#13DE00]/13 p-6 md:p-8 border border-[#13DE00]/30`}
            >
              {item.image && (
                <div className="w-full md:w-1/3 relative aspect-square overflow-hidden shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <div className="text-gray-300 text-sm md:text-base leading-relaxed space-y-4 whitespace-pre-line">
                  {item.description}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default WeedSection;
