import React, { useState } from "react";
import { Box, Input } from "@chakra-ui/react";

function App(props) {
  const [message, setMessage] = useState("");

  function handleChange(e) {
    setMessage(e.target.value);
  }

  return (
    <div>
      <Input type="text" value={message} onChange={handleChange} />
    </div>
  );
}

export default App;
