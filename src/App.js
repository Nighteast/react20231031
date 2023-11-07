import React, { useState } from "react";
import { Box, Input, Text } from "@chakra-ui/react";

function MyInput({ address, onInputChange }) {
  return (
    <Box>
      <Input value={address} onChange={onInputChange} />
    </Box>
  );
}

function MyText({ address }) {
  return (
    <Box>
      <Text>{address}</Text>
    </Box>
  );
}

function App(props) {
  const [address, setAddress] = useState("");

  function handleInputChange(text) {
    setAddress(text.target.value);
  }

  return (
    <div>
      <MyInput address={address} onInputChange={handleInputChange} />
      <MyText address={address} />
    </div>
  );
}

export default App;
