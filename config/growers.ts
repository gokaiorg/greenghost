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
    slug: 'greenlabunicorn',
    name: 'Green Lab Unicorn',
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
    slug: 'cosmic-temple-vibes',
    name: 'Cosmic Temple Vibes',
    description:
      'Cannabis brand dedicated to healing and inspiring people through the cultivation of premium quality cannabis in Phuket, Thailand.',
    logo: '/media/green-ghost-weed-grower-cosmic-temple-vibes.webp',
    website: 'https://cosmictemplevibes.com/',
    facebook: 'https://www.facebook.com/profile.php?id=100088275630884',
    instagram: '0',
    twitter: '0',
    telegram: '0',
  },
  {
    slug: 'ohigho',
    name: 'Ohigho',
    description:
      'Discover Ohigho Weed Farm, a licensed cannabis paradise in Phuket, Thailand! Farm with #NoPGR Certification.',
    logo: '/media/green-ghost-weed-grower-ohigho.webp',
    website: '0',
    facebook: '0',
    instagram: 'https://www.instagram.com/ohigho_',
    twitter: '0',
    telegram: 'https://t.me/ohighochannel',
  },
  {
    slug: 'growland',
    name: 'Growland',
    description: 'Passionate and experienced growers in Phuket.',
    logo: '/media/green-ghost-weed-grower-growland.webp',
    website: 'https://growland.asia/',
    facebook: '0',
    instagram: 'https://www.instagram.com/ohigho_',
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
  {
    slug: 'buddy-bud-weed',
    name: 'Buddy Bud Weed',
    description:
      'The Buddy Bud takes pride in growing and harvesting only the finest cannabis plants. Plants are carefully tended with love and attention, ensuring that every bud is the highest quality.',
    logo: '/media/green-ghost-weed-grower-buddy-bud-weed.webp',
    website: 'https://buddybudweed.com/',
    facebook: 'https://www.facebook.com/profile.php?id=100090227299714',
    instagram: 'https://www.instagram.com/buddybudweed/',
    twitter: '0',
    telegram: '0',
  },
  {
    slug: 'my-weed',
    name: 'My Weed',
    description:
      'MW Solutions is a company that believes in its customers and believes in the right to live life their way.',
    logo: '/media/green-ghost-grower-my-weed-solutions.webp',
    website: 'https://myweed.in/',
    facebook: 'https://www.facebook.com/profile.php?id=100085363101043',
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
