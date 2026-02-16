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
