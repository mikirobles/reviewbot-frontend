import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import mockProducts from '../mocks/products';
import mockReviews from '../mocks/reviews';
import { Product } from '../types/Product';
import { Review } from '../types/Review';

interface ReviewsState {
  loading: boolean;
  error: boolean;
  data: {
    products: Product[];
    reviews: Review[];
  };
}

const initialState: ReviewsState = {
  loading: true,
  error: false,
  data: {
    products: [],
    reviews: [],
  },
};

export const ReviewContext = React.createContext<ReviewsState>(initialState);

const ReviewsProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
  const [state, setState] = useState<ReviewsState>(initialState);

  useEffect(() => {
    // Mock network call to get products and reviews
    setTimeout(() => {
      setState({
        loading: false,
        error: false,
        data: {
          products: mockProducts,
          reviews: mockReviews,
        },
      });
    }, 1500);
  }, []);

  return <ReviewContext.Provider value={state}>{children}</ReviewContext.Provider>;
};

export default ReviewsProvider;
