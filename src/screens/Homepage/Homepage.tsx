import { Box, Flex, Grid, GridItem, Spinner, Stack, Text } from '@chakra-ui/react';
import * as React from 'react';
import { useContext } from 'react';
import ProductItem from '../../components/ProductItem';
import { ReviewContext } from '../../store/context';

function Homepage(): JSX.Element {
  const { error, loading, data } = useContext(ReviewContext);

  const getReviewCount = (productId: number): number => {
    return data.reviews.filter((r) => r.productId === productId).length;
  };

  if (error) {
    return (
      <Box>
        <Text textAlign="center" color="darkred">
          There was an error fetching the data.
        </Text>
      </Box>
    );
  }

  if (loading) {
    return (
      <Flex alignItems="center" justifyContent="center">
        <Spinner />
      </Flex>
    );
  }

  return (
    <Stack alignItems="center" pl="4" pr="4">
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} maxW="900px" m="0 auto 0 auto" gap={6}>
        {data.products.map((product) => (
          <GridItem key={product.id}>
            <ProductItem {...product} reviewCount={getReviewCount(product.id)} />
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
}

export default Homepage;
