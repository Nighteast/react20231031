import React from "react";
import { Input } from "@chakra-ui/react";

function App(props) {
  function handleClick(e) {
    // 브라우저가 해야 하는 기본 기능을 취소한다.
    e.preventDefault();
    console.log("다른 일을 시킴");
  }

  function handleSubmit(e) {
    // 기본 기능 취소
    // e.preventDefault();
    console.log("다른 일을 시킴");
  }

  return (
    <div>
      <a href="https://www.naver.com" onClick={handleClick}>
        네이버
      </a>
      <div>
        <form action="https://www.daum.net/search" onSubmit={handleSubmit}>
          <input type="text" name="q" />
          <button>검색</button>
        </form>
      </div>
    </div>
  );
}

export default App;
