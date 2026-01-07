import 'server-only';
import path from 'path';
import fs from 'fs/promises';

export interface GardenItem {
    date: string;
    description: string;
    image: string;
}

// Helper function to parse CSV line with proper handling of quoted fields
function parseCSVLine(line: string): string[] {
    const values: string[] = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
        const char = line[i];

        if (char === '"') {
            inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
            values.push(current);
            current = '';
        } else {
            current += char;
        }
    }

    values.push(current);
    return values;
}

export async function getGardensData(): Promise<GardenItem[]> {
    try {
        const filePath = path.join(process.cwd(), 'public', 'datas', 'gardens.csv');
        const data = await fs.readFile(filePath, 'utf-8');
        const lines = data.trim().split('\n');

        if (lines.length < 2) return [];

        const gardenItems: GardenItem[] = [];

        // Process each line, skipping header
        for (let i = 1; i < lines.length; i++) {
            const values = parseCSVLine(lines[i]);
            if (values.length >= 2) {
                // Pad index with leading zero for image filename.
                // Since CSV is now Newest -> Oldest, we need to invert the image mapping
                // so the newest entry (first in CSV) gets the highest image number
                // and the oldest entry (last in CSV) gets image 01.
                const invertedIndex = lines.length - i;
                const imageIndex = invertedIndex.toString().padStart(2, '0');

                gardenItems.push({
                    date: values[0].trim(),
                    description: values[1].trim().replace(/^"|"$/g, ''), // Remove surrounding quotes if present after parsing
                    image: `/images/gardens/green-ghost-garden-phuket-${imageIndex}.avif`
                });
            }
        }

        // Return chronological list as is from CSV (which seems to be sorted by date)
        // If needed we can sort, but usually CSVs are appended chronologically
        return gardenItems;
    } catch (error) {
        console.error('Error reading gardens data:', error);
        return [];
    }
}
