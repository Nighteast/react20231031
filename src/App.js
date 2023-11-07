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

  return (
    <div>
      <MyInput
        address={address}
        onInputChange={(text) => setAddress(text.target.value)}
      />
      <MyText address={address} />
    </div>
  );
}

export default App;
