/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');
const withOptimizedImages = require('next-optimized-images');

const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      buffer: require.resolve('buffer'),
      crypto: require.resolve('crypto-browserify'),
      path: require.resolve('path-browserify'),
      stream: require.resolve('stream-browserify'),
      process: require.resolve('process/browser'),
    };
    return config;
  },
  reactStrictMode: true,
  async rewrites() {
    if (!process.env.MULTIVERSX_PRIVATE_API) {
      return [];
    }
    return [
      {
        source: `${process.env.NEXT_PUBLIC_MULTIVERSX_API}/:path*`,
        destination: `${process.env.MULTIVERSX_CUSTOM_API}/:path*`,
        destination: `${process.env.MULTIVERSX_PRIVATE_API}/:path*`,
      },
    ];
  },
  eslint: {
    dirs: ['components', 'config', 'hooks', 'pages', 'store', 'types', 'utils'],
  },
  images: {
    domains: [
      'nftstorage.link',
      'media.multiversx.com',
      'devnet-media.multiversx.com',
      'testnet-media.multiversx.com',
      'media.elrond.com',
      'devnet-media.elrond.com',
      'testnet-media.elrond.com',
    ],
  },
  experimental: {
    scrollRestoration: true,
    esmExternals: false,
  },
  async redirects() {
    return [
      {
        source: '/weed-shop-degen/pure-kief',
        destination: '/concentrates/pure-kief',
        permanent: true,
      },
      {
        source: '/weed-shop-degen/super-dry-hash',
        destination: '/concentrates/super-dry-hash',
        permanent: true,
      },
      {
        source: '/weed-shop-degen/dry-sift-hash',
        destination: '/concentrates/dry-sift-hash',
        permanent: true,
      },
      {
        source: '/weed-shop-degen/pollen-hash',
        destination: '/concentrates/pollen-hash',
        permanent: true,
      },
      {
        source: '/weed-shop-degen/bubble-hash',
        destination: '/concentrates/bubble-hash',
        permanent: true,
      },
      {
        source: '/concentrates',
        destination: '/menu/concentrates',
        permanent: true,
      },
      {
        source: '/weed-shop-degen',
        destination: '/menu/concentrates',
        permanent: true,
      },
      {
        source: '/pre-rolls',
        destination: '/menu/pre-rolls',
        permanent: true,
      },
      {
        source: '/weed-shop-pre-rolls',
        destination: '/menu/pre-rolls',
        permanent: true,
      },
      {
        source: '/edibles',
        destination: '/menu/edibles',
        permanent: true,
      },
      {
        source: '/weed-shop-edibles',
        destination: '/menu/edibles',
        permanent: true,
      },
      {
        source: '/weed-shop-edibles/thc-honey-stick',
        destination: '/edibles/thc-honey-stick',
        permanent: true,
      },
      {
        source: '/weed-shop-edibles/cbd-honey-stick',
        destination: '/edibles/cbd-honey-stick',
        permanent: true,
      },
      {
        source: '/weed-shop-edibles/thc-cookies',
        destination: '/edibles/thc-cookies',
        permanent: true,
      },
      {
        source: '/weed-shop-edibles/thc-cookie',
        destination: '/edibles/thc-cookie',
        permanent: true,
      },
      {
        source: '/weed-shop-edibles/thc-stroopwafel',
        destination: '/edibles/thc-stroopwafel',
        permanent: true,
      },
      {
        source: '/weed-shop-edibles/thc-gummies',
        destination: '/edibles/thc-gummies',
        permanent: true,
      },
      {
        source: '/weed-shop-edibles/thc-nano-gummies',
        destination: '/edibles/thc-nano-gummies',
        permanent: true,
      },
      {
        source: '/weed-shop-edibles/thc-pretzels',
        destination: '/edibles/thc-pretzels',
        permanent: true,
      },
      {
        source: '/weed-shop-edibles/thc-brownie',
        destination: '/edibles/thc-brownie',
        permanent: true,
      },
      {
        source: '/weed-shop-edibles/thc-muffin',
        destination: '/edibles/thc-muffin',
        permanent: true,
      },
      {
        source: '/weed-shop-edibles/thc-brownies',
        destination: '/edibles/thc-brownies',
        permanent: true,
      },
      {
        source: '/gadgets',
        destination: '/menu/gadgets',
        permanent: true,
      },
      {
        source: '/weed-shop-gadgets',
        destination: '/menu/gadgets',
        permanent: true,
      },
      {
        source: '/weed-shop-gadgets/metal-grinder-50mm-2-layer',
        destination: '/gadgets/metal-grinder-50mm-2-layer',
        permanent: true,
      },
      {
        source: '/weed-shop-gadgets/classic-ice-bong',
        destination: '/gadgets/classic-ice-bong',
        permanent: true,
      },
      {
        source: '/weed-shop-gadgets/clipper-lighter',
        destination: '/gadgets/clipper-lighter',
        permanent: true,
      },
      {
        source: '/weed-shop-gadgets/wood-grinder-68mm-2-layer',
        destination: '/gadgets/wood-grinder-68mm-2-layer',
        permanent: true,
      },
      {
        source: '/weed-shop-gadgets/wizman-rolling-papers',
        destination: '/gadgets/wizman-rolling-papers',
        permanent: true,
      },
      {
        source: '/weed-shop-gadgets/slimjim-rolling-papers',
        destination: '/gadgets/slimjim-rolling-papers',
        permanent: true,
      },
      {
        source: '/weed-shop-gadgets/slimjim-rolling-papers-tips',
        destination: '/gadgets/slimjim-rolling-papers-tips',
        permanent: true,
      },
      {
        source: '/weed-shop-gadgets/weed-th-rolling-papers-tips',
        destination: '/gadgets/weed-th-rolling-papers-tips',
        permanent: true,
      },
      {
        source: '/best-degen-weed-shop',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/best-degen-weed-shop/karon',
        destination: '/locations/karon',
        permanent: true,
      },
      {
        source: '/best-degen-weed-shop/rawai',
        destination: '/locations/rawai',
        permanent: true,
      },
      {
        source: '/best-degen-weed-shop/phuket',
        destination: '/locations/phuket',
        permanent: true,
      },
      {
        source: '/weed-shops-thailand',
        destination: '/best-weed-shops-thailand',
        permanent: true,
      },
      {
        source: '/weed-shop-near-me',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/contact-green-ghost',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/about-green-ghost',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/weed-shop/chem-dog',
        destination: '/weed-shop/chemdawg',
        permanent: true,
      },
      {
        source: '/weed-shop-member',
        destination: '/cannabis-club',
        permanent: true,
      },
      {
        source: '/contact-us-buy-weed-online',
        destination: '/contact-green-ghost',
        permanent: true,
      },
      {
        source: '/buddy-bud-weed',
        destination: '/weed-grower/cosmic-temple-vibes',
        permanent: true,
      },
      {
        source: '/ohigho',
        destination: '/weed-grower/ohigho',
        permanent: true,
      },
      {
        source: '/my-weed-solutions',
        destination: '/weed-grower/my-weed',
        permanent: true,
      },
      {
        source: '/cosmic-temple-vibes',
        destination: '/weed-grower/cosmic-temple-vibes',
        permanent: true,
      },
      {
        source: '/cannabis-grower-phuket',
        destination: '/weed-grower',
        permanent: true,
      },
      {
        source: '/cannabis-shop-phuket',
        destination: '/weed-shops-thailand',
        permanent: true,
      },
      {
        source: '/kings-juice',
        destination: '/weed-shop/kings-juice',
        permanent: true,
      },
      {
        source: '/eleven-roses',
        destination: '/weed-shop/eleven-roses',
        permanent: true,
      },
      {
        source: '/bruce-banner',
        destination: '/weed-shop/bruce-banner',
        permanent: true,
      },
      {
        source: '/cherry-garcia',
        destination: '/weed-shop/cherry-garcia',
        permanent: true,
      },
      {
        source: '/white-widow',
        destination: '/weed-shop/white-widow',
        permanent: true,
      },
      {
        source: '/tangerine-dream',
        destination: '/weed-shop/tangerine-dream',
        permanent: true,
      },
      {
        source: '/critical-kush',
        destination: '/weed-shop/critical-kush',
        permanent: true,
      },
      {
        source: '/royal-moby',
        destination: '/weed-shop/royal-moby',
        permanent: true,
      },
      {
        source: '/mac-and-jack',
        destination: '/weed-shop/mac-and-jack',
        permanent: true,
      },
      {
        source: '/c-vibez',
        destination: '/weed-shop/c-vibez',
        permanent: true,
      },
      {
        source: '/super-lemon-haze',
        destination: '/weed-shop/super-lemon-haze',
        permanent: true,
      },
      {
        source: '/mandarin-zkittlez',
        destination: '/weed-shop/mandarin-zkittlez',
        permanent: true,
      },
      {
        source: '/fruit-spirit',
        destination: '/weed-shop/fruit-spirit',
        permanent: true,
      },
      {
        source: '/amnesia-haze',
        destination: '/weed-shop/amnesia-haze',
        permanent: true,
      },
      {
        source: '/amnesia-haze-01',
        destination: '/weed-shop/amnesia-haze-01',
        permanent: true,
      },
      {
        source: '/platinum-oreoz',
        destination: '/weed-shop/platinum-oreoz',
        permanent: true,
      },
      {
        source: '/dosidos',
        destination: '/weed-shop/dosidos',
        permanent: true,
      },
      {
        source: '/sherbert',
        destination: '/weed-shop/sherbert',
        permanent: true,
      },
      {
        source: '/skunk',
        destination: '/weed-shop/skunk',
        permanent: true,
      },
      {
        source: '/jack-herer',
        destination: '/weed-shop/jack-herer',
        permanent: true,
      },
      {
        source: '/stardawg',
        destination: '/weed-shop/stardawg',
        permanent: true,
      },
      {
        source: '/amnesia',
        destination: '/weed-shop/amnesia',
        permanent: true,
      },
      {
        source: '/sweet-zkittlez',
        destination: '/weed-shop/sweet-zkittlez',
        permanent: true,
      },
      {
        source: '/gelato-runtz',
        destination: '/weed-shop/gelato-runtz',
        permanent: true,
      },
      {
        source: '/sorbet-4',
        destination: '/weed-shop/sorbet-4',
        permanent: true,
      },
      {
        source: '/buddy-critical',
        destination: '/weed-shop/buddy-critical',
        permanent: true,
      },
      {
        source: '/bubble-mango',
        destination: '/weed-shop/bubble-mango',
        permanent: true,
      },
      {
        source: '/mango-gelato',
        destination: '/weed-shop/mango-gelato',
        permanent: true,
      },
      {
        source: '/purple-zkittlez',
        destination: '/weed-shop/purple-zkittlez',
        permanent: true,
      },
      {
        source: '/bubble-zkittlez',
        destination: '/weed-shop/bubble-zkittlez',
        permanent: true,
      },
      {
        source: '/lemon-zz',
        destination: '/weed-shop/lemon-zkittlez',
        permanent: true,
      },
      {
        source: '/mac-1',
        destination: '/weed-shop/mac-1',
        permanent: true,
      },
      {
        source: '/og-poison',
        destination: '/weed-shop/og-poison',
        permanent: true,
      },
      {
        source: '/runtz',
        destination: '/weed-shop/runtz',
        permanent: true,
      },
      {
        source: '/green-gelato',
        destination: '/weed-shop/green-gelato',
        permanent: true,
      },
      {
        source: '/gelato-dream',
        destination: '/weed-shop/gelato-dream',
        permanent: true,
      },
      {
        source: '/white-runtz',
        destination: '/weed-shop/white-runtz',
        permanent: true,
      },
      {
        source: '/banana-kush',
        destination: '/weed-shop/banana-kush',
        permanent: true,
      },
      {
        source: '/chem-dog',
        destination: '/weed-shop/chem-dog',
        permanent: true,
      },
      {
        source: '/moon-fruit',
        destination: '/weed-shop/moon-fruit',
        permanent: true,
      },
      {
        source: '/banana-daddy',
        destination: '/weed-shop/banana-daddy',
        permanent: true,
      },
      {
        source: '/orange-velvet',
        destination: '/weed-shop/orange-velvet',
        permanent: true,
      },
      {
        source: '/platinum-punch',
        destination: '/weed-shop/platinum-punch',
        permanent: true,
      },
      {
        source: '/lemon-berry-candy',
        destination: '/weed-shop/lemon-berry-candy',
        permanent: true,
      },
      {
        source: '/mandarin-cookies',
        destination: '/weed-shop/mandarin-cookies',
        permanent: true,
      },
      {
        source: '/mimosa',
        destination: '/weed-shop/mimosa',
        permanent: true,
      },
      {
        source: '/black-cherry-punch',
        destination: '/weed-shop/black-cherry-punch',
        permanent: true,
      },
      {
        source: '/snoop-punch',
        destination: '/weed-shop/snoop-punch',
        permanent: true,
      },
    ];
  },
};
module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    publicExcludes: ['!robots.txt', '!sitemap.xml', '!sitemap-0.xml'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self'; font-src 'self' 'https://fonts.googleapis.com'; script-src 'self'",
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(); battery=(self);',
          },
        ],
      },
    ];
  },
});
module.exports = withOptimizedImages({
  // your Next.js config options here
});
module.exports = nextConfig;
