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
    slug: 'bubble-hash',
    name: 'Bubble Hash',
    price: 999,
    packaging: '1g',
    THC: '60',
    CBD: '0',
    ingretiens: 'Kief, Oil',
    quantity: 0,
    description:
      'Dive into the enchanting realm of cannabis with Bubble Hash, boasting a remarkable 60% THC concentration. Meticulously crafted, this exceptional concoction combines top-tier ingredients, resulting in a harmonious blend of pure bliss. Created from the finest cannabis trichomes, Bubble Hash delivers an elevated experience like no other, available exclusively at Green Ghost, your trusted source for exceptional cannabis products.',
    descSeo:
      'Dive into the enchanting realm of cannabis with Bubble Hash, boasting a remarkable 60% THC concentration. Meticulously crafted, this exceptional concoction combines top-tier ingredients, resulting in a harmonious blend of pure bliss. Created from the finest cannabis trichomes, Bubble Hash delivers an elevated experience like no other, available exclusively at Green Ghost, your trusted source for exceptional cannabis products.',
    images: [
      '/media/green-ghost-degen-weed-shop-menu-degen-bubble-hash-photo-01.webp',
      '/media/green-ghost-degen-weed-shop-menu-degen-bubble-hash-cover.webp',
      '/media/green-ghost-degen-weed-shop-menu-degen-bubble-hash-qr-code.webp',
      '/media/green-ghost-degen-weed-shop-menu-degen-bubble-hash-photo-02.webp',
    ],
    imgDesc:
      'Green Ghost 🌿👻 Degen Weed Shop Bubble Hash Cannabis Concentrate',
  },
  {
    slug: 'pollen-hash',
    name: 'Pollen Hash',
    price: 500,
    packaging: '1g',
    THC: '40',
    CBD: '0',
    ingretiens: 'Kief, Oil',
    quantity: 20,
    description:
      'Experience the ethereal world of cannabis at Green Ghost, your go-to weed shop for Pollen Hash THC with a tantalizing 40% potency. Crafted from the finest ingredients, our concoction blends premium Kief and luscious Oil, creating a hypnotic journey into a higher realm of relaxation and euphoria. Elevate your senses and spirit with this extraordinary fusion, exclusively at Green Ghost.',
    descSeo:
      'Experience the ethereal world of cannabis at Green Ghost, your go-to weed shop for Pollen Hash THC with a tantalizing 40% potency. Crafted from the finest ingredients, our concoction blends premium Kief and luscious Oil, creating a hypnotic journey into a higher realm of relaxation and euphoria. Elevate your senses and spirit with this extraordinary fusion, exclusively at Green Ghost.',
    images: [
      '/media/green-ghost-degen-weed-shop-menu-degen-pollen-hash-photo-01.webp',
      '/media/green-ghost-degen-weed-shop-menu-degen-pollen-hash-cover.webp',
      '/media/green-ghost-degen-weed-shop-menu-degen-pollen-hash-qr-code.webp',
      '/media/green-ghost-degen-weed-shop-menu-degen-pollen-hash-photo-02.webp',
    ],
    imgDesc:
      'Green Ghost 🌿👻 Degen Weed Shop Pollen Hash Cannabis Concentrate',
  },
  {
    slug: 'pure-kief',
    name: 'Pure Kief',
    price: 999,
    packaging: 'Sativa. 150 microns - 1g',
    THC: '60',
    CBD: '0',
    ingretiens: '100% Kief',
    quantity: 0,
    description:
      "Our kief is a true masterpiece in the world of cannabis. Carefully crafted from a harmonious blend of premium strains, it offers an exquisite balance of flavors and effects that cater to the most discerning cannabis connoisseurs. With an impressive THC content of 60%, it packs a potent punch that delivers a euphoric and uplifting experience. What sets our kief apart is the meticulous 150-micron sieving process, ensuring that only the finest and most potent trichomes are collected. The result? A product that not only boasts exceptional potency but also enhances the flavor profiles of your favorite strains. Whether you're a seasoned enthusiast or new to kief, our product promises a delightful journey into the world of high-quality cannabis.",
    descSeo:
      'Our kief is a true masterpiece in the world of cannabis. Carefully crafted from a harmonious blend of premium strains, it offers an exquisite balance of flavors and effects that cater to the most discerning cannabis connoisseurs. With an impressive THC content of 60%, it packs a potent punch that delivers a euphoric and uplifting experience.',
    images: [
      '/media/green-ghost-degen-weed-shop-degen-pure-kief-product-01.webp',
      '/media/green-ghost-degen-weed-shop-degen-pure-kief-cover.webp',
      '/media/green-ghost-degen-weed-shop-degen-pure-kief-qr-code.webp',
    ],
    imgDesc: 'Green Ghost 🌿👻 Degen Weed Shop Pure Kief Cannabis Concentrate',
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
