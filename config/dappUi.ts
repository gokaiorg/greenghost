// This configuration file keeps all UI constants and settings
// Specific to the minter dapp use case, these aren't important when you want to build something custom
// Added in one place for convenience

// Your Dapp hostname example: https://www.mydapp.com it should come from env vars
export const dappHostname = process.env.NEXT_PUBLIC_DAPP_HOST;

// HTML metata and og tags, default values for MetaHead.tsx component
export const defaultMetaTags = {
  title: 'Green Ghost 🌿👻 Best Degen Weed Shop and Delivery in Thailand',
  description:
    'Discover premium cannabis at Green Ghost in Phuket. Explore our organic selection, including flowers, edibles, and accessories, with fast, reliable delivery.',
  shortname: 'Green Ghost 🌿👻',
  image: `${dappHostname}/green-ghost-degen-weed-shop.png`,
};
