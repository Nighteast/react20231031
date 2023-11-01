import * as PropTypes from "prop-types";

function MyComp({
  m = "5px",
  p = "5px",
  color = "red",
  bg = "green",
  text = "HALLELUJAH",
}) {
  return (
    <div>
      <h1 style={{ margin: m, padding: p, color: color, backgroundColor: bg }}>
        {text}
      </h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <MyComp
        m={"30px"}
        p={"10px"}
        color={"gold"}
        bg={"black"}
        text={"hello react"}
      />
      <MyComp m={"30px"} p={"10px"} color={"gold"} bg={"black"} />
      <MyComp m={"30px"} bg={"black"} text={"hello react"} />
      <MyComp p={"10px"} color={"gold"} text={"hello react"} />
    </div>
  );
}

export default App;
