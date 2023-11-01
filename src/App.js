// export 된 컴포넌트(변수, 함수, 객체)를 import해서 사용
import { MyElem } from "./component/MyElem";
import { MyComp } from "./component/MyComp";

function App() {
  return (
    <>
      <MyComp />
      <MyElem />
    </>
  );
}

export default App;
