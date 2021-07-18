import { Center, Text } from '@chakra-ui/react';
import * as React from 'react';

function Header(): JSX.Element {
  return (
    <Center bg="red.100" w="100%" p="4" boxShadow="base">
      <Text fontWeight="bold" fontStyle="italic">
        ReviewBot
      </Text>
    </Center>
  );
}

export default Header;
