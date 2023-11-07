import React, { useState } from "react";
import { Input, Text } from "@chakra-ui/react";

function CComp({ value }) {
  return <Text>{value}</Text>;
}

function AComp({ value }) {
  return <CComp value={value} />;
}

function DComp({ onChange }) {
  return <Input onChange={onChange} />;
}

function BComp({ onChange }) {
  return <DComp onChange={onChange} />;
}

function App(props) {
  const [message, setMessage] = useState("기본 텍스트");

  return (
    <div>
      <AComp value={message} />
      <BComp
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
    </div>
  );
}

export default App;
