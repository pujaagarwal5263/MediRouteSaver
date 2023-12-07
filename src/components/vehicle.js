import { Button, Heading, Flex,Input,Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const Vehicle = () => {
  const [selectedEntries, setSelectedEntries] = useState([
    { postalCode: "", task: "" },
  ]);

  const navigate = useNavigate();
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

  const taskArray = [
    "Deliver/Collect post",
    "Collect dinners (x2)",
    "Deliver dinners",
    "Lunch",
    "Collect dinners",
    "Deliver dinners (x2)",
    "Collect samples",
    "Deliver samples",
  ];

  const handlePostalCodeChange = (value, index) => {
    const updatedEntries = [...selectedEntries];
    updatedEntries[index].postalCode = value;
    setSelectedEntries(updatedEntries);
  };

  const handleTaskChange = (value, index) => {
    const updatedEntries = [...selectedEntries];
    updatedEntries[index].task = value;
    setSelectedEntries(updatedEntries);
  };

  const addEntry = () => {
    setSelectedEntries([...selectedEntries, { postalCode: "", task: "" }]);
  };

  const deleteEntry = (index) => {
    const updatedEntries = selectedEntries.filter((_, i) => i !== index);
    setSelectedEntries(updatedEntries);
  };

  const navigates = () => {
    navigate("/vehicleinfo", { state: { selectedEntries } });
  };

  return (
    // <Box 
    // bgGradient="linear(to-br, teal.500, teal.800)"
    // height="100vh"
    // display="flex"
    // flexDirection="column"
    // alignItems="center"
    // justifyContent="center"
    // p="6"
    // animation="fadeIn 1s ease-in-out"
    // >
    //   <Heading as="h2" color="white" mb="6">
    //     Routine Data - Vehicle Prediction
    //   </Heading>
    //   {selectedEntries.map((entry, index) => (
    //     <Flex
    //     key={index}
    //     align="center"
    //     mb="4"
    //     width="80%"
    //     bg="white"
    //     border="1px solid black"
    //     borderRadius="5px"
    //     p="4"
    //       >
    //         <label>Select Postal Code: &nbsp; &nbsp;</label>
    //         <Input
    //         type="text"
    //         list="postalCodes"
    //         value={entry.postalCode}
    //         onChange={(e) => handlePostalCodeChange(e.target.value, index)}
    //         placeholder="Enter Postal Code"
    //         mr="4"
    //       />
    //         <datalist id="postalCodes">
    //         {postalCodes.map((code, i) => (
    //           <option key={i} value={code} />
    //         ))}
    //       </datalist>

    //         <label>
    //           Select the Task to be Performed: &nbsp; &nbsp;
    //         </label>
    //         <select
    //           value={entry.task}
    //           onChange={(e) => handleTaskChange(e.target.value, index)}
    //           style={{ outline: "none", width: "7vw" }}
    //         >
    //           <option value="">Select Postal Code</option>
    //           {taskArray.map((task, i) => (
    //             <option key={i} value={task}>
    //               {task}
    //             </option>
    //           ))}
    //         </select>
    //       <Button onClick={() => deleteEntry(index)}>X</Button>
    //     </Flex>
    //   ))}
    //   <Flex mt="4" align="center">
    //     <Button onClick={addEntry} mr="4">
    //       <FaPlus />
    //     </Button>
    //     <Button onClick={navigates}>Get Vehicle Info</Button>
    //   </Flex>
    // </Box>
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
        Routine Data - Vehicle Prediction
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

          <label>Select Task: &nbsp; &nbsp;</label>
          <select
            value={entry.task}
            onChange={(e) => handleTaskChange(e.target.value, index)}
            style={{ outline: "none", width: "20%", marginRight: "4%" }}
          >
            <option value="">Select Task</option>
            {taskArray.map((task, i) => (
              <option key={i} value={task}>
                {task}
              </option>
            ))}
          </select>

          <Button onClick={() => deleteEntry(index)}>X</Button>
        </Flex>
      ))}
      <Flex mt="4" align="center">
        <Button onClick={addEntry} mr="4">
          <FaPlus />
        </Button>
        <Button onClick={navigates}>Get Vehicle Info</Button>
      </Flex>
    </Box>
  );
};

export default Vehicle;
