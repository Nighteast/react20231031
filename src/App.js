import { Button } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  function handleButtonClick(e) {
    setNumber(number + e);
  }

  return (
    <>
      <h1>{number}</h1>
      <Button
        onClick={() => {
          handleButtonClick(1);
        }}
      >
        증가
      </Button>
      <Button
        onClick={() => {
          handleButtonClick(-1);
        }}
      >
        감소
      </Button>
    </>
  );
}

export default App;
