import React from "react";
import { List, ListItem } from "@chakra-ui/react";

function App(props) {
  const arr = ["pizza", "돈까스", "햄버거", "김치찌개"];
  const arr2 = ["손흥민", "이강인", "김민재"];
  const arr3 = ["라떼", "에스프레소", "카푸치노"];
  const arr4 = [
    { id: 0, name: "라떼" },
    { id: 1, name: "에스프레소" },
    { id: 2, name: "카푸치노" },
  ];
  // ...

  const listItems = arr.map((item, index) => (
    <ListItem key={index}>
      {index}
      {item}
    </ListItem>
  ));

  return (
    <div>
      <List>{listItems}</List>
      <hr />
      <List>
        {arr2.map((item, index) => (
          <ListItem key={index}>
            {index}
            {item}
          </ListItem>
        ))}
      </List>
      <hr />
      <List>
        {arr3.map((e, i) => (
          <ListItem key={i}>
            {i}
            {e}
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default App;
