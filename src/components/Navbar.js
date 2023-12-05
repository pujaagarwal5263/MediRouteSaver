import React from 'react';
import { Flex, Heading, Spacer, IconButton, Icon } from '@chakra-ui/react';
import { MdHome, MdInfo, MdDirections, MdDirectionsCar } from 'react-icons/md';

const Navbar = () => {
  return (
    <Flex bg="black" color="white" p={4} alignItems="center">
      <Heading size="md">Logo</Heading>
      <Spacer />
      <Flex>
        <IconButton
          icon={<Icon as={MdHome} />}
          aria-label="Home"
          variant="ghost"
          color="white"
          fontSize="20px"
          mr={2}
        />
        <IconButton
          icon={<Icon as={MdInfo} />}
          aria-label="About"
          variant="ghost"
          color="white"
          fontSize="20px"
          mr={2}
        />
        <IconButton
          icon={<Icon as={MdDirections} />}
          aria-label="Route Prediction"
          variant="ghost"
          color="white"
          fontSize="20px"
          mr={2}
        />
        <IconButton
          icon={<Icon as={MdDirectionsCar} />}
          aria-label="Vehicle Prediction"
          variant="ghost"
          color="white"
          fontSize="20px"
        />
      </Flex>
    </Flex>
  );
};

export default Navbar;
