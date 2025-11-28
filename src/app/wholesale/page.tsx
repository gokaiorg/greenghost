import { Metadata } from 'next';
import Banner from '@/components/Banner';
import { getBannerData } from '@/lib/utils/bannerUtils';
import { getPagesServerSide as getPages } from '@/lib/pages-server';
import WholesaleList from '@/components/WholesaleList';

export const metadata: Metadata = {
  title: 'Wholesale Cannabis Premium Strains in Phuket - Green Ghost 🌿👻',
  description: 'Order premium cannabis wholesale from Green Ghost 🌿👻. Strains start at 50 THB/gram for 100g minimum. Quality and variety for your business in Phuket!',
  openGraph: {
    title: 'Wholesale Cannabis Premium Strains in Phuket - Green Ghost 🌿👻',
    description: 'Order premium cannabis wholesale from Green Ghost 🌿👻. Strains start at 50 THB/gram for 100g minimum. Quality and variety for your business in Phuket!',
    type: 'website',
    locale: 'en_US',
    url: '/wholesale',
    siteName: 'Green Ghost',
    images: [
      {
        url: '/images/banners/green-ghost-best-degen-weed-shop-wholesale.avif',
        width: 1920,
        height: 1080,
        alt: 'Green Ghost Wholesale Cannabis in Phuket',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wholesale Cannabis Premium Strains in Phuket - Green Ghost 🌿👻',
    description: 'Order premium cannabis wholesale from Green Ghost 🌿👻. Strains start at 50 THB/gram for 100g minimum. Quality and variety for your business in Phuket!',
    images: ['/images/banners/green-ghost-best-degen-weed-shop-wholesale.avif'],
  },
};

export default async function WholesalePage() {
  const allPages = await getPages();
  const wholesalePage = allPages.find(page => page.slug === 'wholesale');

  const bannerData = await getBannerData('wholesale', {
    iconSrc: "/images/icons/wholesale-green-ghost.avif",
    iconAlt: wholesalePage?.title || "Wholesale",
    description: wholesalePage?.subtitle || 'Premium Cannabis Wholesale Services',
    bgSrc: wholesalePage?.image || "/banners/green-ghost-best-degen-weed-shop-wholesale.avif"
  });

  return (
    <>
      <Banner {...bannerData} />

      <div className="container mx-auto px-4 bg-black text-white">
        {/* Original description from the page */}
        {wholesalePage?.description && (
          <div
            className="text-xs md:text-sm lg:text-base text-gray-200 text-center w-full mb-4 md:mb-8"
            dangerouslySetInnerHTML={{ __html: wholesalePage.description }}
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

        <WholesaleList />
      </div>
    </>
  );
}
