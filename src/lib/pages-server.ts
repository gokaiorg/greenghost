import 'server-only';
import path from 'path';
import fs from 'fs/promises';

export interface PageData {
    slug: string;
    title: string;
    subtitle?: string;
    description?: string;
    section_title?: string;
    section_description?: string;
    [key: string]: string | undefined;
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

// Server-side only function
export async function getPagesServerSide(): Promise<PageData[]> {
    try {
        const filePath = path.join(process.cwd(), 'public', 'datas', 'pages.csv');
        const data = await fs.readFile(filePath, 'utf-8');
        const lines = data.trim().split('\n');

        if (lines.length < 2) return [];

        // Parse headers
        const headers = parseCSVLine(lines[0]).map(h => h.trim().toLowerCase());
        const pages: PageData[] = [];

        // Process each line
        for (let i = 1; i < lines.length; i++) {
            const values = parseCSVLine(lines[i]);
            const page: Record<string, string> = {};

            // Map headers to values case-insensitively
            for (let j = 0; j < headers.length; j++) {
                const header = headers[j];
                if (header) {
                    // Store with lowercase key for consistent access
                    page[header.toLowerCase()] = values[j]?.trim() || '';
                }
            }

            if (page.title) {
                const slug = page.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

                // Map section fields case-insensitively
                const sectionTitle = page.sectiontitle || page.section_title || '';
                const sectionDesc = page.sectiondescription || page.section_description || '';

                pages.push({
                    ...page,
                    slug,
                    title: page.title,
                    subtitle: page.subtitle || '',
                    description: page.description || '',
                    section_title: sectionTitle,
                    section_description: sectionDesc
                });
            }
        }

        return pages;
    } catch (error) {
        console.error('Error reading pages data:', error);
        return [];
    }
}

// Helper function to find page by slug
function findPageBySlug(pages: PageData[], slug: string): PageData | undefined {
    return pages.find(page =>
        page.slug === slug ||
        page.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') === slug
    );
}

export async function getPageBySlugServer(slug: string): Promise<PageData | undefined> {
    const pages = await getPagesServerSide();
    return findPageBySlug(pages, slug);
}
