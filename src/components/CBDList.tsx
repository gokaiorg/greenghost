'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CBD } from '@/lib/cbd-data';

interface CBDListProps {
    products: CBD[];
}

export default function CBDList({ products }: CBDListProps) {
    const [selectedType, setSelectedType] = useState<string>('All');

    // Get unique product types
    const types = ['All', ...Array.from(new Set(products.map(p => p.type)))];

    // Filter products based on selected type
    const filteredProducts = selectedType === 'All'
        ? products
        : products.filter(p => p.type === selectedType);

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#13DE00] mb-6 text-center">
                Order Premium CBD Online in France
            </h2>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
                {types.map((type) => (
                    <button
                        key={type}
                        onClick={() => setSelectedType(type)}
                        className={`px-6 py-3 font-bold transition-colors cursor-pointer ${selectedType === type
                            ? 'bg-[#13DE00] text-black'
                            : 'bg-[#13DE00]/13 text-white hover:bg-[#13DE00]/20'
                            }`}
                    >
                        {type}
                    </button>
                ))}
            </div>

            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" aria-label="CBD Products List">
                {filteredProducts.map((product, index) => {
                    // Generate image path based on product name
                    // Convert name to lowercase and replace spaces with hyphens
                    const imageName = product.itemName
                        .toLowerCase()
                        .replace(/\s+/g, '-');
                    const imagePath = `/images/cbd/${imageName}-cover-green-ghost.avif`;

                    // Generate slug for external link
                    const slug = imageName;

                    // Check if product is in stock
                    const isInStock = product.status.toLowerCase() === 'in stock';

                    return (
                        <li key={index} className="list-none">
                            <a
                                href={`https://greenghostcbd.fr/en/products/${slug}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#13DE00]/5 border border-[#13DE00]/21 overflow-hidden hover:border-[#13DE00]/50 transition-all group block h-full"
                                title={`${product.itemName} - ${product.type} - ${product.cbd}% CBD`}
                            >
                                {/* Image */}
                                <div className="relative w-full aspect-square bg-black">
                                    <Image
                                        src={imagePath}
                                        alt={product.itemName}
                                        fill
                                        className="object-cover group-hover:opacity-80 transition-opacity"
                                    />

                                    {/* Price or Sold Out - Top Right */}
                                    <div className="absolute top-2 right-2">
                                        {isInStock ? (
                                            <div className="bg-[#13DE00] text-black px-3 py-2 text-lg font-bold">
                                                €{product.price}
                                            </div>
                                        ) : (
                                            <div className="bg-red-600 text-white px-3 py-2 text-sm font-bold">
                                                SOLD OUT
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-3">
                                        {product.itemName}
                                    </h3>

                                    {/* Type and CBD Info */}
                                    <div className="flex gap-3 items-center">
                                        <span className="text-[#13DE00] text-sm font-bold">
                                            {product.type}
                                        </span>
                                        <span className="ml-auto text-gray-400 text-sm font-bold">
                                            {product.cbd}% CBD
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
