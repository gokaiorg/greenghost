import { Metadata } from 'next';
import { getBestShops } from '@/lib/organization-data';
import BestShopsList from '@/components/BestShopsList';
import { getPagesServerSide as getPages } from '@/lib/pages-server';
import { getBannerData } from '@/lib/utils/bannerUtils';
import Banner from '@/components/Banner';

export const metadata: Metadata = {
  title: 'Best Weed Shops in Thailand - Green Ghost 🌿👻',
  description: 'Discover the top-rated cannabis dispensaries across Thailand. Handpicked for quality, service, and vibe.',
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
          <div
            className="text-xs md:text-sm lg:text-base text-gray-200 text-center w-full mb-4 md:mb-8"
            dangerouslySetInnerHTML={{ __html: pageData.description }}
          />
        )}

        {pageData?.section_title && (
          <h2 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-8 text-[#13DE00]">
            {pageData.section_title}
          </h2>
        )}

        {pageData?.section_description && (
          <div
            className="text-xs md:text-sm lg:text-base text-gray-200 text-center w-full mb-4 md:mb-8"
            dangerouslySetInnerHTML={{ __html: pageData.section_description }}
          />
        )}

        <BestShopsList shops={shops} />
      </div>
    </div>
  );
}
