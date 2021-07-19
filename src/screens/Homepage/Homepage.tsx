import { Box, Grid, GridItem, Input, Stack } from '@chakra-ui/react';
import * as React from 'react';
import ProductItem from '../../components/ProductItem';
import { Product } from '../../types/Product';
import { Review } from '../../types/Review';

const mockProducts: Product[] = [
  {
    name: 'Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)',
    id: 1,
    image:
      'https://assets.nintendo.com/image/upload/b_white,c_pad,f_auto,h_382,q_auto,w_573/ncom/en_US/switch/site-design-update/hardware/switch/nintendo-switch-oled-model-white-set/gallery/image01?v=2021071707',
  },
  {
    name: 'Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 256 GB',
    id: 2,
    image: 'https://m.media-amazon.com/images/I/615YaAiA-ML._SL1500_.jpg',
  },
  {
    name: 'Thermaltake Smart 430W 80+ Black Continuous Power ATX 12V V2.3/EPS 12V Active PFC Power Supply PS-SPD-0430NPCWUS-W',
    id: 3,
    image: 'https://m.media-amazon.com/images/I/71OVSW7QlbL._AC_SL1500_.jpg',
  },
  {
    name: 'NutriBullet NBR-1201 12-Piece High-Speed Blender/Mixer System, Gray (600 Watts)',
    id: 4,
    image: 'https://m.media-amazon.com/images/I/71swiEqWKxL._AC_SL1500_.jpg',
  },
];

function getMockReviews(productId: number, reviews: number): Review[] {
  return Array.from({ length: reviews }).map((_, i) => ({
    id: i,
    productId,
    rating: i % 5,
    date: new Date(Date.now() - i * 1000).toString(),
    description: 'Good product',
    user: {
      name: `User ${i}`,
      id: i,
      image: `https://m.media-amazon.com/images/I/41t-B0xzZGL._SL1500_.jpg`,
    },
  }));
}

// get random number between 1 and 5
function getRandomRating(): number {
  return Math.floor(Math.random() * 5);
}

const mockReviews: Review[] = mockProducts.map((product) => getMockReviews(product.id, getRandomRating())).flat();

function Homepage(): JSX.Element {
  const products = mockProducts;
  const reviews = mockReviews;

  const getReviewCount = (productId: number): number => {
    return reviews.filter((r) => r.productId === productId).length;
  };

  return (
    <Stack alignItems="center" pl="4" pr="4">
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} maxW="900px" m="0 auto 0 auto" gap={6}>
        {products.map((product) => (
          <GridItem key={product.id}>
            <ProductItem {...product} reviewCount={getReviewCount(product.id)} />
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
}

export default Homepage;
