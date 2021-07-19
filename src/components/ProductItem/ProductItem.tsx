import { AspectRatio, Badge, Box, Image, Stack, Text } from '@chakra-ui/react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types/Product';

type ProductProps = Product & {
  reviewCount: number;
};

function ProductItem(props: ProductProps): JSX.Element {
  return (
    <Link to={`/product/${props.id}`}>
      <Stack
        bg="white"
        p="0"
        spacing="0"
        direction="row"
        rounded="base"
        boxShadow="base"
        transition=".25s"
        _hover={{ boxShadow: 'lg' }}
      >
        <Box height="150px">
          <AspectRatio w="150px" ratio={1}>
            <Image roundedLeft="base" borderRight="1px" borderColor="gray.200" src={props.image} alt={props.name} />
          </AspectRatio>
        </Box>
        <Box roundedRight="base" position="relative" p="2" pr="4" pl="4">
          <Text color="blue.900" fontWeight="semibold" noOfLines={2} fontSize="md" mb="1">
            {props.name}
          </Text>
          <Badge colorScheme="orange">{props.reviewCount} reviews</Badge>
        </Box>
      </Stack>
    </Link>
  );
}

export default ProductItem;
