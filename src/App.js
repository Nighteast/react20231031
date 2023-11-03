import { Button, Center } from "@chakra-ui/react";

function App() {
  function handleOuterBoxClick(e) {
    console.log("바깥 상자 클릭됨");
    e.stopPropagation();
  }

  function handleInnerBoxClick(e) {
    console.log("안쪽 상자 클릭됨");
    e.stopPropagation();
  }

  function handleButtonClick(e) {
    console.log("버튼 클릭됨");
    e.stopPropagation();
  }

  return (
    <>
      <Center
        onClick={handleOuterBoxClick}
        bg={"purple"}
        w={"200px"}
        h={"200px"}
      >
        <Center
          onClick={handleInnerBoxClick}
          bg={"lightgreen"}
          w={"100px"}
          h={"100px"}
        >
          <Button onClick={handleButtonClick} colorScheme="telegram">
            button
          </Button>
        </Center>
      </Center>
    </>
  );
}

export default App;
