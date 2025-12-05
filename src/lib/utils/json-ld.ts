/**
 * Safely serializes data to JSON-LD string, escaping potentially dangerous characters
 * to prevent XSS vulnerabilities.
 */
export function toJsonLd(data: unknown): string {
    return JSON.stringify(data).replace(/</g, '\\u003c');
}
