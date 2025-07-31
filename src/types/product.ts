export type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  category?: string;

  details?: string;
  features?: string[];
  inStock?: boolean;
  maxQty?: number;
  rating?: number;
  reviews?: { user: string; comment: string }[];
};
