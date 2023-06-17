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
      '/media/green-ghost-degen-weed-shop-menu-degen-hash-01.webp',
      '/media/green-ghost-degen-weed-shop-menu-degen-hash-cover.webp',
      '/media/green-ghost-degen-weed-shop-menu-degen-hash-qr-code.webp',
    ],
    imgDesc: 'Green Ghost - Degen Weed Shop - Hash',
  },
  {
    slug: 'thc-wax',
    name: 'WAX',
    price: 666,
    packaging: '4 pieces - 10mg THC',
    THC: '750mg/g',
    CBD: '10mg/g',
    ingretiens: 'Sugar, wheat flour, water, egg, cocoa powder, salt, milk',
    quantity: 0,
    description:
      'Introducing the ultimate indulgence for cannabis lovers, our Brownie Space Cake made with OG kush marijuana butter, Switzerland flour and Belgium chocolate. This delicious treat is the perfect way to enjoy the full benefits of marijuana in a delectable and decadent form. \n\n Our Brownie Space Cake is made with only the finest ingredients, including premium OG kush marijuana butter, which is known for its strong and relaxing effects. The Switzerland flour and Belgium chocolate add a rich and indulgent flavor to the brownie. \n\n Each bite of this heavenly treat will transport you to a new level of taste and relaxation. Perfect for any occasion, from a special treat for yourself or as a gift for your friends, this Brownie Space Cake is sure to be a hit.',
    descSeo:
      'Introducing the ultimate indulgence for cannabis lovers, our Brownie Space Cake made with OG kush marijuana butter, Switzerland flour and Belgium chocolate. This delicious treat is the perfect way to enjoy the full benefits of marijuana in a delectable and decadent form.',
    images: [
      '/media/green-ghost-degen-weed-shop-strain-eleven-roses-bud-01.webp',
      '/media/green-ghost-degen-weed-shop-degen-thc-cookies-cover.png',
      '/media/green-ghost-degen-weed-shop-strain-eleven-roses-qr-code.webp',
    ],
    imgDesc: 'Green Ghost - Degen Weed Shop - WAX',
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
