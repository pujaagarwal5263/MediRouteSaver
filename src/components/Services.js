import React from "react";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import ai from "../assets/artificial-intelligence-1.png";
import ambulance from "../assets/ambulance.svg";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const optimalRoutePoints = [
    "Navigate like a local with AI assistance.",
    "Get the shortest distance between the places",
    "Avoid traffic and reduce travel time.",
    "Adapt best routes based on real-time conditions.",
  ];

  const vehiclePredictionPoints = [
    "Predict the most suitable vehicle for your journey.",
    "Consider factors like cost, comfort, and eco-friendliness.",
    "Receive personalized recommendations based on preferences.",
    "Explore alternative transportation options.",
  ];

  return (
    <Flex direction="column" backgroundColor="lightyellow">
      <br />
      <Heading as="h2" size="xl" mb={6} pt={10} textAlign="center">
        What do we offer?
      </Heading>
      <Flex direction="column" gap="30px">
        <div style={{ display: "flex", gap: "50px", marginLeft: "30px" }}>
          <img
            src={ai}
            alt="AI-generated optimal route"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <div style={{ flex: "1" }}>
            <Heading as="h4" marginBottom="8px" marginTop="100px">
              AI-generated Optimal Route
            </Heading>
            <Text color="gray.600" marginBottom="16px" fontSize="20px">
              Experience seamless travel with AI-powered route planning that
              goes beyond the ordinary.
            </Text>
            <ul style={{ marginLeft: "40px", fontSize: "20px" }}>
              {optimalRoutePoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <Button
              marginTop="30px"
              backgroundColor="black"
              color="white"
              _hover={{ backgroundColor: "black", color: "white" }}
              onClick={() => navigate("/predict")}
            >
              Get Started
            </Button>
          </div>
        </div>
        <div style={{ height: "10vh" }}></div>

        <div
          style={{
            display: "flex",
            gap: "50px",
            paddingLeft: "70px",
            paddingTop: "60px",
            paddingBottom: "70px",
            backgroundColor: "lightpink",
            width: "100%",
          }}
        >
          <div style={{ flex: "1" }}>
            <Heading as="h4" marginBottom="8px" marginTop="150px">
              AI-generated Vehicle Prediction
            </Heading>
            <Text color="gray.600" marginBottom="16px" fontSize="20px">
              Estimation of best vehicle suitable for given route and postal
              codes.
            </Text>
            <ul style={{ marginLeft: "40px", fontSize: "20px" }}>
              {vehiclePredictionPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <Button
              marginTop="30px"
              backgroundColor="black"
              color="white"
              _hover={{ backgroundColor: "black", color: "white" }}
              onClick={() => navigate("/vehicle")}
            >
              Get Started
            </Button>
          </div>
          <img
            src={ambulance}
            alt="AI-generated optimal route"
            style={{ maxWidth: "80vh", height: "80vh", marginRight: "40px" }}
          />
        </div>
      </Flex>
    </Flex>
  );
};

export default Services;
