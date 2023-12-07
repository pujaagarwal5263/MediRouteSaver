import React from 'react';
import { Flex, Heading, Spacer,  Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex bg="black" color="white" p={4} alignItems="center">
      <Heading size="md" marginLeft="37vw">
        <Text>Made with 🤍 By MediRouteSaver</Text>
      </Heading>
      <Spacer />
    </Flex>
  );
};

export default Footer;
