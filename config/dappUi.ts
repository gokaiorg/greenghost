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
  shortname: 'Green Garden Dispensary',
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
    dominance: 'Indica Dominant',
    indica: '70',
    sativa: '30',
    THC: '22',
    CBD: 'undefined',
    effects: 'Sleepy, Hungry, Tingly',
    image:
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-og-poison-cover.webp',
    imageName: 'Green Garden Dispensary - Cannabis Shop Phuket - Bud OG Poison',
  },
  {
    name: 'Runtz',
    price: '250',
    pageLink: '/runtz',
    dominance: 'Hybrid',
    indica: '50',
    sativa: '50',
    THC: '19/29',
    CBD: 'undefined',
    effects: 'Talkative, Happy, Giggly',
    image:
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-runtz-cover.webp',
    imageName: 'Green Garden Dispensary - Cannabis Shop Phuket - Bud Runtz',
  },
  {
    name: 'Green Gelato',
    price: '300',
    pageLink: '/green-gelato',
    dominance: 'Indica Dominant',
    indica: '55',
    sativa: '45',
    THC: '17/25',
    CBD: 'undefined',
    effects: 'Euphoric, Aroused, Happy',
    image:
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-green-gelato-cover.webp',
    imageName:
      'Green Garden Dispensary - Cannabis Shop Phuket - Bud Green Gelato',
  },
  {
    name: 'Gelato Dream',
    price: '350',
    pageLink: '/gelato-dream',
    dominance: 'Sativa Dominant',
    indica: '30',
    sativa: '70',
    THC: '20/30',
    CBD: 'undefined',
    effects: 'Euphoric, Focused, Happy',
    image:
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-gelato-dream-cover.webp',
    imageName:
      'Green Garden Dispensary - Cannabis Shop Phuket - Bud Gelato Dream',
  },
  {
    name: 'White Runtz',
    price: '350',
    pageLink: '/white-runtz',
    dominance: 'Hybrid',
    indica: '50',
    sativa: '50',
    THC: '23/24',
    CBD: 'undefined',
    effects: 'Tingly, Relaxed, Euphoric',
    image:
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-white-runtz-cover.webp',
    imageName:
      'Green Garden Dispensary - Cannabis Shop Phuket - Bud White Runtz',
  },
  {
    name: 'Banana Kush',
    price: '400',
    pageLink: '/banana-kush',
    dominance: 'Indica Dominant',
    indica: '60',
    sativa: '40',
    THC: '18/25',
    CBD: 'undefined',
    effects: 'Talkative, Sleeppy, Giggly',
    image:
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-banana-kush-cover.webp',
    imageName:
      'Green Garden Dispensary - Cannabis Shop Phuket - Bud Banana Kush',
  },
  {
    name: 'Jack Herer',
    price: '450',
    pageLink: '/jack-herer',
    dominance: 'Sativa Dominant',
    indica: '20',
    sativa: '80',
    THC: '19/29',
    CBD: 'undefined',
    effects: 'Energetic, Creative, Uplifted',
    image:
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-jack-herer-cover.webp',
    imageName:
      'Green Garden Dispensary - Cannabis Shop Phuket - Bud Jack Herer',
  },
  {
    name: 'Chem Dog',
    price: '600',
    pageLink: '/chem-dog',
    dominance: 'Indica Dominant',
    indica: '55',
    sativa: '45',
    THC: '15/20',
    CBD: 'undefined',
    effects: 'Euphoric, Uplifted, Creative',
    image:
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-chem-dog-cover.webp',
    imageName: 'Green Garden Dispensary - Cannabis Shop Phuket - Bud Chem Dog',
  },
  {
    name: 'Moon Fruit',
    price: '600',
    pageLink: '/moon-fruit',
    dominance: 'Hybrid',
    indica: '50',
    sativa: '50',
    THC: '20/22',
    CBD: 'undefined',
    effects: 'Relaxed, Happy, Talkative',
    image:
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-moon-fruit-cover.webp',
    imageName:
      'Green Garden Dispensary - Cannabis Shop Phuket - Bud Moon Fruit',
  },
  {
    name: 'Banana Daddy',
    price: '650',
    pageLink: '/banana-daddy',
    dominance: 'Hybrid',
    indica: '50',
    sativa: '50',
    THC: '21/30',
    CBD: '1/3',
    effects: 'Happy, Talktative, Relaxed',
    image:
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-banana-daddy-cover.webp',
    imageName:
      'Green Garden Dispensary - Cannabis Shop Phuket - Bud Banana Daddy',
  },
  {
    name: 'Orange Velvet',
    price: '700',
    pageLink: '/orange-velvet',
    dominance: 'Hybrid',
    indica: '50',
    sativa: '50',
    THC: '18/22',
    CBD: 'undefined',
    effects: 'Aroused, Uplifted, Energetic',
    image:
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-orange-velvet-cover.webp',
    imageName:
      'Green Garden Dispensary - Cannabis Shop Phuket - Bud Orange Velvet',
  },
  {
    name: 'Platinum Punch',
    price: '750',
    pageLink: '/platinum-punch',
    dominance: 'Sativa Dominant',
    indica: '30',
    sativa: '70',
    THC: '15/25',
    CBD: 'undefined',
    effects: 'Focus, Giggly, Relaxed',
    image:
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-platinum-punch-cover.webp',
    imageName:
      'Green Garden Dispensary - Cannabis Shop Phuket - Bud Platinum Punch',
  },
  {
    name: 'Lemon Berry Candy',
    price: '800',
    pageLink: '/lemon-berry-candy',
    dominance: 'Hybrid',
    indica: '50',
    sativa: '50',
    THC: '25',
    CBD: '3',
    effects: 'Creative, Energetic, Talkative',
    image:
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-lemon-berry-candy-cover.webp',
    imageName:
      'Green Garden Dispensary - Cannabis Shop Phuket - Bud Lemon Berry Candy',
  },
  {
    name: 'Mandarin Cookies',
    price: '800',
    pageLink: '/mandarin-cookies',
    dominance: 'Hybrid',
    indica: '50',
    sativa: '50',
    THC: '19',
    CBD: 'undefined',
    effects: 'Relaxed, Uplifted, Happy',
    image:
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-mandarin-cookies-cover.webp',
    imageName:
      'Green Garden Dispensary - Cannabis Shop Phuket - Bud Mandarin Cookies',
  },
  {
    name: 'Mimosa',
    price: '850',
    pageLink: '/mimosa',
    dominance: 'Hybrid',
    indica: '50',
    sativa: '50',
    THC: '20',
    CBD: '1',
    effects: 'Energetic, Focused, Uplifted',
    image:
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-mimosa-cover.webp',
    imageName: 'Green Garden Dispensary - Cannabis Shop Phuket - Bud Mimosa',
  },
  {
    name: 'Black Cherry Punch',
    price: '900',
    pageLink: '/black-cherry-punch',
    dominance: 'Indica Dominant',
    indica: '80',
    sativa: '20',
    THC: '20',
    CBD: 'undefined',
    effects: 'Sleepy, Tingly, Happy',
    image:
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-black-cherry-punch-cover.webp',
    imageName:
      'Green Garden Dispensary - Cannabis Shop Phuket - Bud Black Cherry Punch',
  },
  {
    name: 'Snoop Punch',
    price: '900',
    pageLink: '/snoop-punch',
    dominance: 'Hybrid',
    indica: '50',
    sativa: '50',
    THC: '28',
    CBD: 'undefined',
    effects: 'Relaxed, Sleepy, Hungry',
    image:
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-snoop-punch-cover.webp',
    imageName:
      'Green Garden Dispensary - Cannabis Shop Phuket - Bud Snoop Punch',
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
