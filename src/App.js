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
          {/*Table>Thead>Tr>Th*4>lorem1^^^Tbody>Tr*5>Td*4>lorem1*/}
          <Table>
            <Thead>
              <Tr>
                <Th>Lorem.</Th>
                <Th>Impedit!</Th>
                <Th>Possimus.</Th>
                <Th>Fuga.</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Pariatur?</Td>
                <Td>Sunt!</Td>
                <Td>Corporis!</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Inventore.</Td>
                <Td>Officiis.</Td>
                <Td>Provident.</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Laborum?</Td>
                <Td>Cumque!</Td>
                <Td>Maxime?</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Soluta?</Td>
                <Td>Quasi?</Td>
                <Td>Ea?</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Nisi!</Td>
                <Td>Harum!</Td>
                <Td>Incidunt?</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </SimpleGrid>
    </>
  );
}

export default App;
