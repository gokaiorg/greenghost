import { getBannerData } from '@/lib/utils/bannerUtils';
import { getPagesServerSide as getPages } from '@/lib/pages-server';
import Banner from '@/components/Banner';

export default async function SeedsPage() {
  const allPages = await getPages();
  const seedsPage = allPages.find(page => page.slug === 'seeds');

  const bannerData = await getBannerData('seeds', {
    iconSrc: "/images/icons/seeds-green-ghost.avif",
    iconAlt: seedsPage?.title || "Seeds",
    description: seedsPage?.subtitle || 'Premium cannabis seeds collection',
    bgSrc: seedsPage?.image || "/banners/green-ghost-best-degen-weed-shop-seeds.avif"
  });

  return (
    <>
      <Banner {...bannerData} />

      <div className="container mx-auto px-4 bg-black text-white">
        {seedsPage?.description && (
          <div
            className="text-xs md:text-sm lg:text-base text-gray-200 text-center w-full mb-4 md:mb-8"
            dangerouslySetInnerHTML={{ __html: seedsPage.description }}
          />
        )}
        {seedsPage?.section_title && (
          <h2 className="text-2xl font-bold mt-8 mb-4">
            {seedsPage.section_title}
          </h2>
        )}
        {seedsPage?.section_description && (
          <div
            className="text-base text-gray-200 text-center"
            dangerouslySetInnerHTML={{ __html: seedsPage.section_description }}
          />
        )}
      </div>
    </>
  );
}
