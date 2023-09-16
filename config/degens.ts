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
    price: 1000,
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
  {
    slug: 'pure-kief',
    name: 'Pure Kief',
    price: 600,
    packaging: '150 microns - 1g',
    THC: '60%',
    CBD: 'undefined',
    ingretiens: '100% Kief',
    quantity: 4,
    description:
      "Our kief is a true masterpiece in the world of cannabis. Carefully crafted from a harmonious blend of premium strains, it offers an exquisite balance of flavors and effects that cater to the most discerning cannabis connoisseurs. With an impressive THC content of 60%, it packs a potent punch that delivers a euphoric and uplifting experience. What sets our kief apart is the meticulous 150-micron sieving process, ensuring that only the finest and most potent trichomes are collected. The result? A product that not only boasts exceptional potency but also enhances the flavor profiles of your favorite strains. Whether you're a seasoned enthusiast or new to kief, our product promises a delightful journey into the world of high-quality cannabis.",
    descSeo:
      'Our kief is a true masterpiece in the world of cannabis. Carefully crafted from a harmonious blend of premium strains, it offers an exquisite balance of flavors and effects that cater to the most discerning cannabis connoisseurs. With an impressive THC content of 60%, it packs a potent punch that delivers a euphoric and uplifting experience.',
    images: [
      '/media/green-ghost-degen-weed-shop-degen-pure-kief-product-01.webp',
      '/media/green-ghost-degen-weed-shop-degen-pure-kief-cover.webp',
      '/media/green-ghost-degen-weed-shop-degen-pure-kief-qr-code.webp',
    ],
    imgDesc: 'Green Ghost - Degen Weed Shop - Pure Kief',
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
