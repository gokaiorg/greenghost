export type Degen = {
  slug: string;
  name: string;
  packaging: string;
  THC: string;
  CBD: string;
  ingretiens: string;
  price: number;
  description: string;
  descSeo: string;
  images: string[];
  imgDesc: string;
  quantity: number;
};

export const degens: Degen[] = [
  {
    slug: 'hash',
    name: 'Hash',
    price: 2000,
    packaging: '1g',
    THC: '45% - 400mg/g',
    CBD: '1% - 10mg/g',
    ingretiens: 'Kief, Oil',
    quantity: 0,
    description:
      'Experience the rich and aromatic world of hash with our carefully curated selection. Our hash is sourced from premium cannabis strains and meticulously processed to ensure the highest quality. With its distinctive texture and potent effects, our hash offers a truly authentic and traditional cannabis experience. Explore the depths of flavor and relaxation that our hash has to offer and elevate your cannabis journey to new heights.',
    descSeo:
      'Experience the rich and aromatic world of hash with our carefully curated selection. Our hash is sourced from premium cannabis strains and meticulously processed to ensure the highest quality. With its distinctive texture and potent effects, our hash offers a truly authentic and traditional cannabis experience. Explore the depths of flavor and relaxation that our hash has to offer and elevate your cannabis journey to new heights.',
    images: [
      '/media/green-ghost-degen-weed-shop-menu-degen-hash-cover.webp',
      '/media/green-ghost-degen-weed-shop-menu-degen-hash-cover.webp',
      '/media/green-ghost-degen-weed-shop-menu-degen-hash-qr-code.webp',
    ],
    imgDesc: 'Green Ghost - Degen Weed Shop - Hash',
  },
];

export function getDegenBySlug(slug: string): Degen | undefined {
  return degens.find((degen) => degen.slug === slug);
}

export function getDegens(): Degen[] {
  return degens;
}

export function getDegenImageUrls(degen: Degen): string[] {
  return degen.images.map((image) => `/media/${image}`);
}
