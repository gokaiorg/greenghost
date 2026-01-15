import { getBannerData } from '@/lib/utils/bannerUtils';
import { getPagesServerSide as getPages } from '@/lib/pages-server';
import Banner from '@/components/Banner';
import SeedsList from '@/components/SeedsList';
import WeedNavigation from '@/components/WeedNavigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Premium Cannabis Seeds Partners - Green Ghost 🌿👻',
  description: 'Shop high-quality cannabis seeds from trusted partners at Green Ghost. Find feminized & autoflower varieties with guaranteed germination. Start growing today with Green Ghost 🌿👻',
  openGraph: {
    title: 'Premium Cannabis Seeds Partners - Green Ghost 🌿👻',
    description: 'Shop high-quality cannabis seeds from trusted partners at Green Ghost. Find feminized & autoflower varieties with guaranteed germination. Start growing today with Green Ghost 🌿👻',
    type: 'website',
    locale: 'en_US',
    url: '/seeds',
    siteName: 'Green Ghost',
    images: [
      {
        url: '/images/banners/green-ghost-best-degen-weed-shop-seeds.avif',
        width: 1920,
        height: 1080,
        alt: 'Green Ghost Seeds',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Cannabis Seeds Partners - Green Ghost 🌿👻',
    description: 'Shop high-quality cannabis seeds from trusted partners at Green Ghost. Find feminized & autoflower varieties with guaranteed germination. Start growing today with Green Ghost 🌿👻',
    images: ['/images/banners/green-ghost-best-degen-weed-shop-seeds.avif'],
  },
  alternates: {
    canonical: '/seeds',
  },
};

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
          <div className="text-xs md:text-sm lg:text-base text-gray-200 text-center w-full mb-4 md:mb-8 whitespace-pre-wrap">
            {seedsPage.description}
          </div>
        )}
        {seedsPage?.section_title && (
          <h2 className="text-2xl font-bold mt-8 mb-4">
            {seedsPage.section_title}
          </h2>
        )}
        {seedsPage?.section_description && (
          <div className="text-base text-gray-200 text-center whitespace-pre-wrap">
            {seedsPage.section_description}
          </div>
        )}
        <SeedsList />
        <WeedNavigation />
      </div>
    </>
  );
}
