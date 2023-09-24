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
];

export function getGrowerBySlug(slug: string): Grower | undefined {
  return growers.find((grower) => grower.slug === slug);
}

export function getGrowers(): Grower[] {
  return growers;
}
