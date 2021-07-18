import { AspectRatio, Badge, Box, Image, Stack, Text } from '@chakra-ui/react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types/Product';

type ProductProps = Product & {
  reviewCount: number;
  newReviewCount?: number;
};

function ProductItem(props: ProductProps): JSX.Element {
  return (
    <Link to={`/product/${props.id}`}>
      <Stack p="0" spacing="0" direction="row" rounded="base" boxShadow="base">
        <Box width="300px">
          <AspectRatio ratio={1}>
            <Image borderRight="1px" borderColor="gray.200" objectFit="cover" src={props.image} alt={props.name} />
          </AspectRatio>
        </Box>
        <Box bg="yellow.50" roundedRight="base" position="relative" p="2" pr="4" pl="4">
          <Text fontWeight="semibold" noOfLines={2} fontSize="md" mb="1">
            {props.name}
          </Text>
          <Text fontSize="sm">
            {props.reviewCount} reviews{' '}
            {props.newReviewCount && (
              <Badge marginLeft="1" colorScheme="red">
                2 new
              </Badge>
            )}
          </Text>
        </Box>
      </Stack>
    </Link>
  );
}

export default ProductItem;
