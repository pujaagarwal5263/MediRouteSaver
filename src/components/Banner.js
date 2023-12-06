import React from 'react';
import { Flex, Box, Heading, Text, Image } from '@chakra-ui/react';
import marker1 from "../assets/ambu1.gif"
import fp from "../assets/whyus.gif"

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
        <Heading size="xl" ml={10} >
          Welcome to MediRoute
        </Heading>
        <Text mt={3} ml={10} fontSize={20}>
          We provide AI-powered route and vehicle prediction. <br/> We're a team of dedicated professionals to assist you
          in journey to <br/> optimal resource allocation.
        </Text>
      </Box>
      <Box>
        <Image
          src={fp}
          alt="Doctors"
          boxSize="200px"
          objectFit="cover"
          borderRadius="full"
           transform="translateY(-15px) translateX(-115px)"
    
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
