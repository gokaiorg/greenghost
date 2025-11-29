import { Metadata } from 'next';
import { getBannerData } from '@/lib/utils/bannerUtils';
import { getPagesServerSide as getPages } from '@/lib/pages-server';
import Banner from '@/components/Banner';
import PromotesList from '@/components/PromotesList';

export const metadata: Metadata = {
  title: 'About Cannabis Culture in Thailand - Green Ghost 🌿👻',
  description: 'Discover Green Ghost, a leading cannabis social club in Phuket, championing local culture, top-quality weed, and a thriving community for enthusiasts.',
  openGraph: {
    title: 'About Cannabis Culture in Thailand - Green Ghost 🌿👻',
    description: 'Discover Green Ghost, a leading cannabis social club in Phuket, championing local culture, top-quality weed, and a thriving community for enthusiasts.',
    type: 'website',
    locale: 'en_US',
    url: '/about',
    siteName: 'Green Ghost',
    images: [
      {
        url: '/images/banners/green-ghost-best-degen-weed-shop-about.avif',
        width: 1920,
        height: 1080,
        alt: 'Green Ghost About Cannabis Culture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Cannabis Culture in Thailand - Green Ghost 🌿👻',
    description: 'Discover Green Ghost, a leading cannabis social club in Phuket, championing local culture, top-quality weed, and a thriving community for enthusiasts.',
    images: ['/images/banners/green-ghost-best-degen-weed-shop-about.avif'],
  },
};

export default async function AboutPage() {
  const allPages = await getPages();
  const aboutPage = allPages.find(page => page.slug === 'about');

  const bannerData = await getBannerData('about', {
    iconSrc: "/images/icons/about-green-ghost.avif",
    iconAlt: aboutPage?.title || "About",
    description: aboutPage?.subtitle || "Nurturing Thailand's Cannabis Culture",
    bgSrc: aboutPage?.image || "/banners/green-ghost-best-degen-weed-shop-about.avif"
  });

  return (
    <>
      <Banner {...bannerData} />
      <div className="container mx-auto px-4 bg-black text-white">
        {/* Original description from the page */}
        {aboutPage?.description && (
          <div
            className="text-xs md:text-sm lg:text-base text-gray-200 text-center w-full mb-4 md:mb-8"
            dangerouslySetInnerHTML={{ __html: aboutPage.description }}
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

        <PromotesList />
      </div>
    </>
  )
}
