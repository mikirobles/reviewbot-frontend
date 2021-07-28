import { Center, Image } from '@chakra-ui/react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

function Header(): JSX.Element {
  return (
    <Center bg="white" w="100%" p="4" borderBottom="1px" borderColor="blue.100">
      <Link to="/">
        <Image alt="ReviewBot" src={logo} />
      </Link>
    </Center>
  );
}

export default Header;
