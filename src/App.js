import React from "react";
import { Box, Image } from "@chakra-ui/react";

function App(props) {
  return (
    <div>
      <Box w={"480px"}>
        <Image src="https://i.imgur.com/Z4UsRCx.png" />
      </Box>
      <Box>
        <Image boxSize={"100px"} src="https://i.imgur.com/Z4UsRCx.png" />
      </Box>
      <Box>
        <Image boxSize={"200px"} src="https://i.imgur.com/Z4UsRCx.png" />
      </Box>
      <Box>
        <Image
          borderRadius={"full"}
          boxSize={"100px"}
          src="https://i.imgur.com/Z4UsRCx.png"
        />
      </Box>
      <Box>
        <Image
          fallbackSrc="https://via.placeholder.com/150"
          boxSize={"100px"}
          src="abcde.jpg"
        />
      </Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
    </div>
  );
}

export default App;
