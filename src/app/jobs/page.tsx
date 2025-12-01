import { Metadata } from 'next';
import { getBannerData } from '@/lib/utils/bannerUtils';
import { getPagesServerSide as getPages } from '@/lib/pages-server';
import Banner from '@/components/Banner';

export const metadata: Metadata = {
  title: 'Budtender Job Opening at Our Cannabis Shop - Green Ghost 🌿👻',
  description: 'Passionate about cannabis? Green Ghost 🌿👻 is hiring a Budtender! Join our team, share your expertise, and deliver exceptional service to our community. Apply now!',
  openGraph: {
    title: 'Budtender Job Opening at Our Cannabis Shop - Green Ghost 🌿👻',
    description: 'Passionate about cannabis? Green Ghost 🌿👻 is hiring a Budtender! Join our team, share your expertise, and deliver exceptional service to our community. Apply now!',
    type: 'website',
    locale: 'en_US',
    url: '/jobs',
    siteName: 'Green Ghost',
    images: [
      {
        url: '/images/banners/green-ghost-best-degen-weed-shop-jobs.avif',
        width: 1920,
        height: 1080,
        alt: 'Green Ghost Budtender Job Opening',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Budtender Job Opening at Our Cannabis Shop - Green Ghost 🌿👻',
    description: 'Passionate about cannabis? Green Ghost 🌿👻 is hiring a Budtender! Join our team, share your expertise, and deliver exceptional service to our community. Apply now!',
    images: ['/images/banners/green-ghost-best-degen-weed-shop-jobs.avif'],
  },
  alternates: {
    canonical: '/jobs',
  },
};

export default async function JobsPage() {
  const allPages = await getPages();
  const jobsPage = allPages.find(page => page.slug === 'jobs');

  const bannerData = await getBannerData('jobs', {
    iconSrc: "/images/icons/jobs-green-ghost.avif",
    iconAlt: jobsPage?.title || "Jobs",
    description: jobsPage?.subtitle || 'Join our team at Green Ghost',
    bgSrc: jobsPage?.image || "/banners/green-ghost-best-degen-weed-shop-jobs.avif"
  });

  return (
    <>
      <Banner {...bannerData} />

      <div className="container mx-auto px-4 bg-black text-white">
        {/* Original description from the page */}
        {jobsPage?.description && (
          <div
            className="text-xs md:text-sm lg:text-base text-gray-200 text-center w-full mb-4 md:mb-8"
            dangerouslySetInnerHTML={{ __html: jobsPage.description }}
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

        <div className="text-center my-6">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScnR4_SsE1DAn-HGk5oYhxfThlaKXFOdmWZDBi1BJrdVLcmFg/viewform?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#13DE00] hover:text-[#13DE00]/80 underline font-bold transition-colors"
          >
            Apply Now
          </a>
        </div>

        <div
          className="text-xs md:text-sm lg:text-base text-gray-200 text-center w-full mb-4 md:mb-8">
          {"Ready to embark on this exciting journey with us? We\’d love to hear about your passion for cannabis and why you\’re excited to join Green Ghost. Let’s grow together!"}
        </div>

      </div>
    </>
  );
}
