import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import ai from "../assets/artificial-intelligence-1.png";

const Services = () => {
  const optimalRoutePoints = [
    'Navigate like a local with AI assistance.',
    'Get the shortest distance between the places',
    'Avoid traffic and reduce travel time.',
    'Adapt best routes based on real-time conditions.',
  ];

  const vehiclePredictionPoints = [
    'Predict the most suitable vehicle for your journey.',
    'Consider factors like cost, comfort, and eco-friendliness.',
    'Receive personalized recommendations based on preferences.',
    'Explore alternative transportation options.',
  ];

  return (
    <Flex direction="column"  py={8} backgroundColor="lightyellow">
      <Heading as="h2" size="xl" mb={6} textAlign="center">
        What do we offer?
      </Heading>
      <div style={{ width: '100%',  marginLeft: '60px', marginTop:'20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
          <div style={{ display: 'flex', gap:"50px" }}>
            <img src={ai} alt="AI-generated optimal route" style={{ maxWidth: '100%', height: 'auto' }} />
            <div style={{ flex: '1' }}>
              <Heading as="h3"  marginBottom="8px" marginTop="50px">
                AI-generated Optimal Route
              </Heading>
              <Text color="gray.600" marginBottom="16px">
                Experience seamless travel with AI-powered route planning that goes beyond the ordinary.
              </Text>
              <ul style={{marginLeft: "40px"}}>
                {optimalRoutePoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <img src="/path_to_your_vehicle_prediction_image.png" alt="Vehicle prediction based on Machine Learning" style={{ width: '100%', height: 'auto', marginBottom: '16px' }} />
            <Heading as="h3" size="md" marginBottom="8px">
              Vehicle Prediction
            </Heading>
            <Text color="gray.600" marginBottom="16px">
              Find the perfect ride for your journey through intelligent vehicle predictions and personalized recommendations.
            </Text>
            <ul>
              {vehiclePredictionPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
          {/* Add more div elements for additional services */}
        </div>
      </div>
    </Flex>
  );
};

export default Services;
