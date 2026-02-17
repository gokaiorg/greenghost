import { SectionData } from "@/lib/bigquery";

/**
 * Generic helper to get a localized value from a data row
 * It handles the robust "App-Level Localization" strategy
 * @param row The object containing data (e.g. { title_en: "...", title_fr: "..." })
 * @param field The base field name (e.g. "title")
 * @param locale Current locale (e.g. 'en', 'fr')
 * @param fallbackToEn Whether to return English value if localized value is missing (default true)
 * @returns The localized string
 */
export function getLocalizedValue(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    row: Record<string, any>,
    field: string,
    locale: string,
    fallbackToEn = true
): string {
    const localized = row[`${field}_${locale}`];
    const english = row[`${field}_en`];

    // If we have a value for the requested locale, return it
    if (localized) {
        return localized;
    }

    // Only fallback if requested and English value exists
    if (fallbackToEn && english) {
        return english;
    }

    return "";
}

interface LocalizedLink {
    label: string;
    url: string;
}

interface LocalizedSection {
    title: string;
    description: string;
    links: LocalizedLink[];
}

/**
 * Helper to get localized content for a specific section component
 * @param sections Array of all section data
 * @param componentName The name of the component to find (matches 'component' column)
 * @param locale Current locale
 * @returns Clean localized object with title, description and links
 */
export function getLocalizedSection(
    sections: SectionData[],
    componentName: string,
    locale: string
): LocalizedSection {
    const section = sections.find((s) => s.component === componentName);

    if (!section) {
        return {
            title: "",
            description: "",
            links: [],
        };
    }

    const title = getLocalizedValue(section, "title", locale);
    const description = getLocalizedValue(section, "description", locale);

    const links: LocalizedLink[] = [];

    // Helper to process a link pair (label + url)
    const processLink = (index: string) => {
        const label = getLocalizedValue(section, `link_label_${index}`, locale);
        const url = getLocalizedValue(section, `link_url_${index}`, locale);

        if (label && url) {
            links.push({ label, url });
        }
    };

    // Process up to 3 links (based on current database schema)
    processLink("01");
    processLink("02");
    processLink("03");

    return {
        title,
        description,
        links,
    };
}
