import { Metadata } from "next";
import { getPagesData } from "@/lib/firestore";
import { selectLocalizedField } from "@/lib/i18n-helpers";

interface PagesMetadataProps {
  pageName: string;
  locale?: string;
  path?: string;
  keywords?: string | string[];
}

export async function PagesMetadata({
  pageName,
  locale = "en",
  path,
}: PagesMetadataProps): Promise<Metadata> {
  const bqData = await getPagesData(pageName);

  /* 
     CORRECTION:
     - We use `title_en` for EVERYTHING (Asset Slug and URL Slug) as per user request.
     - Localized titles are only used for meta tags (title, description).
  */
  const title_en = bqData?.title_en || "";

  // 1. Asset Slug: Always based on English title
  const assetSlug = title_en.toLowerCase().replace(/\s+/g, "-");

  // 2. URL Slugs: Always based on English title
  const rawSlugEn = title_en.toLowerCase().replace(/\s+/g, "-");
  const slugEn = rawSlugEn === "green-ghost" ? "" : rawSlugEn;

  // 3. Current Page Slug
  // 3. Current Page Slug
  // If path is provided (e.g. /menu/pre-rolls), base the canonical URLs on that path instead of the BigQuery English title slug
  const basePath = path ? path : `/${slugEn}`;

  // Clean up basePath: ensures it starts with slash, and if it's just "/" we handle it gracefully
  const cleanPath = basePath.startsWith("/") ? basePath : `/${basePath}`;

  // 4. Base URL
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://green.gd";

  // Construct language-specific paths
  const enUrl = cleanPath === "/" ? baseUrl : `${baseUrl}${cleanPath}`;
  const frUrl =
    cleanPath === "/" ? `${baseUrl}/fr` : `${baseUrl}/fr${cleanPath}`;

  const meta_title = selectLocalizedField<string>(
    bqData as unknown as Record<string, unknown>,
    "meta_title",
    locale,
  );
  const meta_description = selectLocalizedField<string>(
    bqData as unknown as Record<string, unknown>,
    "meta_description",
    locale,
  );
  const title = selectLocalizedField<string>(
    bqData as unknown as Record<string, unknown>,
    "title",
    locale,
  );
  const subtitle = selectLocalizedField<string>(
    bqData as unknown as Record<string, unknown>,
    "subtitle",
    locale,
  );
  const SITE_NAME = "Green Ghost 🌿👻";

  return {
    title: meta_title,
    description: meta_description,
    keywords: `${title}, Cannabis Dispensary, Weed Shop, Cannabis Store, Buy Weed, Weed Delivery`,
    alternates: {
      canonical: enUrl,
      languages: {
        en: enUrl,
        fr: frUrl,
      },
    },
    openGraph: {
      title: meta_title,
      description: meta_description,
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      url: enUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: `${baseUrl}/images/banners/green-ghost-best-degen-weed-shop-${assetSlug}.avif`,
          width: 1920,
          height: 1080,
          alt: subtitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@greenghostdegen",
      creator: "@greenghostdegen",
      title: meta_title,
      description: meta_description,
      images: [
        `${baseUrl}/images/banners/green-ghost-best-degen-weed-shop-${assetSlug}.avif`,
      ],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
      },
    },
    icons: {
      icon: [
        { url: "/images/favicon.ico", sizes: "any" },
        { url: "/images/logo48.png", type: "image/png", sizes: "48x48" },
      ],
      apple: [
        { url: "/images/logo512.png", sizes: "512x512", type: "image/png" },
      ],
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
    other: {
      "msapplication-TileColor": "#13DE00",
      "apple-mobile-web-app-title": SITE_NAME,
      "application-name": SITE_NAME,
    },
  };
}
