import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Weed Shop Premium Cannabis Gadgets Menu - Green Ghost 🌿👻',
  description: 'Explore Green Ghost\'s Accessories Menu. Find premium cannabis gadgets, from high-quality grinders to sleek bongs, and elevate your smoking experience today.',
  keywords: ['cannabis gadgets', 'grinders', 'bongs', 'cannabis accessories', 'smoking accessories', 'gadgets menu', 'cannabis shop Thailand'],
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
    canonical: '/menu/gadgets',
  },
  openGraph: {
    title: 'Weed Shop Premium Cannabis Gadgets Menu - Green Ghost 🌿👻',
    description: 'Explore Green Ghost\'s Accessories Menu. Find premium cannabis gadgets, from high-quality grinders to sleek bongs, and elevate your smoking experience today.',
    url: '/menu/gadgets',
    siteName: 'Green Ghost',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/images/banners/green-ghost-best-degen-weed-menu-gadgets.avif',
        width: 1920,
        height: 1080,
        alt: 'Green Ghost Premium Cannabis Gadgets',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@greenghostdegen',
    creator: '@greenghostdegen',
    title: 'Weed Shop Premium Cannabis Gadgets Menu - Green Ghost 🌿👻',
    description: 'Explore Green Ghost\'s Accessories Menu. Find premium cannabis gadgets, from high-quality grinders to sleek bongs, and elevate your smoking experience today.',
    images: ['/images/banners/green-ghost-best-degen-weed-menu-gadgets.avif'],
  },
};

export default function GadgetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
