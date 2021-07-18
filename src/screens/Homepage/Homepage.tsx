import { Grid, GridItem } from '@chakra-ui/react';
import * as React from 'react';
import ProductItem from '../../components/ProductItem';
import { Product } from '../../types/Product';

const mockProducts: Product[] = [
  {
    name: 'Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)',
    id: 1,
    image:
      'https://assets.nintendo.com/image/upload/b_white,c_pad,f_auto,h_382,q_auto,w_573/ncom/en_US/switch/site-design-update/hardware/switch/nintendo-switch-oled-model-white-set/gallery/image01?v=2021071707',
  },
  {
    name: 'Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)',
    id: 2,
    image:
      'https://assets.nintendo.com/image/upload/b_white,c_pad,f_auto,h_382,q_auto,w_573/ncom/en_US/switch/site-design-update/hardware/switch/nintendo-switch-oled-model-white-set/gallery/image01?v=2021071707',
  },
  {
    name: 'Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)',
    id: 3,
    image:
      'https://assets.nintendo.com/image/upload/b_white,c_pad,f_auto,h_382,q_auto,w_573/ncom/en_US/switch/site-design-update/hardware/switch/nintendo-switch-oled-model-white-set/gallery/image01?v=2021071707',
  },
  {
    name: 'Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)',
    id: 4,
    image:
      'https://assets.nintendo.com/image/upload/b_white,c_pad,f_auto,h_382,q_auto,w_573/ncom/en_US/switch/site-design-update/hardware/switch/nintendo-switch-oled-model-white-set/gallery/image01?v=2021071707',
  },
];

function Homepage(): JSX.Element {
  return (
    <Grid templateColumns="repeat(2, 1fr)" maxW="900px" m="0 auto 0 auto" gap={6}>
      {mockProducts.map((product) => (
        <GridItem key={product.id}>
          <ProductItem {...product} reviewCount={10} />
        </GridItem>
      ))}
    </Grid>
  );
}

export default Homepage;
