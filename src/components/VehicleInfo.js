import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Heading, Box, Flex } from '@chakra-ui/react';
import ambulanceImage from '../assets/ambu2.gif'; // Import your ambulance image
import Navbar from "./Navbar"

const VehicleInfo = () => {
  const location = useLocation();
  const [vehicle, setVehicle] = useState('');
  const [type, setType] = useState('');
  const { state } = location;

  // Function to make a POST request
  const sendPostRequest = async () => {
    if (state) {
      try {
        const response = await axios.post('https://mediroute-backend.onrender.com/vehicle-prediction', {
          state,
        });

        // Handle the response data
        console.log('Received data:', response.data);
        setVehicle(response.data.vehicle);
        setType(response.data.type);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  useEffect(() => {
    sendPostRequest();
  }, []);

  return (
    <> <Navbar/> 
    <Flex height="90vh">
      <Box width="80%" backgroundColor="white">
        <img
          src={ambulanceImage}
          alt="Ambulance"
          style={{ width: '100%', height: '91vh', objectFit: 'cover' }}
        />
      </Box>
      <Flex width="35%" backgroundColor="aliceblue" justifyContent="center" alignItems="center">
        <Flex flexDirection="column" textAlign="center">
          <Heading as="h2" size="lg"  mb="4">
            Vehicle: <span style={{color:"green"}}> {vehicle} </span>
          </Heading>
          <Heading as="h2" size="lg" >
            Type: <span style={{color:"green"}}>{type} </span>
          </Heading>
        </Flex>
      </Flex>
    </Flex>
    </>
  );
};

export default VehicleInfo;
