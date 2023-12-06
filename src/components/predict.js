import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Predict = () => {
  const [selectedEntries, setSelectedEntries] = useState([
    { postalCode: "", dateTime: null },
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

  const navigates = () => {
    // Logic to handle the selected entries, e.g., sending to API or storing in state
    navigate("/map",{ state: { selectedEntries } });
  };

  // const postalCodeOptions = postalCodes.map((code, i) => ({
  //   value: code,
  //   label: code,
  // }));

  return (
    <div>
      <h1>Specimen Collection - Route Prediction</h1>
      {selectedEntries.map((entry, index) => (
        <div
          key={index}
          style={{
            border: "1px solid black",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <label>Select Postal Code:</label>
          <select
            value={entry.postalCode}
            onChange={(e) => handlePostalCodeChange(e.target.value, index)}
          >
            <option value="">Select Postal Code</option>
            {postalCodes.map((code, i) => (
              <option key={i} value={code}>
                {code}
              </option>
            ))}
          </select>
          <label>Select Time of Specimen Collection:</label>
          <DatePicker
            selected={entry.dateTime}
            onChange={(date) => handleTimeChange(date, index)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            dateFormat="h:mm aa"
            placeholderText="Select Time"
          />
          <Button onClick={() => deleteEntry(index)}>X</Button>
        </div>
      ))}
      <Button onClick={addEntry}>Add Entry</Button>
      <br/>
      <br/>
      <Button onClick={navigates}>Get Route Analysis</Button>
      <Button>Get Selected Vehicle</Button>
    </div>
  );
};

export default Predict;
