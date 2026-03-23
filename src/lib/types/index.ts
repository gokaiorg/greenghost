export interface Product {
  id: string;
  name: string;
  type:
    | "Strains"
    | "Edibles"
    | "Concentrates"
    | "Gadgets"
    | "Pre-rolls"
    | string;
  price: number;
  stock: number;
  initial: number;
  wholesale: number;
  status: "In stock" | "Sold out" | string;
  dominance: string;
  thc: number;
  cbd: number;
  description: string;
  description_en: string;
  description_fr: string;
  seo: string;
  seo_en: string;
  seo_fr: string;
  effects: string;
  effects_en: string;
  effects_fr: string;
  relieves: string;
  relieves_en: string;
  relieves_fr: string;
  item_name?: string;
  image_url?: string;
  image: string;
  images: string[];
}

export interface CartItem extends Product {
  quantity: number;
  menuType: string;
}

export interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export interface Review {
  name: string;
  comment: string;
  link: string;
  shop: string;
}
