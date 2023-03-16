// This configuration file keeps all UI constants and settings
// Specific to the minter dapp use case, these aren't important when you want to build something custom
// Added in one place for convenience

// Your Dapp hostname example: https://www.mydapp.com it should come from env vars
export const dappHostname = process.env.NEXT_PUBLIC_DAPP_HOST;

// HTML metata and og tags, default values for MetaHead.tsx component
export const defaultMetaTags = {
  title: 'Green Garden Dispensary - Phuket Cannabis Shop ร้าน ขาย กัญชา.',
  description:
    'Green Garden Dispensary is a cannabis shop in Phuket offering a wide variety of locally-sourced and organic products, including flowers, edibles, and accessories.',
  shortname: 'GreenGarden',
  image: `${dappHostname}/social.png`,
};

// Roadmap section data
export const weedmap = [
  {
    title: 'Flowers',
    points: ['Grand Daddy Purple - 350THB'],
  },
  {
    title: 'Pre Rolled',
    points: ['Grand Daddy Purple - 400THB'],
  },
  {
    title: 'Bakery',
    points: ['Brownie - 200THB'],
  },
];

export const bud = [
  {
    name: 'Banana Kush',
    price: '...',
    pageLink: '/banana-kush',
  },
  {
    name: 'Jack Herer',
    price: '...',
    pageLink: '/jack-herer',
  },
  {
    name: 'OG Kush',
    price: '...',
    pageLink: '/og-kush',
  },
  {
    name: 'Gelato',
    price: '...',
    pageLink: '/gelato',
  },
  {
    name: 'Mimosa',
    price: '...',
    pageLink: '/mimosa',
  },
  {
    name: 'Mandarin Cookies',
    price: '...',
    pageLink: '/mandarin-cookies',
  },
  {
    name: 'Moon Fruit',
    price: '...',
    pageLink: '/moon-fruit',
  },
  {
    name: 'Lemon Berry Candy',
    price: '...',
    pageLink: '/lemon-berry-candy',
  },
  {
    name: 'Platinum Punch',
    price: '...',
    pageLink: '/platinum-punch',
  },
  {
    name: 'Black Chery Punch',
    price: '...',
    pageLink: '/black-cherry-punch',
  },
  {
    name: 'Snoop Punch',
    price: '...',
    pageLink: '/snoop-punch',
  },
  {
    name: 'Chem Dog',
    price: '...',
    pageLink: '/chem-dog',
  },
  {
    name: 'Orange Velvet',
    price: '...',
    pageLink: '/orange-velvet',
  },
  {
    name: 'Banana Daddy',
    price: '...',
    pageLink: '/banana-daddy',
  },
];
export const preroll = [
  {
    name: 'Poison',
    price: '300',
    pageLink: '/acapulco-gold',
  },
];
export const bakery = [
  {
    name: 'Brownie - 30G',
    price: '250',
    pageLink: '/space-cake-brownie',
  },
];
