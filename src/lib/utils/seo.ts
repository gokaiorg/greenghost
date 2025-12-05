export function getCanonicalUrl(path: string = ''): string {
    const baseUrl = 'https://green.gd';
    // Remove any query parameters and trailing slashes
    const cleanPath = path.split('?')[0].replace(/\/$/, '');
    // Ensure path starts with / if it's not empty
    const normalizedPath = cleanPath && !cleanPath.startsWith('/') ? `/${cleanPath}` : cleanPath;
    return `${baseUrl}${normalizedPath}`;
}

export function sanitizeSchema<T>(schema: T): T {
    if (typeof schema === 'string') {
        // Replace < with \u003c to prevent XSS in JSON-LD
        return schema.replace(/</g, '\\u003c') as unknown as T;
    }

    if (Array.isArray(schema)) {
        return schema.map(item => sanitizeSchema(item)) as unknown as T;
    }

    if (typeof schema === 'object' && schema !== null) {
        const sanitized: Record<string, unknown> = {};
        for (const [key, value] of Object.entries(schema)) {
            sanitized[key] = sanitizeSchema(value);
        }
        return sanitized as T;
    }

    return schema;
}
