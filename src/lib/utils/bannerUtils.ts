import { getPagesServerSide as getPages } from '../pages-server';

export interface BannerData {
  title: string;
  description: string;
  iconSrc: string;
  bgSrc: string;
  iconAlt?: string;
  sectionTitle?: string;
  sectionDescription?: string;
}

export async function getBannerData(pageSlug: string, defaultData: Partial<BannerData> = {}): Promise<BannerData> {
  const allPages = await getPages();
  const pageData = allPages.find(page => page.slug === pageSlug);

  // Default values for banner using existing file paths
  const defaults: BannerData = {
    title: pageSlug.charAt(0).toUpperCase() + pageSlug.slice(1).replace(/-/g, ' '),
    description: '',
    iconSrc: `/images/icons/${pageSlug}-green-ghost.avif`,
    bgSrc: `/images/banners/green-ghost-degen-weed-shop-${pageSlug}.avif`,
    iconAlt: `${pageSlug} icon`,
  };

  // Ensure image paths are correct
  const bannerImage = pageData?.image
    ? (pageData.image.startsWith('/') ? pageData.image : `/${pageData.image}`)
    : defaults.bgSrc;

  // Remove any duplicate /images prefixes
  const cleanImagePath = (path: string) =>
    path.replace(/^\/images\/images\//, '/images/');

  // Merge with page data and provided defaults
  const bannerData = {
    ...defaults,
    ...(pageData ? {
      title: pageData.title || defaults.title,
      description: pageData.subtitle || pageData.description || defaults.description,
      bgSrc: cleanImagePath(bannerImage),
      sectionTitle: pageData.section_title || '',
      sectionDescription: pageData.section_description || ''
    } : {}),
    ...defaultData, // Allow overriding any values
  };

  return bannerData;
}

// Get all pages that should have banners
export async function getAllBannerPages() {
  const allPages = await getPages();
  return allPages
    .filter(page => page.title) // Only include pages with a title
    .map(page => ({
      slug: page.slug,
      title: page.title,
      path: `/${page.slug === 'home' ? '' : page.slug}`,
    }));
}
