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
    imgDesc: 'Degen Weed Shop Bubble Hash Cannabis Concentrate',
  },
  {
    slug: 'pollen-hash',
    name: 'Pollen Hash',
    price: 999,
    packaging: '1g',
    THC: '40',
    CBD: '0',
    ingretiens: 'Kief, Oil',
    quantity: 0,
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
    imgDesc: 'Degen Weed Shop Pollen Hash Cannabis Concentrate',
  },
  {
    slug: 'dry-sift-hash',
    name: 'Dry Sift Hash',
    price: 600,
    packaging: '1g',
    THC: '60',
    CBD: '0',
    ingretiens: 'Kief, Oil',
    quantity: 1,
    description:
      "Introducing Dry Sift Hash with an impressive 60% THC concentration, delivering a potent and flavorful experience for cannabis connoisseurs. This premium hash is crafted through a meticulous dry sifting process, where cannabis trichomes are separated from plant material to create a clean, concentrated product. The result is a fine, sandy texture packed with pure cannabinoids and terpenes, offering a robust, long-lasting high. \n\n Known for its rich, earthy aroma with hints of pine and spice, Dry Sift Hash delivers a smooth and enjoyable smoke. Perfect for those looking to enhance their cannabis experience, it can be enjoyed in a pipe, vaporizer, or mixed with flower for an added kick. Whether you're seeking deep relaxation or relief from chronic pain, Dry Sift Hash's high THC content ensures powerful effects that cater to both recreational and medicinal users.",
    descSeo:
      'Experience premium Dry Sift Hash with 60% THC. Potent, pure, and packed with cannabinoids for a powerful, long-lasting high. Perfect for seasoned cannabis users.',
    images: [
      '/media/green-ghost-degen-weed-shop-menu-degen-dry-sift-hash-product-01.webp',
      '/media/green-ghost-degen-weed-shop-menu-degen-dry-sift-hash-cover.webp',
      '/media/green-ghost-degen-weed-shop-menu-degen-dry-sift-hash-product-02.webp',
    ],
    imgDesc: 'Degen Weed Shop Dry Sift Hash Cannabis Concentrate',
  },
  {
    slug: 'super-dry-hash',
    name: 'Super Dry Hash',
    price: 600,
    packaging: '1g',
    THC: '60',
    CBD: '0',
    ingretiens: 'Kief, Oil',
    quantity: 1,
    description:
      'Super Dry Hash is a premium dry sift hash that delivers an unparalleled experience for cannabis enthusiasts seeking potent and clean concentrates. Crafted through a meticulous dry sifting process, this hash achieves a super-dry texture while preserving the highest quality of cannabinoids and terpenes. With an impressive THC content of 60%, Super Dry Hash offers a powerful punch that is sure to satisfy even the most seasoned users. \n\n The texture of this hash is crumbly and easy to work with, making it an ideal choice for sprinkling into joints, topping off bowls, or using in a hash-specific vaporizer. Its aroma is rich and earthy, with hints of pine and spice that evoke the natural essence of premium cannabis flowers. Upon consumption, expect a smooth and flavorful experience that highlights the robust terpene profile. \n\n Super Dry Hash is celebrated for its intense effects, starting with an uplifting cerebral buzz that transitions into a deeply relaxing body high. It’s perfect for moments of creative inspiration or winding down after a long day. Medical cannabis users may find relief from chronic pain, stress, and insomnia thanks to its potent properties.',
    descSeo:
      'Super Dry Hash: A premium dry sift hash with 60% THC, offering intense effects, earthy flavors, and a versatile, super-dry texture perfect for any session.',
    images: [
      '/media/green-ghost-degen-weed-shop-menu-degen-super-dry-hash-cover.webp',
      '/media/green-ghost-degen-weed-shop-menu-degen-super-dry-hash-cover.webp',
      '/media/green-ghost-degen-weed-shop-menu-degen-super-dry-hash-cover.webp',
    ],
    imgDesc: 'Degen Weed Shop Super Dry Hash Cannabis Concentrate',
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
