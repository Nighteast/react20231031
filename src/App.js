import MyBox, { address as yourAddress } from "./component/MyBox";
import MyElem, { address } from "./component/MyElem";

// as로 named export 값을 import할 때 별칭을 줄 수 있음

function App() {
  return (
    <>
      <h1>{address}</h1>
      <h1>{yourAddress}</h1>
      <MyElem />
      <MyBox />
    </>
  );
}

export default App;
