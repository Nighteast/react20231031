import { Box, Center, Circle, Square } from "@chakra-ui/react";
import { AtSignIcon, ChatIcon, PhoneIcon } from "@chakra-ui/icons";

function App() {
  return (
    <>
      <Center bg={"red.200"} h={"200px"}>
        <Square bg={"blue.300"} w={"100px"} h={"100px"}>
          <AtSignIcon />
        </Square>
      </Center>
      <Center bg={"red.400"} h={"200px"}>
        <Circle bg={"blue.200"} w={"100px"} h={"100px"}>
          <ChatIcon />
        </Circle>
      </Center>
    </>
  );
}

export default App;
