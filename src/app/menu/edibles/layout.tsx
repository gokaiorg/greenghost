import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Weed Shop Premium Cannabis Edibles Menu - Green Ghost 🌿👻',
  description: 'Explore Green Ghost\'s Edibles Menu, featuring a curated selection of organic, locally sourced cannabis-infused treats like brownies, gummies, and artisanal cookies.',
  keywords: ['cannabis edibles', 'gummies', 'brownies', 'cannabis treats', 'edibles menu', 'cannabis shop Thailand'],
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
    canonical: '/menu/edibles',
  },
  openGraph: {
    title: 'Weed Shop Premium Cannabis Edibles Menu - Green Ghost 🌿👻',
    description: 'Explore Green Ghost\'s Edibles Menu, featuring a curated selection of organic, locally sourced cannabis-infused treats like brownies, gummies, and artisanal cookies.',
    url: '/menu/edibles',
    siteName: 'Green Ghost',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/images/banners/green-ghost-best-degen-weed-menu-edibles.avif',
        width: 1920,
        height: 1080,
        alt: 'Green Ghost Premium Cannabis Edibles',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@greenghostdegen',
    creator: '@greenghostdegen',
    title: 'Weed Shop Premium Cannabis Edibles Menu - Green Ghost 🌿👻',
    description: 'Explore Green Ghost\'s Edibles Menu, featuring a curated selection of organic, locally sourced cannabis-infused treats like brownies, gummies, and artisanal cookies.',
    images: ['/images/banners/green-ghost-best-degen-weed-menu-edibles.avif'],
  },
};

export default function EdiblesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
