export type Cbd = {
  slug: string;
  name: string;
  dominance: string;
  CBD: string;
  price: number;
  images: string[];
  quantity: number;
};

export const cbds: Cbd[] = [
  {
    slug: 'fruit-cake-cbd',
    name: 'Fruit Cake CBD',
    dominance: 'Flowers',
    CBD: '10',
    price: 1,
    quantity: 1,
    images: [
      '/media/cbd/fruit-cake-cbd-cover-green-ghost.webp',
      '/media/cbd/fruit-cake-cbd-bud-green-ghost.webp',
    ],
  },
  {
    slug: 'green-lemonade-cbd',
    name: 'Green Lemonade CBD',
    dominance: 'Flowers',
    CBD: '13',
    price: 1,
    quantity: 1,
    images: [
      '/media/cbd/green-lemonade-cbd-cover-green-ghost.webp',
      '/media/cbd/green-lemonade-cbd-bud-green-ghost.webp',
    ],
  },
  {
    slug: 'hash-lemon-dry-cbd',
    name: 'Hash Lemon Dry CBD',
    dominance: 'Concentrates',
    CBD: '60',
    price: 1,
    quantity: 1,
    images: [
      '/media/cbd/hash-lemon-dry-cbd-cover-green-ghost.webp',
      '/media/cbd/hash-lemon-dry-cbd-concentrate-green-ghost.webp',
    ],
  },
  {
    slug: 'trim-cbd',
    name: 'Trim CBD',
    dominance: 'Flowers',
    CBD: '1',
    price: 1,
    quantity: 1,
    images: [
      '/media/cbd/trim-cbd-cover-green-ghost.webp',
      '/media/cbd/trim-cbd-bud-green-ghost.webp',
    ],
  },
];

export function getCbdBySlug(slug: string): Cbd | undefined {
  return cbds.find((cbd) => cbd.slug === slug);
}

export function getCbds(): Cbd[] {
  return cbds;
}

export function getCbdImageUrls(cbd: Cbd): string[] {
  return cbd.images.map((image) => `/media/${image}`);
}
