import { Review } from '../types/Review';

const mockReviews: Review[] = [
  {
    id: 1,
    productId: 1,
    rating: 4,
    date: 1626808904187,
    description: 'I love this product!',
    user: {
      name: 'Jennifer Aniston',
      id: 1,
      image:
        'https://images.squarespace-cdn.com/content/v1/5cfb0f8783523500013c5639/1613703095215-TEZ2DFQ71FLPA5KAL6D1/Headshots-photographer-vancouver-1.jpg?format=2500w',
    },
  },
  {
    id: 2,
    productId: 1,
    rating: 3,
    date: 1626808904187,
    description: 'I love this product!',
    user: {
      name: 'Jennifer Aniston',
      id: 1,
      image:
        'https://images.squarespace-cdn.com/content/v1/5cfb0f8783523500013c5639/1613703095215-TEZ2DFQ71FLPA5KAL6D1/Headshots-photographer-vancouver-1.jpg?format=2500w',
    },
  },
  {
    id: 3,
    productId: 1,
    rating: 4,
    date: 1626808904187,
    description: 'I love this product!',
    user: {
      name: 'Jennifer Aniston',
      id: 1,
      image:
        'https://images.squarespace-cdn.com/content/v1/5cfb0f8783523500013c5639/1613703095215-TEZ2DFQ71FLPA5KAL6D1/Headshots-photographer-vancouver-1.jpg?format=2500w',
    },
  },
  {
    id: 4,
    productId: 2,
    rating: 2,
    date: 1626808904187,
    description: 'I dislike this product',
    user: {
      name: 'Jennifer Aniston',
      id: 1,
      image:
        'https://images.squarespace-cdn.com/content/v1/5cfb0f8783523500013c5639/1613703095215-TEZ2DFQ71FLPA5KAL6D1/Headshots-photographer-vancouver-1.jpg?format=2500w',
    },
  },
];

export default mockReviews;
