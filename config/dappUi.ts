// This configuration file keeps all UI constants and settings
// Specific to the minter dapp use case, these aren't important when you want to build something custom
// Added in one place for convenience

// Your Dapp hostname example: https://www.mydapp.com it should come from env vars
export const dappHostname = process.env.NEXT_PUBLIC_DAPP_HOST;

// HTML metata and og tags, default values for MetaHead.tsx component
export const defaultMetaTags = {
  title: 'Green Garden - Phuket Cannabis Shop ร้าน ขาย กัญชา.',
  description:
    'The top marijuana from Thailand is chosen for you by our experts. Find out about our Sativa, Indica, pre-rolled joints, and the amazing universe of Green Garden.',
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
  {
    name: 'Grand Daddy Purple MIXED - 0.25G',
    price: '150',
    pageLink: '/grand-daddy-purple',
  },
];
