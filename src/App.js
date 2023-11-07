import React, { createContext, useContext, useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function CComp() {
  // 3. context 사용하기 : useContext(Context)

  const message = useContext(MessageContext);

  return <Text>받은 메시지 : {message}</Text>;
}

function BComp() {
  return <CComp />;
}

function AComp() {
  return <BComp />;
}

function App(props) {
  const [message, setMessage] = useState("초기값");

  // message state를 CComp에 전달하기
  // 1. context 만들기 : createContext();
  // 2. context에 state 넣기
  //    : <Context.Provider value={state}></Context.Provider>
  // 3. tree 안에 사용하기

  return (
    <div>
      <Button
        onClick={() => {
          setMessage("바꾼 메시지!!!");
        }}
      >
        메시지 바꾸기
      </Button>
      <MessageContext.Provider value={message}>
        <AComp />
      </MessageContext.Provider>
    </div>
  );
}

// 1. context 만들기
// context 이름은 대문자로 시작하고 Context 로 끝난다.
const MessageContext = createContext(null);

export default App;
