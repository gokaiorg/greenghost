'use client';

import Image from 'next/image';
import { useState } from 'react';
import { BestShop } from '@/lib/organization-data';

interface BestShopsListProps {
    shops: BestShop[];
}

export default function BestShopsList({ shops }: BestShopsListProps) {
    const [selectedLocation, setSelectedLocation] = useState<string>('Phuket');

    // Extract unique locations
    const locations = Array.from(new Set(shops.map(shop => shop.location))).sort();

    // Filter shops
    const filteredShops = shops.filter(shop => shop.location === selectedLocation);

    return (
        <div className="container mx-auto px-4 py-12">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {locations.map((location) => (
                    <button
                        key={location}
                        onClick={() => setSelectedLocation(location)}
                        className={`
              px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer
              ${selectedLocation === location
                                ? 'bg-[#13DE00] text-black border-[#13DE00]'
                                : 'bg-black text-gray-400 border-gray-800 hover:border-[#13DE00] hover:text-[#13DE00]'
                            }
            `}
                    >
                        {location}
                    </button>
                ))}
            </div>

            {/* Shops Grid */}
            <ul
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none m-0 p-0"
                aria-label={`Best weed shops in ${selectedLocation}`}
            >
                {filteredShops.map((shop, index) => {
                    const slug = shop.name.toLowerCase().trim().replace(/\s+/g, '-');
                    const imagePath = `/images/partners/best-weed-shops-thailand-${slug}.avif`;

                    return (
                        <li
                            key={`${shop.name}-${index}`}
                            className="bg-[#111] border border-gray-800 p-6 hover:border-[#13DE00]/50 transition-all duration-300 group relative overflow-hidden flex flex-col"
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-[#13DE00] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>

                            <div className="mb-4 relative h-48 w-full overflow-hidden rounded bg-black/50">
                                <Image
                                    src={imagePath}
                                    alt={`${shop.name} - Best Weed Shop in ${shop.location}`}
                                    fill
                                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>

                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-white group-hover:text-[#13DE00] transition-colors">
                                    {shop.name}
                                </h3>
                                <span className="text-xs font-bold bg-[#13DE00]/10 text-[#13DE00] px-2 py-1 border border-[#13DE00]/20">
                                    {shop.location}
                                </span>
                            </div>

                            <div className="mt-auto pt-4 border-t border-gray-800 group-hover:border-gray-700 transition-colors">
                                <a
                                    href={shop.mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group/link"
                                >
                                    <span>View on Map</span>
                                    <span className="transform group-hover/link:translate-x-1 transition-transform">&gt;</span>
                                </a>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
