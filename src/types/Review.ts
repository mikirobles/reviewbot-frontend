import { Product } from './Product';

export interface Review {
  id: number;
  productId: Product['id'];
  rating: number;
  date: string;
  description: string;
  user: {
    id: number;
    name: string;
    image: string;
  };
}
