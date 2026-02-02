export interface Strain {
    name: string;
    type: string;
    thc: number;
    cbd: number;
    description: string;
    effects: string;
    relieves: string;
    dominance: string;
}

export function findStrain(strains: Strain[], query: string): Strain | null {
    if (!query) return null;

    const queryLower = query.toLowerCase();

    // First try exact match
    const exactMatch = strains.find((s) => s.name.toLowerCase() === queryLower);
    if (exactMatch) return exactMatch;

    // Then try partial match in name
    const nameMatch = strains.find((s) =>
        s.name.toLowerCase().includes(queryLower),
    );
    if (nameMatch) return nameMatch;

    // Then try matching effects or relief
    const effectMatch = strains.find(
        (s) =>
            s.effects.toLowerCase().includes(queryLower) ||
            s.relieves.toLowerCase().includes(queryLower) ||
            s.dominance.toLowerCase().includes(queryLower),
    );

    return effectMatch || null;
}

export function escapeHtml(unsafe: string): string {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export function formatStrainInfo(strain: Strain): string {
    return (
        `🌿 *${escapeHtml(strain.name)}* (${escapeHtml(strain.dominance)})
` +
        `THC: ${strain.thc}% | CBD: ${strain.cbd}%
` +
        `Effects: ${escapeHtml(strain.effects)}
` +
        `Relieves: ${escapeHtml(strain.relieves)}


` +
        `${escapeHtml(strain.description.substring(0, 200))}${strain.description.length > 200 ? "..." : ""}`
    );
}
