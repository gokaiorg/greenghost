import { Metadata } from 'next';
import Banner from '@/components/Banner';
import { getBannerData } from '@/lib/utils/bannerUtils';
import { getPagesServerSide as getPages } from '@/lib/pages-server';

export const metadata: Metadata = {
  title: 'Your Weed Guide to Cannabis Excellence - Green Ghost 🌿👻',
  description: 'Explore the world of cannabis with Green Ghost, your weed source for premium strains, educational resources, and crypto community connection. Discover the art and science of cannabis here.',
  openGraph: {
    title: 'Your Weed Guide to Cannabis Excellence - Green Ghost 🌿👻',
    description: 'Explore the world of cannabis with Green Ghost, your weed source for premium strains, educational resources, and crypto community connection. Discover the art and science of cannabis here.',
    type: 'website',
    locale: 'en_US',
    url: '/weed',
    siteName: 'Green Ghost',
    images: [
      {
        url: '/images/banners/green-ghost-best-degen-weed-shop-weed.avif',
        width: 1920,
        height: 1080,
        alt: 'Green Ghost Cannabis Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Weed Guide to Cannabis Excellence - Green Ghost 🌿👻',
    description: 'Explore the world of cannabis with Green Ghost, your weed source for premium strains, educational resources, and crypto community connection. Discover the art and science of cannabis here.',
    images: ['/images/banners/green-ghost-best-degen-weed-shop-weed.avif'],
  },
};

export default async function WeedPage() {
  const allPages = await getPages();
  const weedPage = allPages.find(page => page.slug === 'weed');

  const bannerData = await getBannerData('weed', {
    iconSrc: "/images/icons/weed-green-ghost.avif",
    iconAlt: weedPage?.title || "Weed",
    description: weedPage?.subtitle || 'The Green Journey Begins',
    bgSrc: weedPage?.image || "/banners/green-ghost-best-degen-weed-shop-weed.avif"
  });

  return (
    <>
      <Banner {...bannerData} />

      <div className="container mx-auto px-4 bg-black text-white">
        {/* Original description from the page */}
        {weedPage?.description && (
          <div
            className="text-xs md:text-sm lg:text-base text-gray-200 text-center w-full mb-4 md:mb-8"
            dangerouslySetInnerHTML={{ __html: weedPage.description }}
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
    </>
  );
}
