import "server-only";
import { BigQuery } from "@google-cloud/bigquery";
import { cache } from "react";
import path from "path";
import {
  PageData,
  GardenData,
  ReviewData,
  LocationData,
  BestShopData,
  LawData,
  LawFAQData,
  GrowerData,
  SeedData,
  WholesaleData,
  ListingData,
  TopData,
  SocialData,
  ContactData,
  DeliveryData,
  ClubData,
  PaymentData,
  NFTData,
  CBDData,
  PromoteData,
  WeedData,
  ProductData,
  SectionData,
} from "./bigquery-types";

export type {
  PageData,
  GardenData,
  ReviewData,
  LocationData,
  BestShopData,
  LawData,
  LawFAQData,
  GrowerData,
  SeedData,
  WholesaleData,
  ListingData,
  TopData,
  SocialData,
  ContactData,
  DeliveryData,
  ClubData,
  PaymentData,
  NFTData,
  CBDData,
  PromoteData,
  WeedData,
  ProductData,
  SectionData,
};

const options: import("@google-cloud/bigquery").BigQueryOptions = {
  projectId: process.env.GOOGLE_PROJECT_ID || "green-ghost-432101",
  scopes: [
    "https://www.googleapis.com/auth/bigquery",
    "https://www.googleapis.com/auth/drive",
  ],
};

if (process.env.GOOGLE_CLIENT_EMAIL && process.env.GOOGLE_PRIVATE_KEY) {
  options.credentials = {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  };
} else if (process.env.NODE_ENV === "development") {
  options.keyFilename = path.join(
    process.cwd(),
    "green-ghost-432101-58ca22dd1b4c.json",
  );
}

export const bigquery = new BigQuery(options);

// (Interfaces moved to bigquery-types.ts)

export const getPagesData = cache(
  async (pageTitle: string): Promise<PageData | null> => {
    const query = `
      SELECT *
      FROM \`green-ghost-432101.staging.stg_pages\`
      WHERE LOWER(title_en) LIKE LOWER(@pageTitle)
      LIMIT 1
    `;

    try {
      const [rows] = await bigquery.query({
        query,
        params: { pageTitle: `${pageTitle}%` },
      });

      if (rows.length > 0) {
        const row = rows[0];
        return row as PageData;
      }
      return null;
    } catch (error) {
      console.error("BigQuery fetching error (pages):", error);
      return null;
    }
  },
);

// (Interfaces moved to bigquery-types.ts)

export const getGardensData = cache(async (): Promise<GardenData[]> => {
  const query = `
    SELECT
      garden_date,
      description
    FROM \`green-ghost-432101.staging.stg_gardens\`
    ORDER BY garden_date DESC
  `;

  try {
    const [rows] = await bigquery.query({ query });
    const totalRows = rows.length;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return rows.map((row: any, index: number) => {
      const dateVal = row.garden_date.value || row.garden_date;

      const dateStr =
        typeof dateVal === "string"
          ? dateVal
          : dateVal.toISOString().split("T")[0];

      const [year, month, day] = dateStr.split("-");
      const formattedDate = `${day} ${month} ${year}`;

      const imageIndex = (totalRows - index).toString().padStart(2, "0");
      const image = `/images/gardens/green-ghost-garden-phuket-${imageIndex}.avif`;

      return {
        date: formattedDate,
        description: row.description,
        image,
      };
    });
  } catch (error) {
    console.error("BigQuery fetching error (gardens):", error);
    return [];
  }
});

// (Interfaces moved to bigquery-types.ts)

export const getReviewsData = cache(async (): Promise<ReviewData[]> => {
  const query = `
    SELECT
      user_name,
      comment,
      review_link,
      shop_name
    FROM \`green-ghost-432101.staging.stg_reviews\`
    WHERE comment IS NOT NULL
  `;

  try {
    const [rows] = await bigquery.query({ query });
    return rows.map((row: ReviewData) => ({
      user_name: row.user_name,
      comment: row.comment,
      review_link: row.review_link,
      shop_name: row.shop_name,
    }));
  } catch (error) {
    console.error("BigQuery fetching error (reviews):", error);
    return [];
  }
});

// (Interfaces moved to bigquery-types.ts)

const mapLocationRow = (row: LocationData): LocationData => ({
  slug: row.slug,
  name: row.name,
  hours: row.hours,
  phone: String(row.phone),
  address: row.address,

  address_link: row.address_link,
  review_link: row.review_link,
  details_short: row.details_short,
  description_long: row.description_long,
  seo_description: row.seo_description,
  map_embed_link: row.map_embed_link,
  video_link: row.video_link,
  tripadvisor_link: row.tripadvisor_link,
  weed_th_link: row.weed_th_link,
  wongnai_link: row.wongnai_link,
  highthailand_link: row.highthailand_link,
  apple_map_link: row.apple_map_link,
  latitude: row.latitude,
  longitude: row.longitude,
  region: row.region,
  country: row.country,
});

export const getAllLocations = cache(async (): Promise<LocationData[]> => {
  const query = `
    SELECT
      slug,
      name,
      hours,
      phone,
      address,
      address_link,
      review_link,
      details_short,
      description_long,
      seo_description,
      map_embed_link,
      video_link,
      tripadvisor_link,
      weed_th_link,
      wongnai_link,
      highthailand_link,
      apple_map_link,
      latitude,
      longitude,
      region,
      country
    FROM \`green-ghost-432101.staging.stg_locations\`
  `;

  try {
    const [rows] = await bigquery.query({ query });
    return rows.map(mapLocationRow);
  } catch (error) {
    console.error("BigQuery fetching error (all locations):", error);
    return [];
  }
});

export const getLocationBySlug = cache(
  async (slug: string): Promise<LocationData | null> => {
    const query = `
    SELECT
      slug,
      name,
      hours,
      phone,
      address,
      address_link,
      review_link,
      details_short,
      description_long,
      seo_description,
      map_embed_link,
      video_link,
      tripadvisor_link,
      weed_th_link,
      wongnai_link,
      highthailand_link,
      apple_map_link,
      latitude,
      longitude,
      region,
      country
    FROM \`green-ghost-432101.staging.stg_locations\`
    WHERE slug = @slug
    LIMIT 1
  `;

    try {
      const [rows] = await bigquery.query({
        query,
        params: { slug },
      });

      if (rows.length === 0) return null;
      return mapLocationRow(rows[0]);
    } catch (error) {
      console.error(`BigQuery fetching error (location: ${slug}):`, error);
      return null;
    }
  },
);

// (Interfaces moved to bigquery-types.ts)

export const getBestShopsData = cache(async (): Promise<BestShopData[]> => {
  const query = `
    SELECT name, link, location
    FROM \`green-ghost-432101.staging.stg_best_shops_thailand\`
  `;
  try {
    const [rows] = await bigquery.query({ query });
    return rows.map((row: BestShopData) => ({
      name: row.name,
      link: row.link,
      location: row.location,
    }));
  } catch (error) {
    console.error("BigQuery fetching error (best shops):", error);
    return [];
  }
});

// (Interfaces moved to bigquery-types.ts)

export const getLawsData = cache(async (): Promise<LawData[]> => {
  const query = `
    SELECT title, description
    FROM \`green-ghost-432101.staging.stg_laws\`
  `;
  try {
    const [rows] = await bigquery.query({ query });
    return rows.map((row: LawData) => ({
      title: row.title,
      description: row.description,
    }));
  } catch (error) {
    console.error("BigQuery fetching error (laws):", error);
    return [];
  }
});

// (Interfaces moved to bigquery-types.ts)

export const getLawsFAQData = cache(async (): Promise<LawFAQData[]> => {
  const query = `
    SELECT title, description
    FROM \`green-ghost-432101.staging.stg_laws_faq\`
  `;
  try {
    const [rows] = await bigquery.query({ query });
    return rows.map((row: LawFAQData) => ({
      title: row.title,
      description: row.description,
    }));
  } catch (error) {
    console.error("BigQuery fetching error (laws faq):", error);
    return [];
  }
});

// (Interfaces moved to bigquery-types.ts)

export const getGrowersData = cache(async (): Promise<GrowerData[]> => {
  const query = `
    SELECT name, link
    FROM \`green-ghost-432101.staging.stg_growers\`
  `;
  try {
    const [rows] = await bigquery.query({ query });
    return rows.map((row: GrowerData) => ({
      name: row.name,
      link: row.link,
    }));
  } catch (error) {
    console.error("BigQuery fetching error (growers):", error);
    return [];
  }
});

// (Interfaces moved to bigquery-types.ts)

export const getSeedsData = cache(async (): Promise<SeedData[]> => {
  const query = `
    SELECT name, link
    FROM \`green-ghost-432101.staging.stg_seeds\`
  `;
  try {
    const [rows] = await bigquery.query({ query });
    return rows.map((row: SeedData) => ({
      name: row.name,
      link: row.link,
    }));
  } catch (error) {
    console.error("BigQuery fetching error (seeds):", error);
    return [];
  }
});

// (Interfaces moved to bigquery-types.ts)

export const getWholesalesData = cache(async (): Promise<WholesaleData[]> => {
  const query = `
    SELECT strain, price, Dominance, THC
    FROM \`green-ghost-432101.staging.stg_wholesales\`
  `;
  try {
    const [rows] = await bigquery.query({ query });
    return rows.map((row: WholesaleData) => ({
      strain: row.strain,
      price: row.price,
      Dominance: row.Dominance,
      THC: row.THC,
    }));
  } catch (error) {
    console.error("BigQuery fetching error (wholesales):", error);
    return [];
  }
});

// (Interfaces moved to bigquery-types.ts)

export const getListingsData = cache(async (): Promise<ListingData[]> => {
  const query = `
    SELECT name, link
    FROM \`green-ghost-432101.staging.stg_listings\`
  `;
  try {
    const [rows] = await bigquery.query({ query });
    return rows.map((row: ListingData) => ({
      name: row.name,
      link: row.link,
    }));
  } catch (error) {
    console.error("BigQuery fetching error (listings):", error);
    return [];
  }
});

// (Interfaces moved to bigquery-types.ts)

export const getTopsData = cache(async (): Promise<TopData[]> => {
  const query = `
    SELECT name, link
    FROM \`green-ghost-432101.staging.stg_tops\`
  `;
  try {
    const [rows] = await bigquery.query({ query });
    return rows.map((row: TopData) => ({
      name: row.name,
      link: row.link,
    }));
  } catch (error) {
    console.error("BigQuery fetching error (tops):", error);
    return [];
  }
});

// (Interfaces moved to bigquery-types.ts)

export const getSocialsData = cache(async (): Promise<SocialData[]> => {
  const query = `
    SELECT name, link
    FROM \`green-ghost-432101.staging.stg_socials\`
  `;
  try {
    const [rows] = await bigquery.query({ query });
    return rows.map((row: SocialData) => ({
      name: row.name,
      link: row.link,
    }));
  } catch (error) {
    console.error("BigQuery fetching error (socials):", error);
    return [];
  }
});

// (Interfaces moved to bigquery-types.ts)

export const getContactsData = cache(async (): Promise<ContactData[]> => {
  const query = `
    SELECT name, link
    FROM \`green-ghost-432101.staging.stg_contacts\`
  `;
  try {
    const [rows] = await bigquery.query({ query });
    return rows.map((row: ContactData) => ({
      name: row.name,
      link: row.link,
    }));
  } catch (error) {
    console.error("BigQuery fetching error (contacts):", error);
    return [];
  }
});

// (Interfaces moved to bigquery-types.ts)

export const getDeliveryData = cache(async (): Promise<DeliveryData[]> => {
  const query = `
    SELECT name, description, label, link, hint, video
    FROM \`green-ghost-432101.staging.stg_delivery\`
  `;
  try {
    const [rows] = await bigquery.query({ query });
    return rows.map((row: DeliveryData) => ({
      name: row.name,
      description: row.description,
      label: row.label,
      link: row.link,
      hint: row.hint,
      video: row.video,
    }));
  } catch (error) {
    console.error("BigQuery fetching error (delivery):", error);
    return [];
  }
});

// (Interfaces moved to bigquery-types.ts)

export const getClubsData = cache(async (): Promise<ClubData[]> => {
  const query = `
    SELECT name, description, link
    FROM \`green-ghost-432101.staging.stg_clubs\`
  `;
  try {
    const [rows] = await bigquery.query({ query });
    return rows.map((row: ClubData) => ({
      name: row.name,
      description: row.description,
      link: row.link,
    }));
  } catch (error) {
    console.error("BigQuery fetching error (clubs):", error);
    return [];
  }
});

// (Interfaces moved to bigquery-types.ts)

export const getPaymentsData = cache(async (): Promise<PaymentData[]> => {
  const query = `
    SELECT name, description, subtitle, link
    FROM \`green-ghost-432101.staging.stg_payments\`
  `;
  try {
    const [rows] = await bigquery.query({ query });
    return rows.map((row: PaymentData) => ({
      name: row.name,
      description: row.description,
      subtitle: row.subtitle,
      link: row.link,
    }));
  } catch (error) {
    console.error("BigQuery fetching error (payments):", error);
    return [];
  }
});

// (Interfaces moved to bigquery-types.ts)

export const getNFTsData = cache(async (): Promise<NFTData[]> => {
  const query = `
    SELECT slug, name, logo, description, opensea, embellishments, ghost, headgear, joint, leaves, shades, vibe, vibes
    FROM \`green-ghost-432101.staging.stg_nfts\`
  `;
  try {
    const [rows] = await bigquery.query({ query });
    return rows.map((row: NFTData) => ({
      slug: String(row.slug),
      name: row.name,
      logo: row.logo.startsWith("/nft/") ? `/images${row.logo}` : row.logo,
      description: row.description,
      opensea: row.opensea,
      embellishments: row.embellishments,
      ghost: row.ghost,
      headgear: row.headgear,
      joint: row.joint,
      leaves: row.leaves,
      shades: row.shades,
      vibe: row.vibe,
      vibes: row.vibes,
    }));
  } catch (error) {
    console.error("BigQuery fetching error (nfts):", error);
    return [];
  }
});

// (Interfaces moved to bigquery-types.ts)

export const getCBDsData = cache(async (): Promise<CBDData[]> => {
  const query = `
    SELECT item_name, type, price, status, description, seo, cbd
    FROM \`green-ghost-432101.staging.stg_cbds\`
  `;
  try {
    const [rows] = await bigquery.query({ query });
    return rows.map((row: CBDData) => ({
      item_name: row.item_name,
      type: row.type,
      price: row.price,
      status: row.status,
      description: row.description,
      seo: row.seo,
      cbd: row.cbd,
    }));
  } catch (error) {
    console.error("BigQuery fetching error (cbds):", error);
    return [];
  }
});

// (Interfaces moved to bigquery-types.ts)

export const getPromotesData = cache(async (): Promise<PromoteData[]> => {
  const query = `
    SELECT title, description, link, link_label
    FROM \`green-ghost-432101.staging.stg_promotes\`
  `;
  try {
    const [rows] = await bigquery.query({ query });
    return rows.map((row: PromoteData) => ({
      title: row.title,
      description: row.description,
      link: row.link,
      link_label: row.link_label,
    }));
  } catch (error) {
    console.error("BigQuery fetching error (promotes):", error);
    return [];
  }
});

// (Interfaces moved to bigquery-types.ts)

export const getWeedsData = cache(async (): Promise<WeedData[]> => {
  const query = `
    SELECT title, description, image
    FROM \`green-ghost-432101.staging.stg_weeds\`
  `;
  try {
    const [rows] = await bigquery.query({ query });
    return rows.map((row: WeedData) => ({
      title: row.title,
      description: row.description,
      image: row.image,
    }));
  } catch (error) {
    console.error("BigQuery fetching error (weeds):", error);
    return [];
  }
});

// (Interfaces moved to bigquery-types.ts)

export const getProductsData = cache(async (): Promise<ProductData[]> => {
  const query = `
    SELECT
      item_name,
      type,
      wholesale_price,
      price,
      rawai_entry,
      rawai_stock,
      karon_entry,
      karon_stock,
      status,
      description,
      seo_description,
      dominance,
      thc,
      cbd,
      effects,
      relieves
    FROM \`green-ghost-432101.staging.stg_products\`
    ORDER BY item_name ASC
  `;
  try {
    const [rows] = await bigquery.query({ query });
    return rows.map((row: ProductData) => ({
      item_name: row.item_name,
      type: row.type,
      wholesale_price: row.wholesale_price || 0,
      price: row.price || 0,
      rawai_entry: row.rawai_entry || 0,
      rawai_stock: row.rawai_stock || 0,
      karon_entry: row.karon_entry || 0,
      karon_stock: row.karon_stock || 0,
      status: row.status,
      description: row.description,
      seo_description: row.seo_description,
      dominance: row.dominance,
      thc: String(row.thc !== undefined ? row.thc : "0"),
      cbd: String(row.cbd !== undefined ? row.cbd : "0"),
      effects: row.effects,
      relieves: row.relieves,
    }));
  } catch (error) {
    console.error("BigQuery fetching error (products):", error);
    return [];
  }
});

// (Interfaces moved to bigquery-types.ts)

export const getSectionsData = cache(async (): Promise<SectionData[]> => {
  const query = `
    SELECT *
    FROM \`green-ghost-432101.staging.stg_sections\`
  `;

  try {
    const [rows] = await bigquery.query({ query });
    return rows as SectionData[];
  } catch (error) {
    console.error("BigQuery fetching error (sections):", error);
    return [];
  }
});
