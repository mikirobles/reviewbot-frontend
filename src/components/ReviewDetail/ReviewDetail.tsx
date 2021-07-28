import { Badge, Box, Flex, Image, Text } from '@chakra-ui/react';
import * as React from 'react';
import { Review } from '../../types/Review';
import { formatDistance, subDays } from 'date-fns';

const stars: Record<number, string> = {
  1: '★',
  2: '★★',
  3: '★★★',
  4: '★★★★',
  5: '★★★★★',
};

function ReviewDetail(props: Review): JSX.Element {
  return (
    <Box width="100%" bg="white" borderRadius="4" boxShadow="base" mb="4" data-test-id={`product-review-${props.id}`}>
      <Flex
        alignItems="center"
        width="100%"
        height="50px"
        borderBottom="1px"
        borderColor="blackAlpha.300"
        justifyContent="space-between"
        p="2"
      >
        <Flex alignItems="center">
          <Image
            width="35px"
            height="35px"
            objectFit="cover"
            borderRadius="4"
            mr="2"
            fallbackSrc={"https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"}
            src={props.user.image}
            alt={props.user.name}
          />
          <Text>{props.user.name}</Text>
          <Text
            title={new Date(props.date).toString()}
            ml="1"
            fontStyle="italic"
            color="blackAlpha.600"
            fontSize="smaller"
          >
            ({formatDistance(subDays(props.date, 3), new Date(), { addSuffix: true })})
          </Text>
        </Flex>
        <Badge>
          {stars[props.rating]} {props.rating} stars
        </Badge>
      </Flex>
      <Box p="4" pt="2">
        <Text>{props.description}</Text>
      </Box>
    </Box>
  );
}

export default ReviewDetail;
