import React, { useState } from "react";
import { Button, Input, List, ListItem } from "@chakra-ui/react";

function App(props) {
  const [coffees, setCoffees] = useState(["라떼"]);
  const [text, setText] = useState("");

  function handleButtonClick() {
    // 직전 상태 배열을 조작하면 안되고
    // coffees.push(text);

    // 새 배열을 만들어서 set state 해야 함
    const newCoffees = [...coffees]; // 배열 복사
    newCoffees.push(text);

    setCoffees(newCoffees);

    console.log(coffees);
  }

  return (
    <div>
      <Input value={text} onChange={(e) => setText(e.target.value)} />
      <Button onClick={handleButtonClick}>추가</Button>

      <List onChange={(e) => setCoffees(e.target.value)}>
        {coffees.map((c, index) => (
          <ListItem key={index}>{c}</ListItem>
        ))}
      </List>
    </div>
  );
}

export default App;
