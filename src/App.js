function App() {
  return (
    <div>
      <MyText
        value={"적절한 값"}
        style={{
          color: "yellow",
          border: "5px solid blue",
          backgroundColor: "black",
        }}
      />
      <MyText
        value={"적절한 값2"}
        style={{
          color: "red",
          border: "5px solid gold",
          backgroundColor: "black",
        }}
      />
    </div>
  );
}

function MyText(props) {
  return (
    <div style={props.style}>
      <p>{props.value}</p>
    </div>
  );
}

export default App;
