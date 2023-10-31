function App() {
  const MyStyle = {
    display: "flex",
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <MyComp />
      <MyComp />
      <MyComp />
    </div>
  );
}

function MyComp() {
  const name = "흥민";
  return (
    <div
      style={{
        backgroundColor: "blue",
        color: "white",
        padding: "10px",
        width: "25%",
      }}
    >
      {name}
    </div>
  );
}

export default App;
