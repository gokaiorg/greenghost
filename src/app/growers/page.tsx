import { getBannerData } from '@/lib/utils/bannerUtils';
import { getPagesServerSide as getPages } from '@/lib/pages-server';
import Banner from '@/components/Banner';
import GrowersList from '@/components/GrowersList';
import WeedNavigation from '@/components/WeedNavigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Premium Cannabis Growers in Thailand - Green Ghost 🌿👻',
  description: 'Discover the finest cannabis growers in Thailand. Green Ghost partners with top-quality cultivators to bring you premium, hand-picked strains from trusted local growers.',
  openGraph: {
    title: 'Premium Cannabis Growers in Thailand - Green Ghost 🌿👻',
    description: 'Discover the finest cannabis growers in Thailand. Green Ghost partners with top-quality cultivators to bring you premium, hand-picked strains from trusted local growers.',
    url: '/growers',
    siteName: 'Green Ghost',
    images: [
      {
        url: '/images/banners/green-ghost-best-degen-weed-shop-growers.avif',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Cannabis Growers in Thailand - Green Ghost 🌿👻',
    description: 'Discover the finest cannabis growers in Thailand. Green Ghost partners with top-quality cultivators to bring you premium, hand-picked strains from trusted local growers.',
    images: ['/images/banners/green-ghost-best-degen-weed-shop-growers.avif'],
  },
  alternates: {
    canonical: '/growers',
  },
};


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
          <div className="text-xs md:text-sm lg:text-base text-gray-200 text-center w-full mb-4 md:mb-8 whitespace-pre-wrap">
            {weedGrowerPage.description}
          </div>
        )}
        {weedGrowerPage?.section_title && (
          <h2 className="text-2xl font-bold mt-8 mb-4">
            {weedGrowerPage.section_title}
          </h2>
        )}
        {weedGrowerPage?.section_description && (
          <div className="text-base text-gray-200 text-center whitespace-pre-wrap">
            {weedGrowerPage.section_description}
          </div>
        )}
        <GrowersList />
        <WeedNavigation />
      </div>
    </>
  );
}
