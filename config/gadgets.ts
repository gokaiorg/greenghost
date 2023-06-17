export type Gadget = {
  slug: string;
  name: string;
  packaging: string;
  price: number;
  description: string;
  descSeo: string;
  images: string[];
  imgDesc: string;
  quantity: number;
};

export const gadgets: Gadget[] = [
  {
    slug: 'metal-grinder-50mm-2-layer',
    name: 'Metal Grinder',
    price: 200,
    packaging: '50x17mm, 2-layer',
    quantity: 5,
    description:
      'The perfect tool for herb enthusiasts. With its compact size of 50x17mm and two layers, this grinder offers convenience and efficiency. Crafted from high-quality metal, it guarantees durability and longevity. Say goodbye to manual grinding and embrace the effortless process provided by this sleek and reliable tool.',
    descSeo:
      'The perfect tool for herb enthusiasts. With its compact size of 50x17mm and two layers, this grinder offers convenience and efficiency. Crafted from high-quality metal, it guarantees durability and longevity. Say goodbye to manual grinding and embrace the effortless process provided by this sleek and reliable tool.',
    images: [
      '/media/green-ghost-degen-weed-shop-menu-gadget-metal-grinder-50mm-2-layer-01.webp',
      '/media/green-ghost-degen-weed-shop-menu-gadget-metal-grinder-50mm-2-layer-cover.webp',
      '/media/green-ghost-degen-weed-shop-menu-gadget-metal-grinder-50mm-2-layer-qr-code.webp',
      '/media/green-ghost-degen-weed-shop-menu-gadget-metal-grinder-50mm-2-layer-03.webp',
      '/media/green-ghost-degen-weed-shop-menu-gadget-metal-grinder-50mm-2-layer-02.webp',
    ],
    imgDesc: 'Green Ghost - Degen Weed Shop - Metal Grinder',
  },
  {
    slug: 'wood-grinder-68mm-2-layer',
    name: 'Wood Grinder',
    price: 300,
    packaging: '68x28mm, 2-layer',
    quantity: 2,
    description:
      'The perfect combination of functionality and style with our wood grinder. Measuring 68x28mm, this 2-layer grinder is compact yet efficient. Its durable wooden construction ensures longevity, while the sharp teeth effortlessly grind your herbs to perfection. Experience convenience and enjoy the natural beauty of wood with this essential tool for herb enthusiasts.',
    descSeo:
      'The perfect combination of functionality and style with our wood grinder. Measuring 68x28mm, this 2-layer grinder is compact yet efficient. Its durable wooden construction ensures longevity, while the sharp teeth effortlessly grind your herbs to perfection. Experience convenience and enjoy the natural beauty of wood with this essential tool for herb enthusiasts.',
    images: [
      '/media/green-ghost-degen-weed-shop-menu-gadget-wood-grinder-68mm-2-layer-01.webp',
      '/media/green-ghost-degen-weed-shop-menu-gadget-wood-grinder-68mm-2-layer-cover.webp',
      '/media/green-ghost-degen-weed-shop-menu-gadget-wood-grinder-68mm-2-layer-qr-code.webp',
      '/media/green-ghost-degen-weed-shop-menu-gadget-wood-grinder-68mm-2-layer-03.webp',
      '/media/green-ghost-degen-weed-shop-menu-gadget-wood-grinder-68mm-2-layer-02.webp',
    ],
    imgDesc: 'Green Ghost - Degen Weed Shop - Wood Grinder',
  },
];

export function getGadgetBySlug(slug: string): Gadget | undefined {
  return gadgets.find((gadget) => gadget.slug === slug);
}

export function getGadgets(): Gadget[] {
  return gadgets;
}

export function getGadgetImageUrls(gadget: Gadget): string[] {
  return gadget.images.map((image) => `/media/${image}`);
}
