import React from 'react';
import { Flex, Box, Heading, Text, Image } from '@chakra-ui/react';
import marker1 from "../assets/hospital.jpg"

const Banner = () => {
  return (
    <div style={{backgroundColor:"aliceblue"}}>
    <Flex
      bg="aliceblue" // Update this color to the cream color you desire
      p={8}
      alignItems="center"
      justifyContent="space-between"
    >
      <Box flex="1">
        <Heading size="xl" ml={10} fontFamily="Poppins">
          Welcome to Our Clinic
        </Heading>
        <Text mt={3} ml={10}>
          We provide compassionate care for your health needs. Our team of <br/> dedicated professionals is here to assist you
          with comprehensive health services.
        </Text>
      </Box>
      <Box>
        <Image
          src={marker1}
          alt="Doctors"
          boxSize="200px"
          objectFit="cover"
          borderRadius="full"
          transform="translateY(-20px)"
        />
        <Image
          src={marker1}
          alt="Doctors"
          boxSize="380px"
          objectFit="cover"
          borderRadius="full"
          transform="translateY(-25px) translateX(-25px)"
        />
      </Box>
      
    </Flex>
    <div style={{height: "8vh"}}></div>
    <hr color='black' />
    
    </div>
  );
};

export default Banner;
