export type Grower = {
  slug: string;
  name: string;
  description: string;
  logo: string;
  website: string;
  facebook: string;
  instagram: string;
  twitter: string;
  telegram: string;
};

export const growers: Grower[] = [
  {
    slug: 'thaigreenlab',
    name: 'ThaiGreenLab',
    description:
      'Following the legalization of cannabis in Thailand in December 2018, Thailand medical industry consists of highly qualified doctors & practitioners who took rigorous training to build expertise and knowledge over the years.',
    logo: '/media/green-ghost-weed-grower-thaigreenlab.webp',
    website: 'https://thaigreenlab.com/',
    facebook: 'https://www.facebook.com/ThaiGreenLab',
    instagram: 'https://www.instagram.com/thaigreenlab/',
    twitter: '0',
    telegram: '0',
  },
  {
    slug: 'greenlabunicorn',
    name: 'Green Lab Unicorn',
    description: 'Licensed Cannabis Shop and Farm from Phuket, Thailand 🦄',
    logo: '/media/green-ghost-weed-grower-green-lab-unicorn.webp',
    website: '0',
    facebook: '0',
    instagram: 'https://www.instagram.com/greenlabunicorn420',
    twitter: '0',
    telegram: 'https://t.me/GreenLabUnicornShop',
  },
  {
    slug: 'growland',
    name: 'Growland',
    description: 'Passionate and experienced growers in Phuket.',
    logo: '/media/green-ghost-weed-grower-growland.webp',
    website: '0',
    facebook: 'https://www.facebook.com/GrowlandPhuket83/',
    instagram: 'https://www.instagram.com/growlandphuket/',
    twitter: '0',
    telegram: '0',
  },
  {
    slug: 'sweed-dreams',
    name: 'Sweed Dreams',
    description:
      'Indoor grower in Thailand dedicated to producing exceptional cannabis flowers, their commitment to quality shines through in every strain they cultivate.',
    logo: '/media/green-ghost-weed-grower-sweed-dreams.webp',
    website: 'https://sweeddreamsthai.com/',
    facebook: '0',
    instagram: 'https://www.instagram.com/sweed.dreams.thai/',
    twitter: 'https://twitter.com/Sweed_DreamsNFT',
    telegram: '0',
  },
  {
    slug: 'cbd-cannabiz-farm',
    name: 'CBD Cannabiz farm',
    description:
      'Real professional farmers who love and understand the nature of trees well with more than 50 years of experience in agricultural business.',
    logo: '/media/green-ghost-weed-grower-cbd-cannabiz-farm.webp',
    website: 'https://www.cbdcannabizfarm.com',
    facebook: 'https://www.facebook.com/cbdcannabiz/',
    instagram: '0',
    twitter: '0',
    telegram: '0',
  },
];

export function getGrowerBySlug(slug: string): Grower | undefined {
  return growers.find((grower) => grower.slug === slug);
}

export function getGrowers(): Grower[] {
  return growers;
}
