import React from 'react';

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
                <div key={index} className="bg-zinc-900/50 border border-[#13DE00]/30 p-6 shadow-lg hover:border-[#13DE00]/60 transition-colors">
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
