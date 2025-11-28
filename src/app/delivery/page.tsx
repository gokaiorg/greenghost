import { Metadata } from 'next';
import { getBannerData } from '@/lib/utils/bannerUtils';
import { getPagesServerSide as getPages } from '@/lib/pages-server';
import { getDeliverySteps } from '@/lib/organization-data';
import Banner from '@/components/Banner';
import DeliveryList from '@/components/DeliveryList';

export const metadata: Metadata = {
  title: 'Best Weed Delivery Service in Phuket Thailand - Green Ghost 🌿👻',
  description: 'Green Ghost offers the best weed delivery in Phuket Thailand, bringing premium cannabis straight to your doorstep with fast, reliable service. Order now for top-quality buds.',
  openGraph: {
    title: 'Best Weed Delivery Service in Phuket Thailand - Green Ghost 🌿👻',
    description: 'Green Ghost offers the best weed delivery in Phuket Thailand, bringing premium cannabis straight to your doorstep with fast, reliable service. Order now for top-quality buds.',
    type: 'website',
    locale: 'en_US',
    url: '/delivery',
    siteName: 'Green Ghost',
    images: [
      {
        url: '/images/banners/green-ghost-best-degen-weed-shop-delivery.avif',
        width: 1920,
        height: 1080,
        alt: 'Green Ghost Weed Delivery Service in Phuket',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Weed Delivery Service in Phuket Thailand - Green Ghost 🌿👻',
    description: 'Green Ghost offers the best weed delivery in Phuket Thailand, bringing premium cannabis straight to your doorstep with fast, reliable service. Order now for top-quality buds.',
    images: ['/images/banners/green-ghost-best-degen-weed-shop-delivery.avif'],
  },
};

export default async function Delivery() {
  const allPages = await getPages();
  const deliveryPage = allPages.find(page => page.slug === 'delivery');
  const deliverySteps = await getDeliverySteps();

  const bannerData = await getBannerData('delivery', {
    iconSrc: "/images/icons/delivery-green-ghost.avif",
    iconAlt: deliveryPage?.title || "Delivery",
    description: deliveryPage?.subtitle || 'Fast & Discreet Cannabis Delivery Across Thailand',
    bgSrc: deliveryPage?.image || "/banners/green-ghost-best-degen-weed-shop-delivery.avif"
  });

  return (
    <>
      <Banner {...bannerData} />
      <div className="container mx-auto px-4 bg-black text-white">
        {/* Original description from the page */}
        {deliveryPage?.description && (
          <div
            className="text-xs md:text-sm lg:text-base text-gray-200 text-center w-full mb-4 md:mb-8"
            dangerouslySetInnerHTML={{ __html: deliveryPage.description }}
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

      {/* Delivery Steps List */}
      <DeliveryList steps={deliverySteps} />
    </>
  );
}
