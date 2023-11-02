import {
  Box,
  Center,
  Checkbox,
  CheckboxGroup,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";

function App() {
  return (
    <>
      <Center>
        <Box maxW={"200px"}>
          <FormControl>
            <FormLabel>이름</FormLabel>
            <Input />
            <FormHelperText>띄어쓰기 없이 입력하세요.</FormHelperText>
          </FormControl>
        </Box>
      </Center>

      <Center>
        <Box maxW={"200px"}>
          <FormControl>
            <FormLabel></FormLabel>
            <RadioGroup>
              <Flex gap={5}>
                <Radio value="value1">Lorem.</Radio>
                <Radio value="value2">Fugiat!</Radio>
                <Radio value="value3">Exercitationem.</Radio>
                <Radio value="value4">Suscipit!</Radio>
              </Flex>
            </RadioGroup>
          </FormControl>
        </Box>
      </Center>

      <Center>
        <Box>
          <FormControl>
            <CheckboxGroup>
              <Flex gap={5}>
                <Checkbox colorScheme="orange">Lorem.</Checkbox>
                <Checkbox colorScheme="green">Totam.</Checkbox>
                <Checkbox colorScheme="purple">Est!</Checkbox>
              </Flex>
            </CheckboxGroup>
          </FormControl>
        </Box>
      </Center>
    </>
  );
}

export default App;
