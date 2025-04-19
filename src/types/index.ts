
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  images: string[];
  category: 'men' | 'women' | 'kids' | 'accessories';
  tags: string[];
  sizes: string[];
  colors: {
    name: string;
    value: string;
  }[];
  isNew?: boolean;
  isFeatured?: boolean;
  isOnSale?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  color: {
    name: string;
    value: string;
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
}

export interface Banner {
  id: string;
  title: string;
  description?: string;
  image: string;
  link: string;
  isActive: boolean;
}
