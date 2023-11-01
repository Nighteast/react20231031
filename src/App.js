function MyElem({ name, age, team }) {
  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          color: "yellow",
          backgroundColor: "black",
          border: "3px solid red",
        }}
      >
        <p style={{ color: "blue", border: "1px solid white" }}>{name}은/는</p>
        {age}살이고 {team}에 속한다.
      </h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <MyElem name={"흥민"} age={44} team={"토트넘"} />
      <MyElem name={"강인"} age={33} team={"파리"} />
    </div>
  );
}

export default App;
