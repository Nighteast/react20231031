import React, { useState } from "react";
import { Box, Input, Text } from "@chakra-ui/react";

function App(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  function handleUserNameChange(e) {
    setUsername(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  return (
    <div>
      <Box>
        <Input type="text" value={username} onChange={handleUserNameChange} />
      </Box>
      <Box>
        <Input type="text" value={email} onChange={handleEmailChange} />
      </Box>
      <Text>
        <span style={{ color: "aqua", backgroundColor: "black" }}>
          {username}
        </span>
        의 email은
        <span style={{ color: "aqua", backgroundColor: "black" }}>{email}</span>
        입니다.
      </Text>

      <Box>
        <Input
          type="text"
          value={address}
          onChange={(e) => {
            handleAddressChange(e.target.value);
          }}
        />
      </Box>
    </div>
  );
}

export default App;
