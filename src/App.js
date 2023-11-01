// style 적용 방법
// 일반적인 css 파일 사용
// css module 사용
// chakraui css library (공식 문서에서 많이 언급)

import { MyComp } from "./component/MyComp";
import { MyBox } from "./component/MyBox";
import { MyContainer } from "./component/MyContainer";

function App() {
  return (
    <>
      <MyComp />
      <MyBox />
      <MyContainer />
    </>
  );
}

export default App;
