import React, { useState } from "react";
import { Box, Input, Text } from "@chakra-ui/react";

function MyInput({ value, onInputChange }) {
  return (
    <Box>
      <Input value={value} onChange={onInputChange} />
    </Box>
  );
}

function MyText({ value }) {
  return (
    <Box>
      <Text>{value}</Text>
    </Box>
  );
}

function App(props) {
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <MyInput
        value={address}
        onInputChange={(text) => setAddress(text.target.value)}
      />
      <MyText value={address} />
      <hr />
      <MyInput
        value={email}
        onInputChange={(text) => setEmail(text.target.value)}
      />
      <MyText value={email} />
    </div>
  );
}

export default App;
