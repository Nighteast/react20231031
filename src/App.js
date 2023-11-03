import { useState } from "react";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  function handleInputChange1(e) {
    setNum1(Number(e.target.value));
  }

  function handleInputChange2(e) {
    setNum2(Number(e.target.value));
  }

  let result = num1 + num2;

  return (
    <>
      <input type="number" onChange={handleInputChange1} />
      +
      <input type="number" onChange={handleInputChange2} /> = {result}
    </>
  );
}

export default App;
