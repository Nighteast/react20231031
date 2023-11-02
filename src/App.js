import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Button,
  SimpleGrid,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

function App() {
  return (
    <>
      <SimpleGrid columns={1} gap={5}>
        <Box>
          {/*Box>Table[variant=striped]>Thead>Tr>Th*4>lorem1^^^Tbody>Tr*5>Td*4>lorem1*/}
          <Table variant="striped" colorScheme="red">
            <Thead>
              <Tr>
                <Th>Lorem.</Th>
                <Th>Similique!</Th>
                <Th>Ipsa!</Th>
                <Th>Eligendi.</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Velit!</Td>
                <Td>Consequatur.</Td>
                <Td>Autem.</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Minus!</Td>
                <Td>Aliquid.</Td>
                <Td>Aliquid.</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Id?</Td>
                <Td>Distinctio.</Td>
                <Td>Fugit.</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Placeat?</Td>
                <Td>Nisi.</Td>
                <Td>Sapiente.</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Libero!</Td>
                <Td>Iure.</Td>
                <Td>Suscipit.</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </SimpleGrid>
    </>
  );
}

export default App;
