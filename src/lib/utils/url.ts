/**
 * Sanitizes a URL to prevent XSS attacks (e.g., javascript: links).
 * allowing only http, https, mailto, tel, and relative URLs.
 *
 * @param url The URL to sanitize
 * @returns The sanitized URL or "#" if invalid/unsafe
 */
export function sanitizeUrl(url: string | undefined | null): string {
  if (!url) return "#";

  const trimmed = url.trim();

  // Allow relative URLs (starting with / or #)
  if (trimmed.startsWith("/") || trimmed.startsWith("#")) {
    return trimmed;
  }

  // Allow http/https/mailto/tel schemes
  // We use a regex to ensure the scheme is at the start and followed by colon
  // This prevents things like " javascript:alert(1)" (handled by trim)
  // or weird combinations.
  if (/^(?:https?|mailto|tel):/i.test(trimmed)) {
    return trimmed;
  }

  // If it doesn't match allowlist, return safe fallback
  return "#";
}
