import React, { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

function ChildComp({ onClick }) {
  return <Button onClick={onClick}>클릭!!!</Button>;
}

function SomeComp({ onClick }) {
  return <ChildComp onClick={onClick} />;
}

function OtherChildComp({ value }) {
  return <Text>{value}</Text>;
}

function OtherComp({ value }) {
  return <OtherChildComp value={value} />;
}

function App(props) {
  const [message, setMessage] = useState("원래 메시지 !@!@!@!");

  return (
    <div>
      <SomeComp
        onClick={() => {
          setMessage("다른 메시지!!!");
        }}
      />
      <OtherComp value={message} />
    </div>
  );
}

export default App;
