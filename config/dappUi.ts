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
    title: 'Top shelf',
    points: [
      'Mac1 - 350THB',
      'Oreoz - 350THB',
      'Runtz - 350THB',
    ],
  },
  {
    title: 'Thai Farm (Organic 100%)',
    points: [
      'Strawberry Cookie - 400THB',
      'Bubble Kush - 400THB',
      'The Menthol - 400THB',
    ],
  },
  {
    title: 'Exotic',
    points: [
      'Peanut butter cake - 450THB',
      'Sour cream - 450THB',
      'Blue city - 450THB',
    ],
  },
];
