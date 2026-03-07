import { LocationData } from "@/lib/bigquery-types";
import { sanitizeSchema } from "@/lib/utils/seo";
import { parseHoursString } from "@/lib/utils/hours";

export function generateLocalBusinessSchema(location: LocationData) {
  // Parse hours from string if valid
  const hoursObj = parseHoursString(location.hours);

  // Convert hours to the required format
  const openingHoursSpecification = Object.entries(hoursObj)
    .map(([day, timeRange]) => {
      let openTime = "";
      let closeTime = "";

      const hours = timeRange;
      // Handle "09:00 - 02:00" format
      if (typeof hours === "string" && hours.includes("-")) {
        const [open, close] = hours.split("-").map(t => t.trim());
        openTime = open || "";
        closeTime = close || "";
      } else if (hours && typeof hours === 'string' && hours.toLowerCase() !== 'closed') {
        // Fallback if just one time present or different format, try to parse
        openTime = hours; // potentially unsafe but better than crash
      }

      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: day.charAt(0).toUpperCase() + day.slice(1),
        opens: openTime || "",
        closes: closeTime || "",
      };
    })
    .filter((day) => day.opens && day.closes);

  const defaultImage = `/images/banners/green-ghost-best-degen-weed-shop-delivery-${location.slug}-01.avif`;

  return sanitizeSchema({
    "@context": "https://schema.org",
    "@type": "CannabisStore",
    "@id": `https://green.gd/locations/${location.slug}`,
    name: location.name,
    image: `https://green.gd${defaultImage}`,
    description: location.description_long,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address.split(",")[0],
      addressLocality:
        location.address.split(",").slice(-3, -2)[0]?.trim() ||
        location.address.split(",")[1]?.trim() ||
        "",
      addressRegion:
        location.region ||
        (location.address.includes("Paris") ? "Paris" : "Phuket"),
      addressCountry:
        location.country || (location.address.includes("Paris") ? "FR" : "TH"),
      postalCode: location.address.split(",").pop()?.trim() || "",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.latitude,
      longitude: location.longitude,
    },
    hasMap: location.map_embed_link,
    openingHoursSpecification,
    telephone: location.phone,
    url: `https://green.gd/locations/${location.slug}`,
    priceRange: "$$",
    paymentAccepted: ["Cash", "Credit Card", "QR Code"],
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Wheelchair Accessible",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Air Conditioning",
        value: true,
      },
      { "@type": "LocationFeatureSpecification", name: "Parking", value: true },
      {
        "@type": "LocationFeatureSpecification",
        name: "Delivery",
        value: true,
      },
    ],
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: location.latitude,
        longitude: location.longitude,
      },
      geoRadius: "10000",
    },
    sameAs: [
      "https://x.com/greenghostdegen",
      "https://www.facebook.com/greenghostdegenCBD",
      "https://www.instagram.com/greenghost_degen/",
      "https://www.youtube.com/@greenghostdegen",
      "https://www.tiktok.com/@greenghostdegen",
      "https://opensea.io/collection/greenghostdegen",
    ],
  });
}

export function generateProductSchema(product: Record<string, unknown>) {
  return sanitizeSchema({
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `https://green.gd/menu/${product.slug}`,
    name: product.name,
    image: (product.images as string[])?.map(
      (img: string) => `https://green.gd${img}`,
    ),
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "Green Ghost",
      logo: "https://green.gd/images/logo-green-ghost-degen-weed-shop.png",
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
      availability: product.available
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      url: `https://green.gd/menu/${product.slug}`,
      seller: {
        "@type": "Organization",
        name: "Green Ghost",
        url: "https://green.gd",
      },
    },
    aggregateRating: product.rating
      ? {
        "@type": "AggregateRating",
        ratingValue: product.rating,
        reviewCount: product.reviewCount || 1,
        bestRating: 5,
        worstRating: 1,
      }
      : undefined,
  });
}

export function generateFAQSchema(location: LocationData) {
  const today = new Date()
    .toLocaleDateString("en-US", { weekday: "long", timeZone: "Asia/Bangkok" })
    .toLowerCase(); // as keyof typeof location.hours is not valid anymore

  const hoursObj = parseHoursString(location.hours);
  // @ts-expect-error: accessing via formatted date key might not match strict Hours type keys
  const todayHours = hoursObj[today];

  const openStatusText =
    todayHours &&
      todayHours.toLowerCase() !== "closed" &&
      todayHours.toLowerCase() !== "close"
      ? `Yes, we are open today from ${todayHours}.`
      : "We are currently closed today.";

  const region =
    location.region ||
    location.address.split(",").slice(-2)[0]?.trim() ||
    "Phuket";
  const deliveryText = `Yes, we offer fast and discreet delivery services in ${region} and surrounding areas.`;

  return sanitizeSchema({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Is ${location.name} open today?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: openStatusText,
        },
      },
      {
        "@type": "Question",
        name: "Do you offer delivery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: deliveryText,
        },
      },
      {
        "@type": "Question",
        name: `Where is ${location.name} located?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `We are located at ${location.address}. You can find us easily on Google Maps.`,
        },
      },
    ],
  });
}
