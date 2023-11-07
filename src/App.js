import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";

let out = 0;

function MyComp() {
  const [num, setNum] = useState(0);
  let a = 3;

  out++;

  console.log("a", a);
  console.log("num", num);
  console.log("out", out);
  return (
    <div>
      <Button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        <p>{num}</p>
      </Button>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp />
    </div>
  );
}

export default App;
