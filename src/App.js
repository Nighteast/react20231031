import React from "react";
import { Box, FormControl, Select } from "@chakra-ui/react";

function App(props) {
  return (
    <div>
      <Box w={"480px"}>
        <FormControl>
          <Select placeholder="선택하세요." multiple h={"150px"}>
            <option value="value1">Lorem.</option>
            <option value="value2">Lorem.</option>
            <option value="value3">Lorem.</option>
            <option value="value4">Lorem.</option>
            <option value="value5">Lorem.</option>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default App;
