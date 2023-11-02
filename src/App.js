import { Box, Flex } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Flex
        w={"100%"}
        h={"100px"}
        bg={"gray.300"}
        gap={3}
        align={"center"}
        justify={"space-around"}
      >
        <Box bg={"gold"}>Lorem.</Box>
        <Box bg={"red"}>Obcaecati.</Box>
        <Box bg={"facebook.500"}>Aperiam!</Box>
        <Box bg={"gray"}>Deserunt?</Box>
        <Box bg={"blue"}>Nemo.</Box>
      </Flex>
    </>
  );
}

export default App;
