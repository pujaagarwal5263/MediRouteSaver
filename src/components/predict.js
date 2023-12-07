import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  Spacer,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaPlus } from "react-icons/fa";

const Predict = () => {
  const [selectedEntries, setSelectedEntries] = useState([
    { postalCode: "", dateTime: null },
  ]);
  const navigate = useNavigate();

  const toast = useToast();



  const postalCodes = [
    "SO41 8DJ",
    "SO51 8XA",
    "SO16 4QX",
    "SO16 5DR",
    "SO14 6WP",
    "SO41 8DJ",
    "SO51 8JH",
    "SO15 3HF",
    "BH25 7PA",
    "SO18 6BX",
    "SO32 1HF",
    "SO18 1HH",
    "SO45 1RE",
    "SO31 4JT",
    "SO32 2TH",
    "SO42 7YS",
    "SO16 4BN",
    "SO16 3BE",
    "SO31 8AB",
    "SO41 9AZ",
    "SO16 4EW",
    "BH25 5AR",
    "SO32 2TH",
    "SP6 1LD",
    "SO45 4JG",
    "SO22 6FP",
    "SO53 2FW",
    "SO30 4DE",
    "SO17 1QF",
    "SO15 5HL",
    "SO18 5FL",
    "SO16 8LJ",
    "SO43 7FJ",
    "SO40 4UP",
    "SO41 0NJ",
    "SO17 1EZ",
    "SO40 8UU",
    "BH25 6RJ",
    "SO14 0RD",
    "SO52 9EL",
    "SO19 9PL",
    "SO53 2DH",
    "SO19 4ED",
    "SO15 5SE",
    "BH24 1XP",
    "SO15 5RU",
    "SO15 3HU",
    "SO14 1PT",
    "SO19 9AR",
    "SO50 8LT",
    "SO16 2NN",
    "SO40 3JD",
    "SO19 6DE",
    "SO51 7LB",
    "SO40 3DB",
    "SO18 3HY",
    "SO17 1QF",
    "SO15 5GN",
    "SO45 6AG",
    "SO45 5GQ",
    "SO30 3JL",
    "SO18 6PJ",
    "SO19 9GE",
    "SO16 6YD",
    "SO41 9FE",
    "SO41 3AY",
    "SO53 4LL",
    "SO41 6AG",
    "SO50 4HL",
    "SO17 2JG",
    "SO50 9GE",
    "SO19 9DJ",
    "BH24 1NY",
    "SO15 2GR",
    "SO18 2AB",
    "SO21 1HG",
    "SO23 8DS",
    "SO43 7JP",
  ];

  const handlePostalCodeChange = (value, index) => {
    const updatedEntries = [...selectedEntries];
    updatedEntries[index].postalCode = value;
    setSelectedEntries(updatedEntries);
  };

  const handleTimeChange = (date, index) => {
    const updatedEntries = [...selectedEntries];
    updatedEntries[index].dateTime = date;
    setSelectedEntries(updatedEntries);
  };

  const addEntry = () => {
    
    setSelectedEntries([
      ...selectedEntries,
      { postalCode: "", dateTime: null },
    ]);
  };

  const deleteEntry = (index) => {
    const updatedEntries = selectedEntries.filter((_, i) => i !== index);
    setSelectedEntries(updatedEntries);
  };

  const validateEntries = () => {
    // Check if any postal code is empty or if any date/time is not selected
    return selectedEntries.every(
      (entry) => entry.postalCode.trim() !== "" && entry.dateTime !== null
    );
  };

  const navigates = () => {
  
    if (validateEntries()) {
      // Logic to handle the selected entries, e.g., sending to API or storing in state
      navigate("/map", { state: { selectedEntries } });
    } else {
      // Show an error message or take other appropriate actions
      console.error("Please fill in all fields before proceeding.");
      toast({
        title: "Validation Error",
        description: "Please fill in all fields before proceeding.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      bgGradient="linear(to-br, teal.500, teal.800)"
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p="6"
      animation="fadeIn 1s ease-in-out"
    >
      <Heading as="h2" color="white" mb="6">
        Specimen Collection - Route Prediction
      </Heading>
      {selectedEntries.map((entry, index) => (
        <Flex
          key={index}
          align="center"
          mb="4"
          width="80%"
          bg="white"
          border="1px solid black"
          borderRadius="5px"
          p="4"
        >
          <label>Select Postal Code: &nbsp; &nbsp;</label>
          <Input
            type="text"
            list="postalCodes"
            value={entry.postalCode}
            onChange={(e) => handlePostalCodeChange(e.target.value, index)}
            placeholder="Enter Postal Code"
            mr="4"
          />
          <datalist id="postalCodes">
            {postalCodes.map((code, i) => (
              <option key={i} value={code} />
            ))}
          </datalist>

          <label>Select Time of Specimen Collection: &nbsp; &nbsp;</label>
          <DatePicker
            selected={entry.dateTime}
            onChange={(date) => handleTimeChange(date, index)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            dateFormat="h:mm aa"
            placeholderText="Select Time"
            style={{ outline: "none" }}
          />

          <Spacer />

          <Button onClick={() => deleteEntry(index)} ml="4">
            X
          </Button>
        </Flex>
      ))}
      <Flex mt="4" align="center">
        <Button onClick={addEntry} mr="4">
          <FaPlus />
        </Button>
        <Button onClick={navigates}>Get Route Analysis</Button>
      </Flex>
    </Box>
  );
};

export default Predict;
