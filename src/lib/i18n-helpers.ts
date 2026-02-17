/**
 * Shared helper functions for i18n localization
 */

/**
 * Selects the appropriate localized field from a data object
 * 
 * @param data - Object containing localized fields (e.g., { title_en: "...", title_fr: "..." })
 * @param field - Base field name without locale suffix (e.g., "title")
 * @param locale - Current locale (e.g., "en" or "fr")
 * @returns The localized value, falling back to English if French is not available
 * 
 * @example
 * const data = { title_en: "Hello", title_fr: "Bonjour" };
 * selectLocalizedField(data, "title", "fr"); // Returns "Bonjour"
 * selectLocalizedField(data, "title", "en"); // Returns "Hello"
 */
export function selectLocalizedField<T = string>(
    data: Record<string, unknown> | null,
    field: string,
    locale: string
): T | undefined {
    if (!data) return undefined;
    const isFr = locale === 'fr';
    // Access safely
    const valFr = data[`${field}_fr`];
    const valEn = data[`${field}_en`];

    return isFr
        ? ((valFr || valEn) as T)
        : (valEn as T);
}

/**
 * Selects multiple localized fields at once
 * 
 * @param data - Object containing localized fields
 * @param fields - Array of base field names
 * @param locale - Current locale
 * @returns Object with selected localized values
 */
export function selectLocalizedFields<T extends Record<string, unknown>>(
    data: Record<string, unknown> | null,
    fields: string[],
    locale: string
): Partial<T> {
    if (!data) return {};
    const result: Record<string, unknown> = {};
    fields.forEach(field => {
        result[field] = selectLocalizedField(data, field, locale);
    });
    return result as Partial<T>;
}

/**
 * Generates a localized URL for the given path and locale.
 * 
 * @param path - The internal path (e.g., "/menu") or external URL.
 * @param locale - The current locale (e.g., "en" or "fr").
 * @returns The localized URL (e.g., "/fr/menu" for locale="fr", or "/menu" for locale="en").
 */
export function getLocalizedUrl(path: string, locale: string): string {
    // Return paths as-is if they are external, anchor links, or already localized
    if (
        path.startsWith('http') ||
        path.startsWith('//') ||
        path.startsWith('#') ||
        path.startsWith('mailto:') ||
        path.startsWith('tel:')
    ) {
        return path;
    }

    // Normalize path to start with /
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;

    // Helper to check if path already starts with a locale
    const pathSegments = normalizedPath.split('/').filter(Boolean);
    if (pathSegments.length > 0 && (pathSegments[0] === 'en' || pathSegments[0] === 'fr')) {
        return normalizedPath;
    }

    if (locale === 'en') {
        return normalizedPath;
    }

    return `/${locale}${normalizedPath}`;
}
