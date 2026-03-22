/**
 * Sanitizes a URL to prevent XSS attacks (e.g., javascript: links).
 * allowing only http, https, mailto, tel, and relative URLs.
 *
 * @param url The URL to sanitize
 * @returns The sanitized URL or "#" if invalid/unsafe
 */
export function sanitizeUrl(url: string | undefined | null): string {
  if (!url) return "#";

  let trimmed = url.trim();

  // Handle case where the URL provided is actually a whole iframe tag: <iframe src="..." ...></iframe>
  if (trimmed.startsWith("<iframe")) {
    const match = trimmed.match(/src=["'](.*?)["']/);
    if (match && match[1]) {
      trimmed = match[1].trim();
    }
  }

  // Allow relative URLs (starting with / or #)
  if (trimmed.startsWith("/") || trimmed.startsWith("#")) {
    return trimmed;
  }

  // Allow http/https/mailto/tel schemes
  if (/^(?:https?|mailto|tel):/i.test(trimmed)) {
    return trimmed;
  }

  // If it doesn't match allowlist, return safe fallback
  return "#";
}
