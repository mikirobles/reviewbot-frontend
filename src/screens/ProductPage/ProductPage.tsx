import { AspectRatio, Badge, Box, Container, Flex, Image, Text } from '@chakra-ui/react';
import * as React from 'react';
import { useMemo } from 'react';
import ReviewDetail from '../../components/ReviewDetail';
import { Product } from '../../types/Product';
import { Review } from '../../types/Review';

function ProductPage(): JSX.Element {
  const product: Product = {
    name: 'Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)',
    id: 1,
    image:
      'https://assets.nintendo.com/image/upload/b_white,c_pad,f_auto,h_382,q_auto,w_573/ncom/en_US/switch/site-design-update/hardware/switch/nintendo-switch-oled-model-white-set/gallery/image01?v=2021071707',
  };

  const reviews: Review[] = useMemo(
    () => [
      {
        id: 1,
        productId: 1,
        rating: 4,
        date: new Date(Date.now() - 1000).toString(),
        description: 'I love this product!',
        user: {
          name: `Jennifer Aniston`,
          id: 1,
          image: `https://images.squarespace-cdn.com/content/v1/5cfb0f8783523500013c5639/1613703095215-TEZ2DFQ71FLPA5KAL6D1/Headshots-photographer-vancouver-1.jpg?format=2500w`,
        },
      },
    ],
    [],
  );

  return (
    <Container>
      {/* Product Detail */}
      <Flex alignItems="center" mb="8">
        <AspectRatio mr="2" ratio={1} width="100px">
          <Image borderRadius="full" src={product.image} border="1px" borderColor="blue.100" alt={product.name} />
        </AspectRatio>
        <Text fontSize="md" fontWeight="semibold" textAlign="center" color="blue.800">
          {product.name}
        </Text>
      </Flex>
      {/* Reviews */}
      <ReviewDetail {...reviews[0]} />
    </Container>
  );
}

export default ProductPage;
