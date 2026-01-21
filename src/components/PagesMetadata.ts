import { Metadata } from "next";
import { getPagesData } from "@/lib/bigquery";

interface PagesMetadataProps {
  pageName: string;
  keywords?: string | string[];
}

export async function PagesMetadata({
  pageName,
}: PagesMetadataProps): Promise<Metadata> {
  const bqData = await getPagesData(pageName);
  const meta_title = bqData?.meta_title;
  const meta_description = bqData?.meta_description;
  const pageSlug = (bqData?.title || "").toLowerCase().replace(/\s+/g, "-");
  const subtitle = bqData?.subtitle || "";
  const page_name = bqData?.title || "";
  const SITE_NAME = "Green Ghost 🌿👻";

  return {
    title: meta_title,
    description: meta_description,
    keywords: `${page_name}, Cannabis Dispensary, Weed Shop, Cannabis Store, Buy Weed, Weed Delivery`,
    openGraph: {
      title: meta_title,
      description: meta_description,
      type: "website",
      locale: "en_US",
      url: `/${pageSlug}`,
      siteName: SITE_NAME,
      images: [
        {
          url: `/images/banners/green-ghost-best-degen-weed-shop-${pageSlug}.avif`,
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
        `/images/banners/green-ghost-best-degen-weed-shop-${pageSlug}.avif`,
      ],
    },
    alternates: {
      canonical: `/${pageSlug}`,
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
