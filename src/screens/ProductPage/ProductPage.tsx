import { AspectRatio, Box, Container, Flex, Image, Spinner, Text } from '@chakra-ui/react';
import * as React from 'react';
import { useMemo } from 'react';
import { useRouteMatch } from 'react-router-dom';
import ReviewDetail from '../../components/ReviewDetail';
import { ReviewContext } from '../../store/context';

function ProductPage(): JSX.Element {
  const { error, loading, data } = React.useContext(ReviewContext);
  const {
    params: { productId },
  } = useRouteMatch<{ productId: string }>();

  const product = useMemo(() => data.products.find(({ id }) => String(id) === productId), [productId, data.products]);
  const reviews = useMemo(
    () => data.reviews.filter(({ productId: id }) => String(id) === productId),
    [productId, data.reviews],
  );

  if (loading) {
    return (
      <Flex alignItems="center" justifyContent="center">
        <Spinner />
      </Flex>
    );
  }

  if (error || typeof product === 'undefined') {
    return (
      <Box>
        <Text textAlign="center" color="darkred">
          There was an error fetching the data.
        </Text>
      </Box>
    );
  }

  return (
    <Container>
      <Flex alignItems="center" mb="8" data-test-id="product-page-header">
        <AspectRatio mr="2" ratio={1} width="100px">
          <Image borderRadius="full" src={product.image} border="1px" borderColor="blue.100" alt={product.name} />
        </AspectRatio>
        <Text fontSize="md" fontWeight="semibold" textAlign="center" color="blue.800">
          {product.name}
        </Text>
      </Flex>
      {reviews.length === 0 && (
        <Box bg="white" p="4" borderRadius="4" border="1px" borderColor="blue.100">
          <Text textAlign="center">There are no reviews for this product.</Text>
        </Box>
      )}
      {reviews.map((review) => (
        <ReviewDetail {...review} key={review.id} />
      ))}
    </Container>
  );
}

export default ProductPage;
