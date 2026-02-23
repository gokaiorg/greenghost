import { BigQuery } from "@google-cloud/bigquery";
import { cache } from "react";
import path from "path";

// 1. On définit les options de base (Projet, Région, et les Scopes Google Drive)
const options: any = {
  projectId: process.env.GOOGLE_PROJECT_ID || 'green-ghost-432101',
  location: 'europe-west9',
  scopes: [
    'https://www.googleapis.com/auth/bigquery',
    'https://www.googleapis.com/auth/drive', // Crucial pour lire vos Google Sheets !
  ],
};

// 2. Logique d'authentification intelligente selon l'environnement
if (process.env.GOOGLE_CLIENT_EMAIL && process.env.GOOGLE_PRIVATE_KEY) {
  // Cas A : On est sur Netlify ou Vercel (Utilisation des variables d'environnement)
  options.credentials = {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  };
} else if (process.env.NODE_ENV === 'development') {
  // Cas B : On est en développement local sur votre Mac
  options.keyFilename = path.join(process.cwd(), 'green-ghost-432101-58ca22dd1b4c.json');
}
// Cas C : On est sur Google Cloud (Cloud Run / Cloud Build).
// On ne fait RIEN. Google va automatiquement utiliser le "Service Account" de la machine.

// 3. Initialisation
export const bigquery = new BigQuery(options);

/* =========================================
   PAGES DATA 
   ========================================= */
export interface PageData {
  // Raw localized fields
  title_en?: string;
  title_fr?: string;
  subtitle_en?: string;
  subtitle_fr?: string;
  description_en?: string;
  description_fr?: string;
  section_title_en?: string;
  section_title_fr?: string;
  section_description_en?: string;
  section_description_fr?: string;
  label_en?: string;
  label_fr?: string;
  meta_title_en?: string;
  meta_title_fr?: string;
  meta_description_en?: string;
  meta_description_fr?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

/* ... existing code ... */

export const getPagesData = cache(
  async (pageTitle: string): Promise<PageData | null> => {
    // Select all columns to get raw data
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
  }
);

/* =========================================
   GARDENS DATA 
   ========================================= */
export interface GardenData {
  date: string;
  description: string;
  image: string;
}

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
      // BigQuery renvoie parfois un objet Date ou un objet { value: string }
      const dateVal = row.garden_date.value || row.garden_date;
      // Gestion robuste si c'est déjà un objet Date JS
      const dateStr = typeof dateVal === 'string' ? dateVal : dateVal.toISOString().split('T')[0];

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

/* =========================================
   REVIEWS DATA 
   ========================================= */
export interface ReviewData {
  user_name: string;
  comment: string;
  review_link: string;
  shop_name: string;
}

export const getReviewsData = cache(async (): Promise<ReviewData[]> => {
  // CORRECTION : On cible la vue staging et les vraies colonnes
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

/* =========================================
   LOCATIONS DATA 
   ========================================= */
export interface LocationData {
  slug: string;
  name: string;
  hours: string;
  phone: string;
  address: string;
  address_link: string;
  review_link: string;
  details_short: string;
  description_long: string;
  seo_description: string;
  map_embed_link: string;
  video_link: string;
  tripadvisor_link: string;
  weed_th_link: string;
  wongnai_link: string;
  highthailand_link: string;
  apple_map_link: string;
  latitude: number;
  longitude: number;
  region: string;
  country: string;
}

// Helper pour mapper les résultats SQL (snake_case) vers l'interface TS
const mapLocationRow = (row: LocationData): LocationData => ({
  slug: row.slug,
  name: row.name,
  hours: row.hours,
  phone: String(row.phone),
  address: row.address,
  // Ici, on utilise les noms propres définis dans stg_locations.sqlx
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
  latitude: row.latitude, // C'est déjà un number grâce au SAFE_CAST dans Dataform
  longitude: row.longitude,
  region: row.region,
  country: row.country,
});

export const getAllLocations = cache(async (): Promise<LocationData[]> => {
  // CORRECTION : On utilise la vue staging et les colonnes snake_case
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
  }
);

/* =========================================
   BEST SHOPS DATA
   ========================================= */
export interface BestShopData {
  name: string;
  link: string;
  location: string;
}

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

/* =========================================
   LAWS DATA
   ========================================= */
export interface LawData {
  title: string;
  description: string;
}

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

/* =========================================
   LAWS FAQ DATA
   ========================================= */
export interface LawFAQData {
  title: string;
  description: string;
}

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

/* =========================================
   GROWERS DATA
   ========================================= */
export interface GrowerData {
  name: string;
  link: string;
}

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

/* =========================================
   SEEDS DATA
   ========================================= */
export interface SeedData {
  name: string;
  link: string;
}

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

/* =========================================
   WHOLESALES DATA
   ========================================= */
export interface WholesaleData {
  strain: string;
  price: string;
  Dominance: string;
  THC: string;
}

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

/* =========================================
   LISTINGS DATA
   ========================================= */
export interface ListingData {
  name: string;
  link: string;
}

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

/* =========================================
   TOPS DATA
   ========================================= */
export interface TopData {
  name: string;
  link: string;
}

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

/* =========================================
   SOCIALS DATA
   ========================================= */
export interface SocialData {
  name: string;
  link: string;
}

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

/* =========================================
   CONTACTS DATA
   ========================================= */
export interface ContactData {
  name: string;
  link: string;
}

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

/* =========================================
   DELIVERY DATA
   ========================================= */
export interface DeliveryData {
  name: string;
  description: string;
  label: string;
  link: string;
  hint: string;
  video: string;
}

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

/* =========================================
   CLUBS DATA
   ========================================= */
export interface ClubData {
  name: string;
  description: string;
  link: string;
}

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

/* =========================================
   PAYMENTS DATA
   ========================================= */
export interface PaymentData {
  name: string;
  description: string;
  subtitle: string;
  link: string;
}

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

/* =========================================
   NFTS DATA
   ========================================= */
export interface NFTData {
  slug: string;
  name: string;
  logo: string;
  description: string;
  opensea: string;
  embellishments: string;
  ghost: string;
  headgear: string;
  joint: string;
  leaves: string;
  shades: string;
  vibe: string;
  vibes: string;
}

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

/* =========================================
   CBDS DATA
   ========================================= */
export interface CBDData {
  item_name: string;
  type: string;
  price: string;
  status: string;
  description: string;
  seo: string;
  cbd: string;
}

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

/* =========================================
   PROMOTES DATA
   ========================================= */
export interface PromoteData {
  title: string;
  description: string;
  link: string;
  link_label: string;
}

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

/* =========================================
   WEEDS DATA
   ========================================= */
export interface WeedData {
  title: string;
  description: string;
  image: string;
}

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

/* =========================================
   PRODUCTS DATA
   ========================================= */
export interface ProductData {
  item_name: string;
  type: string;
  wholesale_price: number;
  price: number;
  rawai_entry: number;
  rawai_stock: number;
  karon_entry: number;
  karon_stock: number;
  status: string;
  description: string;
  seo_description: string;
  dominance: string;
  thc: string;
  cbd: string;
  effects: string;
  relieves: string;
}

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

/* =========================================
   SECTIONS DATA
   ========================================= */
export interface SectionData {
  component: string;
  title_en: string;
  title_fr: string;
  description_en: string;
  description_fr: string;
  link_label_01_en: string;
  link_label_01_fr: string;
  link_url_01_en: string;
  link_url_01_fr: string;
  link_label_02_en: string;
  link_label_02_fr: string;
  link_url_02_en: string;
  link_url_02_fr: string;
  link_label_03_en: string;
  link_label_03_fr: string;
  link_url_03_en: string;
  link_url_03_fr: string;
}

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
