import { Box, Flex, SimpleGrid } from "@chakra-ui/react";

function App() {
  /*
  const breakpoints = {
  base: "0em", // 0px
  sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
  md: "48em", // ~768px
  lg: "62em", // ~992px
  xl: "80em", // ~1280px
  "2xl": "96em", // ~1536px
  };
*/
  return (
    <>
      <SimpleGrid gap={3} columns={{ base: 2, md: 3 }}>
        <Box bg="blue.300">Lorem.</Box>
        <Box bg="blue.300">Sit?</Box>
        <Box bg="blue.300">Dolorem!</Box>
        <Box bg="blue.300">Incidunt?</Box>
        <Box bg="blue.300">Praesentium?</Box>
        <Box bg="blue.300">Quidem!</Box>
        <Box bg="blue.300">Aperiam.</Box>
        <Box bg="blue.300">Perferendis.</Box>
        <Box bg="blue.300">Ipsum!</Box>
        <Box bg="blue.300">Et.</Box>
        <Box bg="blue.300">Autem?</Box>
        <Box bg="blue.300">Itaque?</Box>
        <Box bg="blue.300">Voluptate?</Box>
        <Box bg="blue.300">Illo?</Box>
        <Box bg="blue.300">Odit.</Box>
        <Box bg="blue.300">Doloribus!</Box>
        <Box bg="blue.300">Vel.</Box>
        <Box bg="blue.300">Dolor.</Box>
        <Box bg="blue.300">Aliquam?</Box>
        <Box bg="blue.300">Numquam.</Box>
        <Box bg="blue.300">Odit.</Box>
        <Box bg="blue.300">Voluptate.</Box>
        <Box bg="blue.300">Assumenda!</Box>
        <Box bg="blue.300">Quod?</Box>
        <Box bg="blue.300">Iure.</Box>
        <Box bg="blue.300">Expedita.</Box>
        <Box bg="blue.300">Natus?</Box>
        <Box bg="blue.300">Odit?</Box>
        <Box bg="blue.300">Eveniet?</Box>
        <Box bg="blue.300">Aliquid.</Box>
      </SimpleGrid>
    </>
  );
}

export default App;
