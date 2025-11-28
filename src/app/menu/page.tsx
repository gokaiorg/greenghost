import { Metadata } from 'next';
import Link from 'next/link';
import NextImage from 'next/image';
import { getPagesServerSide as getPages } from '@/lib/pages-server';
import { getBannerData } from '@/lib/utils/bannerUtils';
import Banner from '@/components/Banner';
import { StructuredData, generateMenuPageSchema } from '@/components/StructuredData';
import { getOrganizationData } from '@/lib/organization-data';

export const metadata: Metadata = {
  title: 'Weed & Cannabis Products Menu - Green Ghost 🌿👻',
  description: 'Explore our Thailand cannabis menu: buds, edibles, concentrates, CBD & THC. Buy weed online with Green Ghost.',
  openGraph: {
    title: 'Weed & Cannabis Products Menu - Green Ghost 🌿👻',
    description: 'Explore our Thailand cannabis menu: buds, edibles, concentrates, CBD & THC. Buy weed online with Green Ghost.',
    url: '/menu',
    siteName: 'Green Ghost',
    images: [
      {
        url: 'https://green.gd/images/banners/green-ghost-best-degen-weed-shop-menu.avif',
        width: 1920,
        height: 1080,
        alt: 'Green Ghost Cannabis Products Menu',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weed & Cannabis Products Menu - Green Ghost 🌿👻',
    description: 'Explore our Thailand cannabis menu: buds, edibles, concentrates, CBD & THC. Buy weed online with Green Ghost.',
    images: ['/images/banners/green-ghost-best-degen-weed-shop-menu.avif'],
  },
  alternates: {
    canonical: '/menu',
  },
};


// Define the menu categories with their corresponding slugs and default images
const menuCategories = [
  {
    slug: 'buds',
    defaultImage: '/images/banners/buds-menu-weed-shop-green-ghost.avif',
    defaultDescription: 'Discover top-quality strains and products, expertly curated for your enjoyment and satisfaction.'
  },
  {
    slug: 'pre-rolls',
    defaultImage: '/images/banners/pre-rolls-menu-weed-shop-green-ghost.avif',
    defaultDescription: 'Enjoy perfectly rolled joints made from premium cannabis, ready to elevate your smoking experience instantly.'
  },
  {
    slug: 'concentrates',
    defaultImage: '/images/banners/concentrates-menu-weed-shop-green-ghost.avif',
    defaultDescription: 'Menu offering premium cannabis extracts like hash, wax, kiev and oil. Elevate your experience with our potent, curated selection.'
  },
  {
    slug: 'edibles',
    defaultImage: '/images/banners/edibles-menu-weed-shop-green-ghost.avif',
    defaultDescription: 'A curated selection of organic, locally sourced cannabis-infused treats like brownies, gummies, and artisanal cookies.'
  },
  {
    slug: 'gadgets',
    defaultImage: '/images/banners/gadgets-menu-weed-shop-green-ghost.avif',
    defaultDescription: 'Find premium cannabis gadgets, from high-quality grinders to sleek bongs, and elevate your smoking experience today.'
  },
];

export default async function Menu() {
  // Get all pages first
  const allPages = await getPages();
  const organizationData = await getOrganizationData();

  // Get the menu page data
  const menuPage = allPages.find(page => page.slug === 'menu');

  // Get banner data, using values from pages.csv as fallbacks
  const bannerData = await getBannerData('menu', {
    iconSrc: "/images/icons/menu-green-ghost.avif",
    iconAlt: menuPage?.title || "Menu",
    description: menuPage?.subtitle || 'Explore Our Premium Selection',
    bgSrc: menuPage?.image || "/banners/green-ghost-best-degen-weed-shop-menu.avif"
  });

  // Prepare categories with data from pages.csv or use defaults
  const categories = menuCategories.map(category => {
    const pageData = allPages.find(page => page.slug === category.slug);
    return {
      name: pageData?.title || category.slug.split('-').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' '),
      path: `/menu/${category.slug}`,
      description: pageData?.description || category.defaultDescription,
      image: pageData?.image ? `/images${pageData.image}` : category.defaultImage
    };
  });

  const structuredData = await generateMenuPageSchema(organizationData);

  return (
    <>
      {structuredData.map((data, index) => (
        <StructuredData key={index} data={data} />
      ))}
      <Banner {...bannerData} />
      <div className="container mx-auto px-4 bg-black text-white">
        {menuPage?.description && (
          <p className="text-xs md:text-sm lg:text-base text-gray-200 text-center w-full mb-4 md:mb-8">
            {menuPage.description}
          </p>
        )}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none m-0 p-0" aria-label="Menu categories">
          {categories.map((category) => (
            <li key={category.path}>
              <Link href={category.path} className="group" title={category.name}>
                <div className="relative p-6 aspect-square flex flex-col justify-end text-white overflow-hidden">
                  {category.image && (
                    <NextImage
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  )}
                  {/* <div className="absolute inset-0 bg-black/60 group-hover:bg-black/69 transition-colors duration-300"></div> */}
                  <div className="relative z-10">
                    <h2 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-[#13DE00] transition-colors text-shadow-lg/50">
                      {category.name}
                    </h2>
                    <p className="text-xs md:text-sm xl:text-base text-gray-100 group-hover:text-white transition-colors pb-8 text-shadow-lg/50">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
