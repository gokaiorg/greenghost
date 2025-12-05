import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Weed Shop Premium Cannabis Buds Menu - Green Ghost 🌿👻',
  description: 'Explore Green Ghost\'s premium cannabis buds menu. Discover top-quality strains and products, expertly curated for your enjoyment and satisfaction.',
  keywords: ['cannabis buds', 'weed strains', 'premium cannabis', 'buds menu', 'cannabis shop Thailand'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },

  alternates: {
    canonical: '/menu/buds',
  },
  openGraph: {
    title: 'Weed Shop Premium Cannabis Buds Menu - Green Ghost 🌿👻',
    description: 'Explore Green Ghost\'s premium cannabis buds menu. Discover top-quality strains and products, expertly curated for your enjoyment and satisfaction.',
    url: '/menu/buds',
    siteName: 'Green Ghost',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/images/banners/green-ghost-best-degen-weed-menu-buds.avif',
        width: 1920,
        height: 1080,
        alt: 'Green Ghost Premium Cannabis Buds',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@greenghostdegen',
    creator: '@greenghostdegen',
    title: 'Weed Shop Premium Cannabis Buds Menu - Green Ghost 🌿👻',
    description: 'Explore Green Ghost\'s premium cannabis buds menu. Discover top-quality strains and products, expertly curated for your enjoyment and satisfaction.',
    images: ['/images/banners/green-ghost-best-degen-weed-menu-buds.avif'],
  },
};

export default function BudsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
