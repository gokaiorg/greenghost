export type Edible = {
  slug: string;
  name: string;
  packaging: string;
  THC: string;
  CBD: string;
  effects: string;
  ingretiens: string;
  price: number;
  description: string;
  descSeo: string;
  images: string[];
  imgDesc: string;
  quantity: number;
};

export const edibles: Edible[] = [
  {
    slug: 'thc-brownie',
    name: 'THC Brownie',
    price: 250,
    packaging: '1 piece',
    THC: '50mg',
    CBD: 'undefined',
    effects: 'Happy, Relaxed, Sleepy',
    ingretiens: 'Dark chocolate, Sugar, Cannabutter, Eggs, Flour',
    quantity: 6,
    description:
      'Introducing the ultimate indulgence for cannabis lovers, our Brownie Space Cake made with OG kush marijuana butter, Switzerland flour and Belgium chocolate. This delicious treat is the perfect way to enjoy the full benefits of marijuana in a delectable and decadent form. \n\n Our Brownie Space Cake is made with only the finest ingredients, including premium OG kush marijuana butter, which is known for its strong and relaxing effects. The Switzerland flour and Belgium chocolate add a rich and indulgent flavor to the brownie. \n\n Each bite of this heavenly treat will transport you to a new level of taste and relaxation. Perfect for any occasion, from a special treat for yourself or as a gift for your friends, this Brownie Space Cake is sure to be a hit.',
    descSeo:
      'Introducing the ultimate indulgence for cannabis lovers, our Brownie Space Cake made with OG kush marijuana butter, Switzerland flour and Belgium chocolate. This delicious treat is the perfect way to enjoy the full benefits of marijuana in a delectable and decadent form.',
    images: [
      '/media/green-ghost-degen-weed-shop-menu-edible-thc-brownie-01.webp',
      '/media/green-ghost-degen-weed-shop-menu-edible-thc-brownie-cover.webp',
      '/media/green-ghost-degen-weed-shop-menu-edible-thc-brownie-qr-code.webp',
      '/media/green-ghost-degen-weed-shop-menu-edible-thc-brownie-04.webp',
      '/media/green-ghost-degen-weed-shop-menu-edible-thc-brownie-03.webp',
      '/media/green-ghost-degen-weed-shop-menu-edible-thc-brownie-02.webp',
    ],
    imgDesc: 'Green Ghost - Degen Weed Shop - Edible THC Brownie',
  },
  {
    slug: 'thc-cookies',
    name: 'THC Cookie',
    price: 250,
    packaging: '1 piece',
    THC: '50mg',
    CBD: 'undefined',
    effects: 'Creative, Happy, Euphoric',
    ingretiens: 'Cannabutter, Eggs, Flour, Dried Grapes',
    quantity: 9,
    description:
      "Satisfy your sweet tooth and cannabis cravings with our THC-infused cookies, lovingly made in Phuket. Each pack includes four delectable cookies that are crafted with precision and care. From the first bite, you'll experience the delightful fusion of flavors and the gentle, soothing effects of THC. Treat yourself to a homemade cannabis-infused delight that captures the essence of Phuket's culinary craftsmanship. \n\n Indulge in the homemade goodness of our THC cookies, meticulously prepared in Phuket. With four cookies per pack, these delectable treats are infused with a carefully measured dose of THC for a consistent and enjoyable experience. Baked with high-quality ingredients, our cookies offer a delightful combination of taste and potency. Experience the mouthwatering flavors and relaxation that our THC cookies have to offer. \n\n Experience the taste of Phuket with our homemade THC cookies. Crafted with love and care, these cookies are the perfect indulgence for cannabis enthusiasts. Each pack contains four cookies, expertly infused with THC to deliver a satisfying and pleasurable experience. Enjoy the rich flavors and the soothing effects of our THC cookies, made with the finest ingredients right here in Phuket.",
    descSeo:
      "Satisfy your sweet tooth and cannabis cravings with our THC-infused cookies, lovingly made in Phuket. Each pack includes four delectable cookies that are crafted with precision and care. From the first bite, you'll experience the delightful fusion of flavors and the gentle, soothing effects of THC. Treat yourself to a homemade cannabis-infused delight that captures the essence of Phuket's culinary craftsmanship.",
    images: [
      '/media/green-ghost-degen-weed-shop-menu-edible-thc-cookies-01.webp',
      '/media/green-ghost-degen-weed-shop-menu-edible-thc-cookies-cover.webp',
      '/media/green-ghost-degen-weed-shop-menu-edible-thc-cookies-qr-code.webp',
      '/media/green-ghost-degen-weed-shop-menu-edible-thc-cookies-02.webp',
      '/media/green-ghost-degen-weed-shop-menu-edible-thc-cookies-03.webp',
    ],
    imgDesc: 'Green Ghost - Degen Weed Shop - Edible THC Cookies',
  },
];

export function getEdibleBySlug(slug: string): Edible | undefined {
  return edibles.find((edible) => edible.slug === slug);
}

export function getEdibles(): Edible[] {
  return edibles;
}

export function getEdibleImageUrls(edible: Edible): string[] {
  return edible.images.map((image) => `/media/${image}`);
}
