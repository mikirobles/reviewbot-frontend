import { Box, Container, Flex, Grid, GridItem, Input, Spinner, Stack, Text } from '@chakra-ui/react';
import * as React from 'react';
import { useMemo } from 'react';
import { useContext } from 'react';
import ReviewDetail from '../../components/ReviewDetail';
import { ReviewContext } from '../../store/context';
import { Review } from '../../types/Review'

function AdminPage(): JSX.Element {
  const { error, loading, data } = useContext(ReviewContext);
  const [searchFilter, setSearchFilter] = React.useState("");

  const filteredReviews: Review[] = useMemo(() => {
    const search = searchFilter.toLowerCase();
    return data.reviews.filter(review => 
      (review.user.name.toLowerCase().includes(search) || 
      review.description.toLowerCase().includes(search)
    ))
  }, [data.reviews, searchFilter])

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
    <Container>
      <Box bg="white" p="4" borderRadius="4" mb="4">
        <Input type="text" value={searchFilter} onChange={e => setSearchFilter(e.target.value)} />
      </Box>
      {
        filteredReviews.map(review => (
          <ReviewDetail {...review} highlight={searchFilter} key={`${review.productId}-${review.id}`} />
        ))
      }
    </Container>
  );
}

export default AdminPage;
