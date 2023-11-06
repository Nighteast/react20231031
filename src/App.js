import React from "react";

function App(props) {
  // HOOK: use 로 시작하는 함수
  // hook은 컴포넌트 상단에 작성해야 합니다.
  // 조건문, 반복문, 중첨된 함수 안에 작성할 수 없습니다.

  if (true) {
    // hook 호출 코드 작성 불가
  }

  for (let i = 0; i < 10; i++) {
    // hook 호출 코드 작성 불가
  }

  function hanlde() {
    // hook 호출 코드 작성 불가
  }

  return <div></div>;
}

export default App;
