import path from 'path';
import { promises as fs } from 'fs';

export interface WeedItem {
    title: string;
    description: string;
    image: string;
}

export interface WeedsData {
    strains: WeedItem[];
    compounds: WeedItem[];
    info: WeedItem[];
}

// Helper function to parse CSV line with proper handling of quoted fields
function parseCSVLine(line: string): string[] {
    const result: string[] = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        const nextChar = line[i + 1];

        if (char === '"') {
            if (inQuotes && nextChar === '"') {
                // Escaped quote
                current += '"';
                i++; // Skip next quote
            } else {
                // Toggle quote state
                inQuotes = !inQuotes;
            }
        } else if (char === ',' && !inQuotes) {
            // Field separator
            result.push(current);
            current = '';
        } else {
            current += char;
        }
    }

    // Add last field
    result.push(current);

    return result;
}

export async function getWeedsData(): Promise<WeedsData> {
    try {
        const filePath = path.join(process.cwd(), 'public', 'datas', 'weeds.csv');
        const data = await fs.readFile(filePath, 'utf-8');
        const lines = data.trim().split('\n');

        // Skip header
        const dataLines = lines.slice(1);

        const items: WeedItem[] = dataLines.map(line => {
            const cols = parseCSVLine(line);
            return {
                title: cols[0]?.trim() || '',
                description: cols[1]?.trim() || '',
                image: cols[2]?.trim() || '',
            };
        }).filter(item => item.title); // Filter out empty lines

        // First 3 rows: Sativa, Hybrid, Indica
        const strains = items.slice(0, 3);

        // Next 2 rows: THC, CBD
        const compounds = items.slice(3, 5);

        // Remaining rows: Info
        const info = items.slice(5);

        return {
            strains,
            compounds,
            info
        };
    } catch (error) {
        console.error('Error fetching weeds data:', error);
        return {
            strains: [],
            compounds: [],
            info: []
        };
    }
}
