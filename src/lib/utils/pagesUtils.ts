import { getPagesServerSide as getPages, PageData } from "../pages-server";

// --- Banner Data Types & Logic ---

export interface PagesBannerData {
  title: string;
  subtitle: string;
  iconSrc: string;
  bgSrc: string;
  iconAlt?: string;
  sectionTitle?: string;
  sectionDescription?: string;
}

export async function getPagesBannerData(
  pageSlug: string,
  defaultData: Partial<PagesBannerData> = {},
  pageData: PageData | null = null,
): Promise<PagesBannerData> {
  const allPages = await getPages();
  const pageDataInternal = allPages.find((page) => page.slug === pageSlug);

  // Default values for banner using existing file paths
  const defaults: PagesBannerData = {
    title:
      pageSlug.charAt(0).toUpperCase() + pageSlug.slice(1).replace(/-/g, " "),
    subtitle: "",
    iconSrc: `/images/icons/${pageSlug}-green-ghost.avif`,
    bgSrc: `green-ghost-degen-weed-shop-${pageSlug}.avif`,
    iconAlt: `${pageSlug} icon`,
  };

  // Ensure image paths are correct
  const bannerImage = pageDataInternal?.image
    ? pageDataInternal.image.startsWith("/")
      ? pageDataInternal.image
      : `/${pageDataInternal.image}`
    : defaults.bgSrc;

  // Remove any duplicate /images prefixes and ensure filename usage for Banner
  const cleanImagePath = (path: string) => {
    // If path starts with /images/banners/, strip it to get just filename
    if (path.startsWith("/images/banners/")) {
      return path.replace("/images/banners/", "");
    }
    // Also handle possible double prefix
    return path.replace(/^\/images\/images\//, "/images/");
  };

  // Merge with page data and provided defaults
  const bannerData = {
    ...defaults,
    ...(pageDataInternal
      ? {
          title: pageDataInternal.title || defaults.title,
          subtitle:
            pageDataInternal.subtitle ||
            pageDataInternal.description ||
            defaults.subtitle,
          bgSrc: cleanImagePath(bannerImage),
          sectionTitle: pageDataInternal.section_title || "",
          sectionDescription: pageDataInternal.section_description || "",
        }
      : {}),
    ...defaultData, // Allow overriding any values
  };

  return bannerData;
}

export async function getAllBannerPages() {
  const allPages = await getPages();
  return allPages
    .filter((page) => page.title) // Only include pages with a title
    .map((page) => ({
      slug: page.slug,
      title: page.title,
      path: `/${page.slug === "home" ? "" : page.slug}`,
    }));
}

// --- Pages Intro Data Types & Logic ---

export interface PagesIntroData {
  label?: string;
  description?: string;
  sectionTitle?: string;
  sectionDescription?: string;
}

export async function getPagesIntroData(
  pageSlug: string,
  overrides: Partial<PagesIntroData> = {},
): Promise<PagesIntroData> {
  const allPages = await getPages();
  const pageData = allPages.find((page) => page.slug === pageSlug);

  // Initial data from static CSV
  const defaults: PagesIntroData = {
    label: pageData ? pageData.label || "" : "",
    description: pageData ? pageData.description || "" : "",
    sectionTitle: pageData ? pageData.section_title || "" : "",
    sectionDescription: pageData ? pageData.section_description || "" : "",
  };

  // Merge: Defaults (CSV) -> Overrides (BigQuery/Manual)
  return {
    label: overrides.label !== undefined ? overrides.label : defaults.label,
    description:
      overrides.description !== undefined
        ? overrides.description
        : defaults.description,
    sectionTitle:
      overrides.sectionTitle !== undefined
        ? overrides.sectionTitle
        : defaults.sectionTitle,
    sectionDescription:
      overrides.sectionDescription !== undefined
        ? overrides.sectionDescription
        : defaults.sectionDescription,
  };
}
