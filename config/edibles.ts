export type Product = {
  slug: string;
  name: string;
  dominance: string;
  indica: string;
  sativa: string;
  THC: string;
  CBD: string;
  effects: string;
  relieves: string;
  grower: string;
  growerSlug: string;
  price: number;
  description: string;
  descSeo: string;
  images: string[];
  imgDesc: string;
  source: string;
  origin: string;
  environment: string;
  harvest: string;
  quantity: number;
};

export const edibles: Product[] = [
  {
    slug: 'kings-juice',
    name: 'King’s Juice',
    price: 666,
    dominance: 'Indica Dominant',
    indica: '60',
    sativa: '40',
    THC: '26',
    CBD: 'undefined',
    effects: 'Happy, Relaxed, Uplifted',
    relieves: 'Pain, Stress, Anxiety',
    grower: 'My Weed Solutions',
    growerSlug: 'my-weed-solutions',
    environment: 'Organic Indoor',
    harvest: '03/04/2023',
    quantity: 1,
    origin: 'Phuket',
    description:
      "The King's Juice is a hybrid cannabis strain created by combining two terpene profiles loved by its creator, Arjan. It is a cross between Mimosa from Symbiotic Genetics and King's Kush, resulting in a plant with a piney, coney growth and a long main cola that grows taller than its side branches. During the flowering period, the plant will stretch considerably, and its branches will grow steadily. \n\n The flowers of The King's Juice are known for their balanced floral and citrusy/earthy fragrance, which creates a complex aroma that resembles fresh fruit juice. Towards the end of the flowering period, the plant will take on beautiful reddish/violet hues, giving it a stunning fall color. The plant is also covered in trichomes, which add to its beauty. \n\n The effect of The King's Juice is a balanced high that can be enjoyed all day. It provides an uplifting head buzz, while the body remains light and active. The taste of the strain stays in the mouth for a while after exhaling, creating a satisfying sensation. Overall, The King's Juice is a beautiful and flavorful strain that offers a well-rounded high.",
    descSeo:
      "The King's Juice is a hybrid cannabis strain created by combining two terpene profiles loved by its creator, Arjan. It is a cross between Mimosa from Symbiotic Genetics and King's Kush, resulting in a plant with a piney, coney growth and a long main cola that grows taller than its side branches. During the flowering period, the plant will stretch considerably, and its branches will grow steadily.",
    images: [
      '/media/green-ghost-degen-weed-shop-strain-kings-juice-bud-01.webp',
      '/media/green-ghost-degen-weed-shop-strain-kings-juice-cover.webp',
      '/media/green-ghost-degen-weed-shop-strain-kings-juice-qr-code.webp',
    ],
    imgDesc: 'Green Ghost - Degen Weed Shop - Strain King’s Juice',
    source: 'https://growdiaries.com/seedbank/green-house-seeds/kings-juice',
  },
  {
    slug: 'eleven-roses',
    name: 'Eleven Roses',
    price: 666,
    dominance: 'Indica Dominant',
    indica: '90',
    sativa: '10',
    THC: '24',
    CBD: 'undefined',
    effects: 'Sleepy, Relaxed, Hungry',
    relieves: 'Stress, Anxiety, Insomnia',
    grower: 'My Weed Solutions',
    growerSlug: 'my-weed-solutions',
    environment: 'Organic Indoor',
    harvest: '08/04/2023',
    quantity: 1,
    origin: 'Phuket',
    description:
      'Eleven Roses is an indica-dominant hybrid marijuana strain with an unknown genetic lineage. The dense and resinous buds of Eleven Roses have a pungent aroma with hints of pine, earth, and fuel. Though there is limited information available about this strain, its effects are said to be deeply relaxing and may be useful for treating insomnia, pain, and stress. \n\n Eleven Roses is also known for its sedative properties, making it a good choice for nighttime use or for those seeking relief from anxiety or tension. The exact THC and CBD levels of Eleven Roses are not known, but it is believed to have a moderately high THC content, potentially reaching up to 20%. \n\n The name Eleven Roses is thought to reference the potent and aromatic nature of this strain, with the eleven representing the abundance of its positive attributes. While there is still much to be learned about Eleven Roses, it is clear that this strain has the potential to provide relief for a range of medical conditions while also delivering a deep sense of relaxation and tranquility.',
    descSeo:
      'Eleven Roses is an indica-dominant hybrid marijuana strain with an unknown genetic lineage. The dense and resinous buds of Eleven Roses have a pungent aroma with hints of pine, earth, and fuel. Though there is limited information available about this strain, its effects are said to be deeply relaxing and may be useful for treating insomnia, pain, and stress.',
    images: [
      '/media/green-ghost-degen-weed-shop-strain-eleven-roses-bud-01.webp',
      '/media/green-ghost-degen-weed-shop-strain-eleven-roses-cover.webp',
      '/media/green-ghost-degen-weed-shop-strain-eleven-roses-qr-code.webp',
    ],
    imgDesc: 'Green Ghost - Degen Weed Shop - Strain Eleven Roses',
    source: 'https://www.leafly.com/strains/eleven-roses',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return edibles.find((edible) => edible.slug === slug);
}

export function getEdibles(): Product[] {
  return edibles;
}

export function getProductImageUrls(edible: Product): string[] {
  return edible.images.map((image) => `/media/${image}`);
}
