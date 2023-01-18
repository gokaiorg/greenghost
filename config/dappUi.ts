// This configuration file keeps all UI constants and settings
// Specific to the minter dapp use case, these aren't important when you want to build something custom
// Added in one place for convenience

// Your Dapp hostname example: https://www.mydapp.com it should come from env vars
export const dappHostname = process.env.NEXT_PUBLIC_DAPP_HOST;

// HTML metata and og tags, default values for MetaHead.tsx component
export const defaultMetaTags = {
  title: 'Green Garden - Phuket Cannabis Shop ร้าน ขาย กัญชา.',
  description:
    "Welcome to GreenGarden Dispensary, Phuket's premier destination for high-quality marijuana, weed, and ganja. Our dispensary offers a wide variety of locally-sourced and organic products, including flower, edibles, and accessories. Our experienced staff is always on hand to help you find the perfect product and answer any questions. Visit us today and discover the best selection of cannabis products in Phuket.",
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
    name: 'Grand Daddy Purple - 1G',
    price: '350',
    pageLink: '/grand-daddy-purple',
  },
];
export const preroll = [
  {
    name: 'Grand Daddy Purple Pure - 1G',
    price: '400',
    pageLink: '/grand-daddy-purple',
  },
];
export const bakery = [
  {
    name: 'Brownie - 30G',
    price: '250',
    pageLink: '/space-cake-brownie',
  },
];
