import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Weed Shop Premium Cannabis Concentrates Menu - Green Ghost 🌿👻',
  description: 'Discover Green Ghost\'s Concentrates Menu, offering premium cannabis extracts like hash, wax, kiev and oil. Elevate your experience with our potent, curated selection.',
  keywords: ['cannabis concentrates', 'hash', 'wax', 'cannabis oil', 'extracts', 'concentrates menu', 'cannabis shop Thailand'],
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
    canonical: '/menu/concentrates',
  },
  openGraph: {
    title: 'Weed Shop Premium Cannabis Concentrates Menu - Green Ghost 🌿👻',
    description: 'Discover Green Ghost\'s Concentrates Menu, offering premium cannabis extracts like hash, wax, kiev and oil. Elevate your experience with our potent, curated selection.',
    url: '/menu/concentrates',
    siteName: 'Green Ghost',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/images/banners/green-ghost-best-degen-weed-menu-concentrates.avif',
        width: 1920,
        height: 1080,
        alt: 'Green Ghost Premium Cannabis Concentrates',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@greenghostdegen',
    creator: '@greenghostdegen',
    title: 'Weed Shop Premium Cannabis Concentrates Menu - Green Ghost 🌿👻',
    description: 'Discover Green Ghost\'s Concentrates Menu, offering premium cannabis extracts like hash, wax, kiev and oil. Elevate your experience with our potent, curated selection.',
    images: ['/images/banners/green-ghost-best-degen-weed-menu-concentrates.avif'],
  },
};

export default function ConcentratesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
