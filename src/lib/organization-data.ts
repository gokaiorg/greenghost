import { PHONE_NUMBER } from '@/lib/constants';
import type { LocationData, Organization } from '@/lib/types/organization';
import type { Location } from '@/lib/types/location';

export async function parseLocationsCSV(): Promise<LocationData[]> {
    const path = (await import('path')).default;
    const fs = (await import('fs')).default;

    const csvPath = path.join(process.cwd(), 'public/datas/locations.csv');
    const csvContent = fs.readFileSync(csvPath, 'utf-8');

    // Split by lines but keep quoted fields with line breaks intact
    const lines: string[] = [];
    let currentLine = '';
    let inQuotes = false;

    for (let i = 0; i < csvContent.length; i++) {
        const char = csvContent[i];

        if (char === '"') {
            inQuotes = !inQuotes;
            currentLine += char;
        } else if (char === '\n' && !inQuotes) {
            if (currentLine.trim()) {
                lines.push(currentLine.trim());
            }
            currentLine = '';
        } else {
            currentLine += char;
        }
    }

    // Add the last line
    if (currentLine.trim()) {
        lines.push(currentLine.trim());
    }

    const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''));
    const locations: LocationData[] = [];

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        if (!line) continue;

        // Handle CSV with quoted fields that may contain commas
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

        // Add the last value
        values.push(currentValue.trim().replace(/^"|"$/g, ''));

        if (values.length >= headers.length) {
            const location: Record<string, string> = {};
            headers.forEach((header, index) => {
                location[header] = values[index] || '';
            });

            locations.push(location as unknown as LocationData);
        }
    }

    return locations;
}

export function parseHours(hoursString: string): { monday: string; tuesday: string; wednesday: string; thursday: string; friday: string; saturday: string; sunday: string } {
    const hours: Record<string, string> = {
        monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: ''
    };

    if (!hoursString) return hours as Location['hours'];

    // Clean up the string: remove extra quotes if any remain, though CSV parser should handle most
    const cleanString = hoursString.replace(/"/g, '').trim();

    // Split by comma to handle multiple schedules
    // Example: "Mo-Sa 09:00-02:00, Su 14:00-02:00"
    const parts = cleanString.split(',').map(p => p.trim());

    const dayMap: Record<string, string> = {
        'Mo': 'monday', 'Tu': 'tuesday', 'We': 'wednesday', 'Th': 'thursday',
        'Fr': 'friday', 'Sa': 'saturday', 'Su': 'sunday'
    };
    const daysOrder = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

    parts.forEach(part => {
        // Match "Day-Day Time-Time" or "Day Time-Time"
        // Regex to capture days part and time part
        // Time format: 09:00-02:00
        const match = part.match(/^([A-Za-z-]+)\s+(\d{2}:\d{2}-\d{2}:\d{2})$/);

        if (match) {
            const [, dayRange, timeRange] = match;
            const formattedTime = timeRange.replace('-', ' - '); // Add spaces for consistency with UI expectation

            if (dayRange.includes('-')) {
                // Handle range like Mo-Sa
                const [start, end] = dayRange.split('-');
                const startIndex = daysOrder.indexOf(start);
                const endIndex = daysOrder.indexOf(end);

                if (startIndex !== -1 && endIndex !== -1) {
                    let i = startIndex;
                    while (true) {
                        const dayCode = daysOrder[i];
                        const fullDay = dayMap[dayCode];
                        if (fullDay) hours[fullDay] = formattedTime;

                        if (i === endIndex) break;
                        i = (i + 1) % 7; // Wrap around if needed (though usually ranges are linear in this context)
                    }
                }
            } else {
                // Single day like Mo
                const fullDay = dayMap[dayRange];
                if (fullDay) hours[fullDay] = formattedTime;
            }
        } else {
            // Fallback for old format or "Everyday" text if still present
            // But user said they changed CSV to schema format, so likely strict now.
            // Let's try to handle "Mo-Su" without time if it implies 24h? No, CSV has times.

            // Handle simple "Mo 16:00-00:00" without regex strictness if needed
            const timeMatch = part.match(/(\d{2}:\d{2}-\d{2}:\d{2})/);
            if (timeMatch) {
                const time = timeMatch[1].replace('-', ' - ');
                daysOrder.forEach(d => {
                    if (part.includes(d)) {
                        const fullDay = dayMap[d];
                        if (fullDay) hours[fullDay] = time;
                    }
                });
                // Handle ranges manually if regex failed
                if (part.includes('-') && !part.match(/^\d/)) { // Range of days
                    const rangePart = part.split(' ')[0]; // Assuming "Mo-Su 09..."
                    if (rangePart.includes('-')) {
                        const [start, end] = rangePart.split('-');
                        const startIndex = daysOrder.indexOf(start);
                        const endIndex = daysOrder.indexOf(end);
                        if (startIndex !== -1 && endIndex !== -1) {
                            let i = startIndex;
                            while (true) {
                                const dayCode = daysOrder[i];
                                const fullDay = dayMap[dayCode];
                                if (fullDay) hours[fullDay] = time;
                                if (i === endIndex) break;
                                i = (i + 1) % 7;
                            }
                        }
                    }
                }
            }
        }
    });

    return hours as Location['hours'];
}

export function parseImages(imagesString: string): string[] {
    if (!imagesString) return [];

    // Split by comma and clean up each image path
    return imagesString.split(',').map(img => img.trim()).filter(img => img.length > 0);
}

export async function getLocations(): Promise<Location[]> {
    const locationsData = await parseLocationsCSV();

    return locationsData.map((data, index) => ({
        id: (index + 1).toString(),
        slug: data.slug,
        name: data.name,
        hours: parseHours(data.hours),
        phone: data.phone,
        address: data.address,
        addressLink: data.addresLink, // Note: CSV field is addresLink
        mapLink: data.mapLink,
        videoLink: data.videoLink,
        reviewLink: data.reviewLink,
        website: data.website,
        tripAdvisor: data.tripAdvisor,
        weedTh: data.weedTh,
        wongnai: data.wongnai,
        highThailand: data.highThailand,
        appleMap: data.appleMap,
        gmapLink: data.mapLink, // Alias
        youtubeLink: data.videoLink, // Alias
        description: data.description,
        region: data.region,
        country: data.country,
        details: data.details,
        descSeo: data.descSeo,
        images: parseImages(data.imagesOg),
        lat: parseFloat(data.lat) || 0,
        lng: parseFloat(data.lng) || 0
    }));
}

export async function getOrganizationData(): Promise<Organization> {
    // Get locations from CSV
    const locationsData = await parseLocationsCSV();
    const locations = locationsData.map((data, index) => ({
        id: (index + 1).toString(),
        name: data.name,
        slug: data.slug,
        address: data.address,
        gmapLink: data.mapLink,
        youtubeLink: data.videoLink,
        phone: data.phone,
        website: data.website,
        reviewLink: data.reviewLink,
        tripAdvisor: data.tripAdvisor,
        weedTh: data.weedTh,
        wongnai: data.wongnai,
        highThailand: data.highThailand,
        appleMap: data.appleMap,
        description: data.description,
        details: data.details,
        descSeo: data.descSeo,
        region: data.region,
        country: data.country,
        images: parseImages(data.imagesOg),
        hours: parseHours(data.hours),
        lat: parseFloat(data.lat) || 0,
        lng: parseFloat(data.lng) || 0
    }));

    const organization: Organization = {
        name: 'Green Ghost',
        legalName: 'Green Ghost',
        description: 'Premium cannabis products in Thailand. Fast, discreet delivery. Shop our selection of buds, edibles, concentrates, and accessories.',
        foundingDate: '2022',
        url: 'https://green.gd',
        logo: 'https://green.gd/images/logo-green-ghost-degen-weed-shop.png',
        sameAs: [
            'https://x.com/greenghostdegen',
            'https://www.facebook.com/greenghostdegenCBD',
            'https://www.instagram.com/greenghost_degen/',
            'https://www.youtube.com/@greenghostdegen',
            'https://www.tiktok.com/@greenghostdegen',
            'https://opensea.io/collection/greenghostdegen'
        ],
        contactPoint: {
            email: 'contact@green.gd',
            telephone: PHONE_NUMBER,
            contactType: 'customer service',
            availableLanguage: ['en', 'th']
        },
        locations: locations.map(location => ({
            '@type': 'CannabisStore',
            name: location.name,
            slug: location.slug,
            description: location.description,
            image: location.images[0] ? `https://green.gd${location.images[0]}` : undefined,
            url: `https://green.gd/locations/${location.slug}`,
            address: {
                '@type': 'PostalAddress',
                streetAddress: location.address.split(', ')[0],
                addressLocality: location.address.split(', ')[1] || '',
                addressRegion: location.region,
                postalCode: location.address.split(', ').pop()?.match(/\d+/)?.[0] || '',
                addressCountry: location.country
            },
            telephone: location.phone,
            hasMap: location.gmapLink,
            geo: {
                '@type': 'GeoCoordinates',
                latitude: location.lat,
                longitude: location.lng
            },
            openingHours: Object.entries(location.hours)
                .filter(([, time]) => time)
                .map(([day, time]) => `${day.charAt(0).toUpperCase() + day.slice(1)} ${time}`),
            priceRange: '$$'
        }))
    };

    return organization;
}

export interface TopDispensary {
    name: string;
    link: string;
}

export async function parseTopsCSV(): Promise<TopDispensary[]> {
    const path = (await import('path')).default;
    const fs = (await import('fs')).default;

    const csvPath = path.join(process.cwd(), 'public/datas/tops.csv');
    const csvContent = fs.readFileSync(csvPath, 'utf-8');

    const lines = csvContent.split('\n').filter(line => line.trim() !== '');
    // Skip header
    const tops: TopDispensary[] = [];

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        // Simple split by comma, assuming no commas in fields for this simple CSV
        // If fields have commas, we'd need the more robust parser used above
        const parts = line.split(',');
        if (parts.length >= 2) {
            tops.push({
                name: parts[0].trim(),
                link: parts[1].trim()
            });
        }
    }

    return tops;
}

export async function getTops(): Promise<TopDispensary[]> {
    return parseTopsCSV();
}

export interface BestShop {
    name: string;
    mapLink: string;
    location: string;
}

export async function parseBestShopsCSV(): Promise<BestShop[]> {
    const path = (await import('path')).default;
    const fs = (await import('fs')).default;

    const csvPath = path.join(process.cwd(), 'public/datas/best_shops_thailand.csv');
    const csvContent = fs.readFileSync(csvPath, 'utf-8');

    const lines = csvContent.split('\n').filter(line => line.trim() !== '');
    // Skip header
    const shops: BestShop[] = [];

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        // Use the same robust parsing as locations CSV to handle potential commas in fields
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

        if (values.length >= 3) {
            shops.push({
                name: values[0],
                mapLink: values[1],
                location: values[2]
            });
        }
    }

    return shops;
}

export async function getBestShops(): Promise<BestShop[]> {
    return parseBestShopsCSV();
}

export interface DeliveryStep {
    name: string;
    description: string;
    label: string;
    link: string;
    hint: string;
    video: string;
}

export async function parseDeliveryCSV(): Promise<DeliveryStep[]> {
    const path = (await import('path')).default;
    const fs = (await import('fs')).default;

    const csvPath = path.join(process.cwd(), 'public/datas/delivery.csv');
    const csvContent = fs.readFileSync(csvPath, 'utf-8');

    const lines = csvContent.split('\n').filter(line => line.trim() !== '');
    const headers = lines[0].split(',').map(h => h.trim().replace(/^\"|\"$/g, ''));
    const steps: DeliveryStep[] = [];

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        if (!line) continue;

        // Handle CSV with quoted fields that may contain commas
        const values: string[] = [];
        let currentValue = '';
        let inQuotes = false;

        for (let j = 0; j < line.length; j++) {
            const char = line[j];

            if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
                values.push(currentValue.trim().replace(/^\"|\"$/g, '').replace(/\r$/g, ''));
                currentValue = '';
            } else {
                currentValue += char;
            }
        }

        // Add the last value
        values.push(currentValue.trim().replace(/^\"|\"$/g, '').replace(/\r$/g, ''));

        if (values.length >= headers.length) {
            const step: Record<string, string> = {};
            headers.forEach((header, index) => {
                step[header] = values[index] || '';
            });

            steps.push(step as unknown as DeliveryStep);
        }
    }

    return steps;
}

export async function getDeliverySteps(): Promise<DeliveryStep[]> {
    return parseDeliveryCSV();
}

export interface Club {
    name: string;
    description: string;
    link: string;
}

export async function parseClubsCSV(): Promise<Club[]> {
    const path = (await import('path')).default;
    const fs = (await import('fs')).default;

    const csvPath = path.join(process.cwd(), 'public/datas/clubs.csv');
    const csvContent = fs.readFileSync(csvPath, 'utf-8');

    const lines = csvContent.split('\n').filter(line => line.trim() !== '');
    const headers = lines[0].split(',').map(h => h.trim().replace(/^\"|\"$/g, ''));
    const clubs: Club[] = [];

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        if (!line) continue;

        // Handle CSV with quoted fields that may contain commas
        const values: string[] = [];
        let currentValue = '';
        let inQuotes = false;

        for (let j = 0; j < line.length; j++) {
            const char = line[j];

            if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
                values.push(currentValue.trim().replace(/^\"|\"$/g, '').replace(/\r$/g, ''));
                currentValue = '';
            } else {
                currentValue += char;
            }
        }

        // Add the last value
        values.push(currentValue.trim().replace(/^\"|\"$/g, '').replace(/\r$/g, ''));

        if (values.length >= headers.length) {
            const club: Record<string, string> = {};
            headers.forEach((header, index) => {
                club[header] = values[index] || '';
            });

            clubs.push(club as unknown as Club);
        }
    }

    return clubs;
}

export async function getClubs(): Promise<Club[]> {
    return parseClubsCSV();
}

export interface Social {
    name: string;
    link: string;
}

export async function parseSocialsCSV(): Promise<Social[]> {
    const path = (await import('path')).default;
    const fs = (await import('fs')).default;

    const csvPath = path.join(process.cwd(), 'public/datas/socials.csv');
    const csvContent = fs.readFileSync(csvPath, 'utf-8');

    const lines = csvContent.split('\n').filter(line => line.trim() !== '');
    const headers = lines[0].split(',').map(h => h.trim().replace(/^\"|\"$/g, '').toLowerCase());
    const socials: Social[] = [];

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        if (!line) continue;

        const values = line.split(',').map(v => v.trim().replace(/^\"|\"$/g, '').replace(/\r$/g, ''));

        if (values.length >= headers.length) {
            const social: Record<string, string> = {};
            headers.forEach((header, index) => {
                social[header] = values[index] || '';
            });

            socials.push(social as unknown as Social);
        }
    }

    return socials;
}

export async function getSocials(): Promise<Social[]> {
    return parseSocialsCSV();
}



