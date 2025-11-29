import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';

interface WholesaleItem {
    strain: string;
    price: string;
    dominance: string;
    thc: string;
    slug: string;
}

async function getWholesaleData(): Promise<WholesaleItem[]> {
    const csvPath = path.join(process.cwd(), 'public/datas/wholesales.csv');
    const csvContent = fs.readFileSync(csvPath, 'utf-8');

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
    const items: WholesaleItem[] = [];

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
                const key = header.toLowerCase();
                item[key] = values[index] || '';
            });

            // Create slug from strain name
            // Handle special cases
            if (item.strain === 'Popin Fresh') {
                item.slug = 'poppin-fresh';
            } else if (item.strain.includes('Ben') && item.strain.includes('Gary')) {
                item.slug = 'ben-garys';
            } else {
                item.slug = item.strain.toLowerCase()
                    .replace(/&/g, 'and')
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/(^-|-$)/g, '');
            }

            items.push(item as unknown as WholesaleItem);
        }
    }

    return items;
}

export default async function WholesalesList() {
    const items = await getWholesaleData();

    return (
        <section className="py-12">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" aria-label="Wholesale Products List">
                {items.map((item, index) => {
                    const imagePath = `/images/strains/green-ghost-degen-weed-shop-strain-${item.slug}-bud-01.avif`;

                    return (
                        <li key={index} className="list-none">
                            <Link
                                href={`/strains/${item.slug}`}
                                className="group block bg-[#111] overflow-hidden border border-gray-800 hover:border-[#13DE00] transition-colors h-full"
                                title={`${item.strain} - ${item.dominance} - THC ${item.thc}`}
                            >
                                <div className="relative aspect-square w-full overflow-hidden">
                                    <Image
                                        src={imagePath}
                                        alt={item.strain}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-2 right-2 bg-[#13DE00] text-black px-2 py-1 text-sm font-bold">
                                        {Number(item.price).toLocaleString()}฿ / 100g
                                    </div>
                                </div>

                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-white mb-4 font-['Cubicfive12']" title={item.strain}>
                                        {item.strain}
                                    </h3>

                                    <div className="flex justify-between items-center text-xs text-gray-400">
                                        <p className={`text-[10px] sm:text-xs whitespace-nowrap mb-1 ${item.dominance && item.dominance.startsWith('Sativa') ? 'text-[#d1fee5]' : item.dominance && item.dominance.startsWith('Hybrid') ? 'text-[#c0ef24]' : item.dominance && item.dominance.startsWith('Indica') ? 'text-[#ee9cc9]' : 'text-gray-400'}`}>{item.dominance}</p>
                                        <div className="flex items-center gap-1">
                                            <span className="text-gray-400">THC</span>
                                            <span className="font-bold text-gray-400">{item.thc}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
