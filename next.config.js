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
  reactStrictMode: false, // will be handled in following releases, when enabled there are problems in development
  async rewrites() {
    return [
      {
        source: `${process.env.NEXT_PUBLIC_ELROND_API}/:path*`,
        destination: `${process.env.ELROND_CUSTOM_API}/:path*`,
      },
    ];
  },
  eslint: {
    dirs: ['components', 'config', 'hooks', 'pages', 'store', 'types', 'utils'],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    domains: [
      'nftstorage.link',
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
