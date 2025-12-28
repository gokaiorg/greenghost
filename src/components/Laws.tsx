import React from 'react';
import Image from 'next/image';

type LawItem = {
    title: string;
    decription: string; // Keeping the CSV typo 'decription' for key matching, but can map it.
};

interface LawsProps {
    items: LawItem[];
}

const Laws: React.FC<LawsProps> = ({ items }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            {items.map((item, index) => (
                <div key={index} className="bg-[#13DE00]/13 border border-[#13DE00]/30 p-6 shadow-lg hover:border-[#13DE00]/60 transition-colors">
                    <div className="relative w-full aspect-square mb-6 border border-[#13DE00]/20">
                        <Image
                            src={`/images/banners/legal-laws-cannabis-weed-shop-thailand-green-ghost-${(index + 1).toString().padStart(2, '0')}.avif`}
                            alt={item.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <h3 className="text-xl font-bold text-[#13DE00] mb-4">{item.title}</h3>
                    <div className="text-gray-300 text-xs leading-relaxed whitespace-pre-wrap font-pixel">
                        {item.decription}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Laws;
