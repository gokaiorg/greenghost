import { Metadata } from 'next';
import { Suspense } from 'react';

import { getPageBySlugServer as getPageBySlug, getPagesServerSide as getPages } from '@/lib/pages-server';
import { getBannerData } from '@/lib/utils/bannerUtils';
import { getCBDProducts } from '@/lib/cbd-data';
import Banner from '@/components/Banner';
import CBDList from '@/components/CBDList';

export const metadata: Metadata = {
  title: 'CBD France Premium Cannabis Shop Menu - Green Ghost 🌿👻',
  description: 'Explore Green Ghost CBD France, your premier online shop for premium CBD flowers, oils, concentrates, and gummies. Lab-tested, THC < 0.3%, with fast, discreet delivery. For orders in France only. Join the degen vibe!',
  openGraph: {
    title: 'CBD France Premium Cannabis Shop Menu - Green Ghost 🌿👻',
    description: 'Explore Green Ghost CBD France, your premier online shop for premium CBD flowers, oils, concentrates, and gummies. Lab-tested, THC < 0.3%, with fast, discreet delivery. For orders in France only. Join the degen vibe!',
    type: 'website',
    locale: 'en_US',
    url: '/cbd-france',
    siteName: 'Green Ghost',
    images: [
      {
        url: '/images/banners/green-ghost-best-degen-weed-shop-cbd-france.avif',
        width: 1920,
        height: 1080,
        alt: 'Green Ghost Best CBD in France',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CBD France Premium Cannabis Shop Menu - Green Ghost 🌿👻',
    description: 'Explore Green Ghost CBD France, your premier online shop for premium CBD flowers, oils, concentrates, and gummies. Lab-tested, THC < 0.3%, with fast, discreet delivery. For orders in France only. Join the degen vibe!',
    images: ['/images/banners/green-ghost-best-degen-weed-shop-cbd-france.avif'],
  },
};

// Server component that fetches data
async function CBDFranceContent() {
  const [page, allPages, products] = await Promise.all([
    getPageBySlug('cbd-france'),
    getPages(),
    getCBDProducts()
  ]);

  const CBDFrancePage = allPages.find(p => p.slug === 'cbd-france');

  const bannerData = await getBannerData('cbd-france', {
    description: CBDFrancePage?.subtitle || 'Join our exclusive cannabis community',
    bgSrc: CBDFrancePage?.image || "/banners/green-ghost-best-degen-weed-shop-cbd-france.avif"
  });

  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Page not found</p>
      </div>
    );
  }

  return (
    <>
      <Banner {...bannerData} />
      <div className="container mx-auto px-4 bg-black text-white">
        {/* Original description from the page */}
        {page.description && (
          <div
            className="text-xs md:text-sm lg:text-base text-gray-200 text-center w-full mb-4 md:mb-8"
            dangerouslySetInnerHTML={{ __html: page.description }}
          />
        )}

        {/* Section title and description from pages.csv */}
        {bannerData.sectionTitle && bannerData.sectionTitle.trim() !== '' && (
          <h2 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-8 text-[#13DE00]">
            {bannerData.sectionTitle}
          </h2>
        )}

        {bannerData.sectionDescription && bannerData.sectionDescription.trim() !== '' && (
          <div
            className="text-xs md:text-sm lg:text-base text-gray-200 text-center w-full mb-4 md:mb-8"
            dangerouslySetInnerHTML={{ __html: bannerData.sectionDescription }}
          />
        )}
      </div>

      {/* CBD Product List */}
      <CBDList products={products} />
    </>
  );
}

// Client component wrapper with loading state
function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
      <div className="w-12 h-12 bg-[#13DE00] animate-pulse"></div>
    </div>
  );
}

export default function CBDFrancePage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <CBDFranceContent />
    </Suspense>
  );
}
