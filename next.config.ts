import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  htmlLimitedBots: /.*/,

  images: {
    unoptimized: true, // Disable image optimization to prevent memory errors
    qualities: [25, 50, 75, 100],
  },
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@react-native-async-storage/async-storage": false,
    };
    return config;
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/weed-delivery-phuket",
        destination: "/delivery",
        permanent: true,
      },
      {
        source: "/weed-drive-thru-phuket",
        destination: "/delivery",
        permanent: true,
      },
      {
        source: "/weed-shop",
        destination: "/menu/buds",
        permanent: true,
      },
      {
        source: "/pre-rolls",
        destination: "/menu/pre-rolls",
        permanent: true,
      },
      {
        source: "/weed-shop-pre-rolls",
        destination: "/menu/pre-rolls",
        permanent: true,
      },
      {
        source: "/concentrates",
        destination: "/menu/concentrates",
        permanent: true,
      },
      {
        source: "/weed-shop-degen",
        destination: "/menu/concentrates",
        permanent: true,
      },
      {
        source: "/edibles",
        destination: "/menu/edibles",
        permanent: true,
      },
      {
        source: "/weed-shop-edibles",
        destination: "/menu/edibles",
        permanent: true,
      },
      {
        source: "/gadgets",
        destination: "/menu/gadgets",
        permanent: true,
      },
      {
        source: "/weed-shop-gadgets",
        destination: "/menu/gadgets",
        permanent: true,
      },
      {
        source: "/weed-shop/:path*",
        destination: "/strains/:path*",
        permanent: true,
      },
      {
        source: "/weed-shop-degen/:path*",
        destination: "/concentrates/:path*",
        permanent: true,
      },
      {
        source: "/weed-shop-edibles/:path*",
        destination: "/edibles/:path*",
        permanent: true,
      },
      {
        source: "/weed-shop-gadgets/:path*",
        destination: "/gadgets/:path*",
        permanent: true,
      },
      {
        source: "/best-degen-weed-shop",
        destination: "/locations",
        permanent: true,
      },
      {
        source: "/best-degen-weed-shop/karon",
        destination: "/locations/karon",
        permanent: true,
      },
      {
        source: "/best-degen-weed-shop/rawai",
        destination: "/locations/rawai",
        permanent: true,
      },
      {
        source: "/best-degen-weed-shop/phuket",
        destination: "/locations/phuket",
        permanent: true,
      },
      {
        source: "/weed-shops-thailand",
        destination: "/best-weed-shops-thailand",
        permanent: true,
      },
      {
        source: "/install-xportal-app",
        destination: "/cannabis-club",
        permanent: true,
      },
      {
        source: "/crypto-weed-shop-relax-and-earn",
        destination: "/cannabis-club",
        permanent: true,
      },
      {
        source: "/crypto-weed-shop-partners",
        destination: "/cannabis-club",
        permanent: true,
      },
      {
        source: "/crypto-weed-shop-cashback",
        destination: "/cannabis-club",
        permanent: true,
      },
      {
        source: "/weed-shop-near-me",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/contact-green-ghost",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/about-green-ghost",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/weed-shop-member",
        destination: "/cannabis-club",
        permanent: true,
      },
      {
        source: "/phuket-cannabis-cup",
        destination: "/cannabis-club",
        permanent: true,
      },
      {
        source: "/contact-us-buy-weed-online",
        destination: "/contact-green-ghost",
        permanent: true,
      },
      {
        source: "/buddy-bud-weed",
        destination: "/weed-grower/cosmic-temple-vibes",
        permanent: true,
      },
      {
        source: "/ohigho",
        destination: "/weed-grower/ohigho",
        permanent: true,
      },
      {
        source: "/my-weed-solutions",
        destination: "/weed-grower/my-weed",
        permanent: true,
      },
      {
        source: "/cosmic-temple-vibes",
        destination: "/weed-grower/cosmic-temple-vibes",
        permanent: true,
      },
      {
        source: "/cannabis-shop-phuket",
        destination: "/weed-shops-thailand",
        permanent: true,
      },
      {
        source: "/weed-grower",
        destination: "/growers",
        permanent: true,
      },
      {
        source: "/weed-grower/:path*",
        destination: "/growers",
        permanent: true,
      },
      {
        source: "/gadgets/classic-ice-bong",
        destination: "/gadgets/glass-ice-bong",
        permanent: true,
      },
      {
        source: "/gadgets/weed-th-rolling-papers-tips",
        destination: "/gadgets/weedth-rolling-papers-tips",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
