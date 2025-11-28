import { getBannerData } from '@/lib/utils/bannerUtils';
import { getPagesServerSide as getPages } from '@/lib/pages-server';
import Banner from '@/components/Banner';

export default async function WeedGrowerPage() {
  const allPages = await getPages();
  const weedGrowerPage = allPages.find(page => page.slug === 'growers');

  const bannerData = await getBannerData('growers', {
    iconSrc: "/images/icons/growers-green-ghost.avif",
    iconAlt: weedGrowerPage?.title || "Growers",
    description: weedGrowerPage?.subtitle || 'Premium cannabis growing in Thailand',
    bgSrc: weedGrowerPage?.image || "/banners/green-ghost-best-degen-weed-shop-growers.avif"
  });

  return (
    <>
      <Banner {...bannerData} />

      <div className="container mx-auto px-4 bg-black text-white">
        {weedGrowerPage?.description && (
          <div
            className="text-xs md:text-sm lg:text-base text-gray-200 text-center w-full mb-4 md:mb-8"
            dangerouslySetInnerHTML={{ __html: weedGrowerPage.description }}
          />
        )}
        {weedGrowerPage?.section_title && (
          <h2 className="text-2xl font-bold mt-8 mb-4">
            {weedGrowerPage.section_title}
          </h2>
        )}
        {weedGrowerPage?.section_description && (
          <div
            className="text-base text-gray-200 text-center"
            dangerouslySetInnerHTML={{ __html: weedGrowerPage.section_description }}
          />
        )}
      </div>
    </>
  );
}
