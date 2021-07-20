import { Product } from './Product';

export interface Review {
  id: number;
  productId: Product['id'];
  rating: number;
  date: number;
  description: string;
  user: {
    id: number;
    name: string;
    image: string;
  };
}
