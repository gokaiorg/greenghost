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
    quantity: 2,
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
    quantity: 0,
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
  {
    slug: 'wizman-rolling-papers',
    name: 'Wizman Rolling Papers - all in 1',
    price: 150,
    packaging: '32 Leaves, 107*44 mm',
    quantity: 24,
    description:
      "Elevate your rolling game with our exclusive King Size Slim Rolling Papers, each measuring a generous 107*44 mm. Inside every box, you'll find 15 packs, with each pack containing 32 ultra-thin translucent rolling papers and 32 tips. \n\n But that's not all. Our all-in-one package also includes a convenient tray and grinder, making your smoking experience even more enjoyable. Crafted by Asia 420 United and illustrated by Mr. Rin, this product pays homage to Asia's cannabis heritage. \n\n What sets our rolling papers apart is their natural, additive-free composition. We believe in providing you with a clean, unadulterated smoking experience that lets the true flavors shine. Join us as we unite Asian 420 enthusiasts and advocate for medical cannabis legalization. Together, we're exploring new possibilities and striving for a greener, more peaceful world.",
    descSeo:
      "Elevate your rolling game with our exclusive King Size Slim Rolling Papers, each measuring a generous 107*44 mm. Inside every box, you'll find 15 packs, with each pack containing 32 ultra-thin translucent rolling papers and 32 tips.",
    images: [
      '/media/green-ghost-degen-weed-shop-menu-gadget-wizman-rolling-paper-01.webp',
      '/media/green-ghost-degen-weed-shop-menu-gadget-wizman-rolling-paper-01.webp',
      '/media/green-ghost-degen-weed-shop-menu-gadget-wizman-rolling-paper-qr-code.webp',
    ],
    imgDesc: 'Green Ghost - Degen Weed Shop - Wizman Rolling Paper',
  },
  {
    slug: 'slimjim-rolling-papers',
    name: 'SlimJim Rolling Papers',
    price: 80,
    packaging: '20 Leaves, Slim size',
    quantity: 27,
    description:
      "Elevate your smoking experience with SlimJim Rolling Papers. Featuring a sleek and slender design, these Slim papers offer 20 leaves of pure delight for your smoking pleasure. Crafted for connoisseurs who appreciate the finer things, these papers deliver a smooth and stylish smoking experience. Upgrade your smoking game with SlimJim, your go-to choice for slim-sized rolling papers that enhance every puff.",
    descSeo:
      "Elevate your smoking experience with SlimJim Rolling Papers. Featuring a sleek and slender design, these Slim papers offer 20 leaves of pure delight for your smoking pleasure. Crafted for connoisseurs who appreciate the finer things, these papers deliver a smooth and stylish smoking experience. Upgrade your smoking game with SlimJim, your go-to choice for slim-sized rolling papers that enhance every puff.",
    images: [
      '/media/green-ghost-degen-weed-shop-menu-gadget-slimjim-rolling-paper-02.webp',
      '/media/green-ghost-degen-weed-shop-menu-gadget-slimjim-rolling-paper-01.webp',
      '/media/green-ghost-degen-weed-shop-menu-gadget-slimjim-rolling-paper-01.webp',
    ],
    imgDesc: 'Green Ghost - Degen Weed Shop - SlimJim Rolling Paper',
  },
  {
    slug: 'slimjim-rolling-papers-tips',
    name: 'SlimJim Rolling Papers + Tips',
    price: 120,
    packaging: '32 Leaves, Unbleached',
    quantity: 29,
    description:
      "Experience the pinnacle of smoking sophistication with SlimJim Rolling Papers and Tips. This all-in-one package includes 32 unbleached skins and 32 roaches for an eco-conscious smoking experience. Crafted with precision, these slender papers and perfectly-sized tips offer the discerning smoker the ultimate in convenience and eco-friendly indulgence. Elevate your sessions with SlimJim, where unbleached quality meets a comprehensive smoking solution, delivering 32 times the pleasure.",
    descSeo:
      "Experience the pinnacle of smoking sophistication with SlimJim Rolling Papers and Tips. This all-in-one package includes 32 unbleached skins and 32 roaches for an eco-conscious smoking experience. Crafted with precision, these slender papers and perfectly-sized tips offer the discerning smoker the ultimate in convenience and eco-friendly indulgence. Elevate your sessions with SlimJim, where unbleached quality meets a comprehensive smoking solution, delivering 32 times the pleasure.",
    images: [
      '/media/green-ghost-degen-weed-shop-menu-gadget-slimjim-rolling-paper-tips-02.webp',
      '/media/green-ghost-degen-weed-shop-menu-gadget-slimjim-rolling-paper-tips-01.webp',
      '/media/green-ghost-degen-weed-shop-menu-gadget-slimjim-rolling-paper-tips-01.webp',
    ],
    imgDesc: 'Green Ghost - Degen Weed Shop - SlimJim Rolling Paper + Tips',
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
