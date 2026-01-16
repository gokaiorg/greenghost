import { Metadata } from 'next';
import { getBestShops } from '@/lib/organization-data';
import BestShopsList from '@/components/BestShopsList';
import { getPagesServerSide as getPages } from '@/lib/pages-server';
import { getBannerData } from '@/lib/utils/bannerUtils';
import Banner from '@/components/Banner';

export const metadata: Metadata = {
  title: 'The 13 Best Weed Shops in Thailand 2026 - Green Ghost 🌿👻',
  description: 'Discover the top-rated cannabis dispensaries across Thailand 2026. Handpicked for quality, service, and vibe.',
  openGraph: {
    title: 'The 13 Best Weed Shops in Thailand 2026 - Green Ghost 🌿👻',
    description: 'Discover the top-rated cannabis dispensaries across Thailand 2026. Handpicked for quality, service, and vibe.',
    url: '/best-weed-shops-thailand',
    siteName: 'Green Ghost',
    images: [
      {
        url: '/images/banners/best-weed-shops-green-ghost.avif',
        width: 1920,
        height: 1080,
        alt: 'Best Weed Shops in Thailand',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The 13 Best Weed Shops in Thailand 2026 - Green Ghost 🌿👻',
    description: 'Discover the top-rated cannabis dispensaries across Thailand 2026. Handpicked for quality, service, and vibe.',
    images: ['/images/banners/best-weed-shops-green-ghost.avif'],
  },
  alternates: {
    canonical: '/best-weed-shops-thailand',
  },
};

export default async function BestShopsPage() {
  const shops = await getBestShops();
  const allPages = await getPages();
  const pageData = allPages.find(p => p.slug === 'best-weed-shops-thailand');

  const bannerData = await getBannerData('best-weed-shops-thailand', {
    bgSrc: '/banners/best-weed-shops-green-ghost.avif',
  });

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      <Banner {...bannerData} />

      <div className="container mx-auto px-4 bg-black text-white">
        {pageData?.description && (
          <div className="text-xs md:text-sm lg:text-base text-gray-200 text-center w-full mb-4 md:mb-8 whitespace-pre-wrap">
            {pageData.description}
          </div>
        )}

        {pageData?.section_title && (
          <h2 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-8 text-[#13DE00]">
            {pageData.section_title}
          </h2>
        )}

        {pageData?.section_description && (
          <div className="text-xs md:text-sm lg:text-base text-gray-200 text-center w-full mb-4 md:mb-8 whitespace-pre-wrap">
            {pageData.section_description}
          </div>
        )}

        <BestShopsList shops={shops} />
      </div>
    </div>
  );
}
