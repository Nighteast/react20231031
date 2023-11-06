import React from "react";
import { Box, Button, ListItem, UnorderedList } from "@chakra-ui/react";
import { useImmer } from "use-immer";

let nextId = 1;

function App(props) {
  const [items, updateItems] = useImmer([]);

  function handleBuutonClick(todo) {
    updateItems((draft) => {
      draft.push({ id: nextId++, done: false, text: todo });
    });
  }

  function handleDoneButton(id) {
    updateItems((draft) => {
      const itemToMarkDone = draft.find((item) => item.id === id);
      if (itemToMarkDone) {
        itemToMarkDone.done = true;
      }
    });
  }

  return (
    <div>
      <Button onClick={() => handleBuutonClick("자바공부")}>자바공부</Button>
      <Button onClick={() => handleBuutonClick("점심먹기")}>점심먹기</Button>
      <Button onClick={() => handleBuutonClick("잠자기")}>잠자기</Button>

      <Box>
        <UnorderedList>
          {items.map((item) => (
            <ListItem
              key={item.id}
              textDecoration={item.done ? "line-through" : "none"}
            >
              {item.text}
              <Button onClick={() => handleDoneButton(item.id)}>완료</Button>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </div>
  );
}

export default App;
