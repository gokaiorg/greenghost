export interface Product {
  id: string;
  name: string;
  type: 'Strains' | 'Edibles' | 'Concentrates' | 'Gadgets' | 'Pre-rolls' | string;
  price: number;
  stock: number;
  initial: number;
  wholesale: number;
  status: 'In stock' | 'Sold out' | string;
  dominance: string;
  thc: number;
  cbd: number;
  description: string;
  seo: string;
  effects: string;
  relieves: string;
  image: string;
  images: string[];
}

export interface CartItem extends Product {
  quantity: number;
  menuType: string;
}
