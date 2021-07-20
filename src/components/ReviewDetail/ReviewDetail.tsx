import { Badge, Box, Flex, Image, Text } from '@chakra-ui/react';
import * as React from 'react';
import { Review } from '../../types/Review';

const stars: Record<number, string> = {
  1: '★',
  2: '★★',
  3: '★★★',
  4: '★★★★',
  5: '★★★★★',
};

function ReviewDetail(props: Review): JSX.Element {
  return (
    <Box width="100%" bg="white" borderRadius="4" boxShadow="base" mb="4">
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
            (2 days ago)
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
