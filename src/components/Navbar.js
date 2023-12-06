import React from 'react';
import { Flex, Heading, Spacer, IconButton, Tooltip, Text } from '@chakra-ui/react';
import { MdHome, MdInfo, MdDirections, MdDirectionsCar, MdLocalHospital } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Flex bg="black" color="white" p={4} alignItems="center">
      <Heading size="md">
        <Flex>
        <MdLocalHospital style={{ marginRight: '10px', marginTop: '2px' }} />
        <Text>MediRouteSaver</Text>
        </Flex>
      </Heading>
      <Spacer />
      <Flex>
        <Tooltip label="Home" hasArrow>
          <IconButton
            icon={<MdHome />}
            aria-label="Home"
            variant="ghost"
            color="white"
            fontSize="20px"
            mr={2}
            _hover={{ color: 'black', bg: 'white' }}
            onClick={() => navigate('/')}
          />
        </Tooltip>
        <Tooltip label="About" hasArrow>
          <IconButton
            icon={<MdInfo />}
            aria-label="About"
            variant="ghost"
            color="white"
            fontSize="20px"
            mr={2}
            _hover={{ color: 'black', bg: 'white' }}
          />
        </Tooltip>
        <Tooltip label="Route Prediction" hasArrow>
          <IconButton
            icon={<MdDirections />}
            aria-label="Route Prediction"
            variant="ghost"
            color="white"
            fontSize="20px"
            mr={2}
            _hover={{ color: 'black', bg: 'white' }}
            onClick={() => navigate('/predict')}
          />
        </Tooltip>
        <Tooltip label="Vehicle Prediction" hasArrow>
          <IconButton
            icon={<MdDirectionsCar />}
            aria-label="Vehicle Prediction"
            variant="ghost"
            color="white"
            fontSize="20px"
            _hover={{ color: 'black', bg: 'white' }}
            onClick={() => navigate('/vehicle')}
          />
        </Tooltip>
      </Flex>
    </Flex>
  );
};

export default Navbar;
