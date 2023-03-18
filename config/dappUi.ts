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
    name: 'OG Poison',
    price: '250',
    pageLink: '/og-poison',
  },
  {
    name: 'Runtz',
    price: '250',
    pageLink: '/runtz',
  },
  {
    name: 'Green Gelato',
    price: '300',
    pageLink: '/green-gelato',
  },
  {
    name: 'Gelato Dream',
    price: '350',
    pageLink: '/gelato-dream',
  },
  {
    name: 'White Runtz',
    price: '350',
    pageLink: '/white-runtz',
  },
  {
    name: 'Banana Kush',
    price: '400',
    pageLink: '/banana-kush',
  },
  {
    name: 'Jack Herer',
    price: '450',
    pageLink: '/jack-herer',
  },
  {
    name: 'Chem Dog',
    price: '600',
    pageLink: '/chem-dog',
  },
  {
    name: 'Moon Fruit',
    price: '600',
    pageLink: '/moon-fruit',
  },
  {
    name: 'Banana Daddy',
    price: '650',
    pageLink: '/banana-daddy',
  },
  {
    name: 'Orange Velvet',
    price: '700',
    pageLink: '/orange-velvet',
  },
  {
    name: 'Platinum Punch',
    price: '750',
    pageLink: '/platinum-punch',
  },
  {
    name: 'Lemon Berry Candy',
    price: '800',
    pageLink: '/lemon-berry-candy',
  },
  {
    name: 'Mandarin Cookies',
    price: '800',
    pageLink: '/mandarin-cookies',
  },
  {
    name: 'Mimosa',
    price: '850',
    pageLink: '/mimosa',
  },
  {
    name: 'Black Cherry Punch',
    price: '900',
    pageLink: '/black-cherry-punch',
  },
  {
    name: 'Snoop Punch',
    price: '900',
    pageLink: '/snoop-punch',
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
