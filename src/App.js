import { useState } from "react";
import { Box, Button, List, ListItem, OrderedList } from "@chakra-ui/react";

function App() {
  const [items, setItems] = useState([]);

  function handleButtonClick(item) {
    console.log(item);
    // items의 상태를 item을 추가하도록 변경
    // const newItems = [...items];
    // newItems.push(item);

    // const newItems = [...items, item];
    // setItems(newItems);

    setItems([...items, item]);

    console.log(items);
  }

  return (
    <>
      <Button onClick={() => handleButtonClick("커피")}>커피</Button>
      <Button onClick={() => handleButtonClick("케익")}>케익</Button>
      <Button onClick={() => handleButtonClick("아이스크림")}>
        아이스크림
      </Button>
      <Button onClick={() => handleButtonClick("크로아상")}>크로아상</Button>
      <Button onClick={() => handleButtonClick("단팥빵")}>단팥빵</Button>

      <Box>
        <OrderedList>
          {items.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </OrderedList>
      </Box>
    </>
  );
}

export default App;
