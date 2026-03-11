import { MetadataRoute } from "next";
import { getAllLocations } from "@/lib/bigquery";
import { getProducts } from "@/lib/products";
import { getNFTsData } from "@/lib/bigquery";
import { i18n } from "@/i18n-config";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://green.gd";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    "",
    "/garden",
    "/menu",
    "/strains",
    "/delivery",
    "/wholesale",
    "/payment",
    "/locations",
    "/cannabis-club",
    "/nft",
    "/about",
    "/contact",
    "/jobs",
    "/weed",
    "/cbd-france",
    "/growers",
    "/seeds",
    "/best-weed-shops-thailand",
    "/legal-laws",
  ];

  const menuCategories = [
    "buds",
    "pre-rolls",
    "edibles",
    "concentrates",
    "gadgets",
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Helper to add entries for all locales
  const addEntries = (
    path: string,
    changeFrequency:
      | "always"
      | "hourly"
      | "daily"
      | "weekly"
      | "monthly"
      | "yearly"
      | "never",
    priority: number,
  ) => {
    i18n.locales.forEach((locale) => {
      const url =
        locale === i18n.defaultLocale
          ? `${baseUrl}${path}`
          : `${baseUrl}/${locale}${path}`;
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency,
        priority,
      });
    });
  };

  // Static pages
  routes.forEach((route) => {
    // Determine priority and frequency based on your original logic
    let priority = 0.5;
    let changeFrequency: "weekly" | "monthly" | "daily" = "monthly";

    if (route === "") {
      priority = 1;
      changeFrequency = "daily";
    } else if (
      ["/garden", "/menu", "/locations", "/cbd-france"].includes(route)
    ) {
      priority = 0.9;
      changeFrequency = "weekly";
    } else if (["/strains", "/delivery", "/wholesale"].includes(route)) {
      priority = 0.8;
    } else if (
      [
        "/payment",
        "/cannabis-club",
        "/best-weed-shops-thailand",
        "/legal-laws",
      ].includes(route)
    ) {
      priority = 0.7;
    } else if (
      ["/nft", "/jobs", "/weed", "/growers", "/seeds"].includes(route)
    ) {
      priority = 0.6;
    }

    addEntries(route, changeFrequency, priority);
  });

  // Menu subpages
  menuCategories.forEach((category) => {
    addEntries(`/menu/${category}`, "weekly", 0.8);
  });

  try {
    // Execute all heavy BigQuery fetches concurrently
    const [locations, allProducts, nfts] = await Promise.all([
      getAllLocations().catch((err: unknown) => {
        console.error("Failed to fetch locations for sitemap:", err);
        return [];
      }),
      getProducts().catch((err: unknown) => {
        console.error("Failed to fetch products for sitemap:", err);
        return [];
      }),
      getNFTsData().catch((err: unknown) => {
        console.error("Failed to fetch NFTs for sitemap:", err);
        return [];
      }),
    ]);

    // Dynamic location pages
    locations.forEach((location) => {
      addEntries(`/locations/${location.slug}`, "weekly", 0.8);
    });

    // Strains
    const strains = allProducts.filter((p) => p.type === "Strains");
    strains.forEach((strain) => {
      addEntries(`/strains/${strain.id}`, "weekly", 0.7);
    });

    // Edibles
    const edibles = allProducts.filter((p) => p.type === "Edibles");
    edibles.forEach((edible) => {
      addEntries(`/edibles/${edible.id}`, "weekly", 0.7);
    });

    // Concentrates
    const concentrates = allProducts.filter((p) => p.type === "Concentrates");
    concentrates.forEach((concentrate) => {
      addEntries(`/concentrates/${concentrate.id}`, "weekly", 0.7);
    });

    // Gadgets
    const gadgets = allProducts.filter((p) => p.type === "Gadgets");
    gadgets.forEach((gadget) => {
      addEntries(`/gadgets/${gadget.id}`, "weekly", 0.7);
    });

    // NFTs
    nfts.forEach((nft) => {
      addEntries(`/nft/${nft.slug}`, "monthly", 0.6);
    });
  } catch (error: unknown) {
    console.error("Critical error generating dynamic sitemap routes:", error);
    // Graceful degradation: we still return the static routes and menus arrays populated above.
  }

  return sitemapEntries;
}
