import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';

interface PromoteItem {
    title: string;
    description: string;
    link: string;
    link_label: string;
}

const imageMapping: Record<string, string> = {
    "Cannabis Medical Prescription": "legal-laws",
    "Coffee shop Rawai": "coffeeshop",
    "Weed Delivery Phuket": "delivery",
    "Green Ghost CBD": "cbd-france"
};

async function getPromoteData(): Promise<PromoteItem[]> {
    try {
        const csvPath = path.join(process.cwd(), 'public/datas/promotes.csv');
        const csvContent = await fs.promises.readFile(csvPath, 'utf-8');

        const lines: string[] = [];
        let currentLine = '';
        let inQuotes = false;

        for (let i = 0; i < csvContent.length; i++) {
            const char = csvContent[i];
            if (char === '"') {
                inQuotes = !inQuotes;
                currentLine += char;
            } else if (char === '\n' && !inQuotes) {
                if (currentLine.trim()) lines.push(currentLine.trim());
                currentLine = '';
            } else {
                currentLine += char;
            }
        }
        if (currentLine.trim()) lines.push(currentLine.trim());

        const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''));
        const items: PromoteItem[] = [];

        for (let i = 1; i < lines.length; i++) {
            const line = lines[i];
            const values: string[] = [];
            let currentValue = '';
            let inQuotes = false;

            for (let j = 0; j < line.length; j++) {
                const char = line[j];
                if (char === '"') {
                    inQuotes = !inQuotes;
                } else if (char === ',' && !inQuotes) {
                    values.push(currentValue.trim().replace(/^"|"$/g, ''));
                    currentValue = '';
                } else {
                    currentValue += char;
                }
            }
            values.push(currentValue.trim().replace(/^"|"$/g, ''));

            if (values.length >= headers.length) {
                const item: Record<string, string> = {};
                headers.forEach((header, index) => {
                    item[header] = values[index] || '';
                });
                items.push(item as unknown as PromoteItem);
            }
        }

        return items;
    } catch (error) {
        console.error('Error in getPromoteData:', error);
        return [];
    }
}

export default async function PromotesList() {
    const items = await getPromoteData();

    return (
        <section className="container mx-auto px-4 py-12">
            <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4" aria-label="Promotions List">
                {items.map((item, index) => {
                    const imageKey = imageMapping[item.title] || item.title.toLowerCase().replace(/\s+/g, '-');
                    const imagePath = `/images/icons/green-ghost-${imageKey}.avif`;

                    return (
                        <li key={index} className="relative aspect-square w-full overflow-hidden group list-none">
                            {/* Background Image */}
                            <Image
                                src={imagePath}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-4 transition-opacity duration-300">
                                <h3 className="text-xl xl:text-2xl font-bold text-white mb-3 font-pixel">{item.title}</h3>
                                <p className="text-xs lg:text-sm text-gray-200 mb-6">{item.description}</p>
                                <Link
                                    href={item.link}
                                    className="inline-block bg-[#13DE00] hover:bg-[#10c500] text-black font-bold py-3 px-8 transition-colors uppercase text-sm tracking-wider"
                                >
                                    {item.link_label}
                                </Link>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
