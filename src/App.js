import React, { createContext, useState } from "react";
import { AComp } from "./AComp";
import { BComp } from "./BComp";

function App(props) {
  const [message, setMessage] = useState("초기값");

  return (
    <div>
      {/* 2. context에 state 넣기 : <Context.Provider value={state}></Context.Provider> */}
      <MessageContext.Provider value={{ message, setMessage }}>
        <AComp />
        <BComp />
      </MessageContext.Provider>
    </div>
  );
}

// 1. context 만들기 : createContext(null)
export const MessageContext = createContext(null);
export default App;
