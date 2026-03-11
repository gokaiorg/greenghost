import type { Metadata } from "next";
import { Product } from "@/lib/types";
import { sanitizeSchema, getCanonicalUrl } from "@/lib/utils/seo";

export function generateProductSchema(product: Product) {
  // Only use the first image (cover) to avoid 404s in metadata
  const coverImage = product.images?.[0]
    ? `https://green.gd${product.images[0]}`
    : "https://green.gd/images/logo-green-ghost-degen-weed-shop.png";

  return sanitizeSchema({
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": getCanonicalUrl(`${product.type.toLowerCase()}/${product.id}`),
    name: product.name,
    description:
      product.description ||
      `Browse ${product.name} - ${product.type} from Green Ghost weed shop in Bangkok, Thailand`,
    image: [coverImage],
    brand: {
      "@type": "Brand",
      name: "Green Ghost",
      logo: "https://green.gd/images/logo.png",
    },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "THB",
      priceValidUntil: new Date(
        new Date().setFullYear(new Date().getFullYear() + 1),
      )
        .toISOString()
        .split("T")[0],
      itemCondition: "https://schema.org/NewCondition",
      availability:
        product.status === "In stock"
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
      url: getCanonicalUrl(`${product.type.toLowerCase()}/${product.id}`),
      seller: {
        "@type": "Organization",
        name: "Green Ghost",
        url: "https://green.gd",
      },
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "THC",
        value: `${product.thc}%`,
      },
      {
        "@type": "PropertyValue",
        name: "CBD",
        value: `${product.cbd || 0}%`,
      },
      {
        "@type": "PropertyValue",
        name: "Type",
        value: product.type,
      },
    ],
  });
}

export function generateProductMetadata(product: Product): Metadata {
  const pageTitle = getPageTitle(product);
  const description =
    product.seo ||
    product.description ||
    `Browse ${product.name} - ${product.type} from Green Ghost weed shop in Bangkok, Thailand`;
  const url = getCanonicalUrl(`${product.type.toLowerCase()}/${product.id}`);

  // Only use the first image (cover) to avoid 404s in metadata
  const coverImage = product.images?.[0]
    ? `https://green.gd${product.images[0]}`
    : "https://green.gd/images/logo-green-ghost-degen-weed-shop.png";

  return {
    title: pageTitle,
    description,
    metadataBase: new URL("https://green.gd"),
    openGraph: {
      title: pageTitle,
      description,
      type: "website",
      images: [coverImage],
      url,
      siteName: "Green Ghost",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [coverImage],
    },
    verification: {
      google:
        process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
        "dOuCZqslG5Lkw8i3jVwoGcedgH6-nIGGQ71qYu",
    },
    alternates: {
      canonical: url,
      languages: {
        en: url,
        fr: url.replace("https://green.gd", "https://green.gd/fr"),
      },
    },
  };
}

function getPageTitle(product: Product): string {
  const baseTitle = `Order ${product.name} - ${product.type} | Green Ghost`;

  switch (product.type) {
    case "Strains":
      return `Order ${product.name} Cannabis Strain Online - Green Ghost 🌿👻`;
    case "Gadgets":
      return `Buy ${product.name} Cannabis Gadgets Online - Green Ghost`;
    case "Edibles":
      return `Order Online Best ${product.name} Cannabis Edible - Green Ghost`;
    case "Concentrates":
      return `Order online ${product.name} Cannabis Concentrate - Green Ghost`;
    default:
      return baseTitle;
  }
}
