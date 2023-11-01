// default는 중괄호 없이 import한다.
// '한 파일에 하나'라는 규칙이 있기 때문에 이름은 아무렇게나 지을 수 있다.
import abcdefg, { city } from "./component/MyElem";
import MyContainer, { person, country } from "./component/MyBox";

function App() {
  return (
    <>
      <h1>{city}</h1>
      <h1>{abcdefg}</h1>
      <MyContainer />
      <h1>
        {person.age}, {person.name}
      </h1>
      <h1>{country}</h1>
    </>
  );
}

export default App;
