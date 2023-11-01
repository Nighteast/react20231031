function MyHeader(props) {
  return (
    <>
      <h1 style={{ color: props.color, backgroundColor: props.bg }}>
        {props.text}
      </h1>
    </>
  );
}

function App() {
  return (
    <div>
      <MyHeader color={"white"} bg={"black"} text={"내가 만든 제목"} />
      <MyHeader color={"orange"} bg={"skyblue"} text={"다시 만든 제목"} />
      {/*
      <div style="color: white, background-color: black">
        <h1>내가 만든 제목</h1>
      </div>
      <div style="color: orange, background-color: skyblue">
        <h1>다시 만든 제목</h1>
      </div>
      */}
    </div>
  );
}

export default App;
