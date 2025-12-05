import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Weed Shop Premium Cannabis Pre Rolls Menu - Green Ghost 🌿👻',
  description: 'Discover Green Ghost\'s Pre-Roll Menu. Enjoy perfectly rolled joints made from premium cannabis, ready to elevate your smoking experience instantly.',
  keywords: ['pre-rolls', 'cannabis joints', 'rolled joints', 'pre-roll menu', 'cannabis shop Thailand'],
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
    canonical: '/menu/pre-rolls',
  },
  openGraph: {
    title: 'Weed Shop Premium Cannabis Pre Rolls Menu - Green Ghost 🌿👻',
    description: 'Discover Green Ghost\'s Pre-Roll Menu. Enjoy perfectly rolled joints made from premium cannabis, ready to elevate your smoking experience instantly.',
    url: '/menu/pre-rolls',
    siteName: 'Green Ghost',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/images/banners/green-ghost-best-degen-weed-menu-pre-rolls.avif',
        width: 1920,
        height: 1080,
        alt: 'Green Ghost Premium Pre-Rolls',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@greenghostdegen',
    creator: '@greenghostdegen',
    title: 'Weed Shop Premium Cannabis Pre Rolls Menu - Green Ghost 🌿👻',
    description: 'Discover Green Ghost\'s Pre-Roll Menu. Enjoy perfectly rolled joints made from premium cannabis, ready to elevate your smoking experience instantly.',
    images: ['/images/banners/green-ghost-best-degen-weed-menu-pre-rolls.avif'],
  },
};

export default function PreRollsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
