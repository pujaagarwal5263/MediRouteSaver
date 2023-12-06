import React from 'react';
import { Flex, Heading, Spacer, IconButton, Tooltip, Text } from '@chakra-ui/react';
import { MdHome, MdInfo, MdDirections, MdDirectionsCar, MdLocalHospital } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

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
