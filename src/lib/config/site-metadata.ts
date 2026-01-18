export const SITE_NAME = "Green Ghost 🌿👻";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://green.gd";

type MetadataProps = {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  pathname?: string;
  type?: "website" | "article";
  publishedTime?: string;
};

/**
 * Generates complete metadata for any page
 * @param props - Metadata properties
 * @returns Complete metadata object
 */
export function generateMetadata({
  title = SITE_NAME,
  description = "Premium cannabis products in Thailand. Fast, discreet delivery.",
  keywords = [
    "Green Ghost",
    "Cannabis Dispensary",
    "Weed Shop",
    "Cannabis Store",
    "Buy Weed",
    "Weed Delivery",
  ],
  image,
  pathname = "/",
  type = "website",
  publishedTime,
}: MetadataProps = {}) {
  // Generate canonical URL
  const canonicalUrl = `${SITE_URL}${pathname === "/" ? "" : pathname}`;

  // Generate image URL
  const getImageUrl = () => {
    // If explicit image is provided, use it
    if (image) {
      return image.startsWith("http")
        ? image
        : `${SITE_URL}${image.startsWith("/") ? "" : "/"}${image}`;
    }

    // Get the page name from the path
    let pageName = pathname.replace(/^\/+|\/+$/g, "");

    // If it's the root path, use 'home', otherwise use the first path segment
    if (!pageName) {
      pageName = "home";
    } else {
      // Get the first path segment (e.g., 'about' from '/about/team')
      pageName = pageName.split("/")[0];
    }

    // Construct the image path
    const imagePath = `/images/banners/green-ghost-best-degen-weed-shop-${pageName}.avif`;

    // Return full URL
    return `${SITE_URL}${imagePath}`;
  };

  const imageUrl = getImageUrl();
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    keywords,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: imageUrl,
          width: 1920,
          height: 1080,
          alt: fullTitle,
        },
      ],
      type,
      ...(publishedTime && { publishedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
      creator: "@greenghost",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
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

/**
 * Helper function to generate metadata for product pages
 * @param category - The product category (e.g., 'strains', 'concentrates')
 * @param defaultCategory - Fallback category if the provided one is invalid
 */
export function generateProductMetadata(
  category?: string,
  defaultCategory = "products",
) {
  // Use provided category or fall back to default
  const safeCategory = category || defaultCategory;

  // Convert first letter to uppercase, handle empty strings
  const title =
    safeCategory && safeCategory.length > 0
      ? safeCategory.charAt(0).toUpperCase() + safeCategory.slice(1)
      : "Products";

  // Generate the image path
  const imagePath = `/images/banners/green-ghost-best-degen-weed-shop-${safeCategory}.avif`;

  return generateMetadata({
    title,
    description: `Browse our premium selection of ${safeCategory} at Green Ghost. Top quality products with fast delivery.`,
    pathname: `/${safeCategory}`,
    image: imagePath, // Explicitly set the image path
  });
}
