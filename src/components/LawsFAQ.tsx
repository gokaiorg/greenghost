import React from 'react';

type FAQItem = {
    title: string;
    decription: string;
};

interface LawsFAQProps {
    items: FAQItem[];
}

const LawsFAQ: React.FC<LawsFAQProps> = ({ items }) => {
    return (
        <div className="my-12">
            <h2 className="text-3xl font-bold text-center text-white mb-8 font-pixel">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {items.map((item, index) => (
                    <details key={index} className="group bg-black border border-[#13DE00]/30 overflow-hidden">
                        <summary className="flex cursor-pointer items-center justify-between p-4 bg-[#13DE00]/13 hover:bg-[#13DE00]/20 text-lg font-medium text-white transition-colors">
                            <span className="font-bold text-[#13DE00]">{item.title}</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </summary>
                        <div className="p-4 text-gray-300 bg-black/50 whitespace-pre-wrap leading-relaxed">
                            {item.decription}
                        </div>
                    </details>
                ))}
            </div>
        </div>
    );
};

export default LawsFAQ;
