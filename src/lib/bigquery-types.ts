export interface PageData {
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

export interface GardenData {
  date: string;
  description: string;
  image: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  garden_date?: any;
}

export interface ReviewData {
  user_name: string;
  comment: string;
  review_link: string;
  shop_name: string;
}

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
  order?: number;
}

export interface BestShopData {
  name: string;
  link: string;
  location: string;
  order?: number;
}

export interface LawData {
  title: string;
  description: string;
}

export interface LawFAQData {
  title: string;
  description: string;
}

export interface GrowerData {
  name: string;
  link: string;
}

export interface SeedData {
  name: string;
  link: string;
}

export interface WholesaleData {
  strain: string;
  price: string;
  Dominance: string;
  THC: string;
}

export interface ListingData {
  name: string;
  link: string;
}

export interface TopData {
  name: string;
  link: string;
}

export interface SocialData {
  name: string;
  link: string;
}

export interface ContactData {
  name: string;
  link: string;
  order?: number;
}

export interface DeliveryData {
  name: string;
  description: string;
  label: string;
  link: string;
  hint: string;
  video: string;
}

export interface ClubData {
  name: string;
  description: string;
  link: string;
}

export interface PaymentData {
  name: string;
  description: string;
  subtitle: string;
  link: string;
}

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

export interface CBDData {
  item_name: string;
  type: string;
  price: string;
  status: string;
  description: string;
  seo: string;
  cbd: string;
}

export interface PromoteData {
  title: string;
  description: string;
  link: string;
  link_label: string;
}

export interface WeedData {
  title: string;
  description: string;
  image: string;
  order?: number;
}

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
  description_en: string;
  description_fr: string;
  seo_en: string;
  seo_fr: string;
  dominance: string;
  thc: string;
  cbd: string;
  effects_en: string;
  effects_fr: string;
  relieves_en: string;
  relieves_fr: string;
  image_url?: string;
}

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
