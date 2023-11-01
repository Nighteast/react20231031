function App() {
  return (
    <div>
      {/* MyBox Component 2번 사용해 보기 */}
      <MyBox
        text={"Lorem ipsum dolor sit amet."}
        p={"10px"}
        m={"10px"}
        color={"gold"}
        bg={"black"}
      />
      <MyBox
        text={"호롤로로롤로"}
        p={"10px"}
        m={"10px"}
        color={"red"}
        bg={"black"}
      />
    </div>
  );
}

function MyBox({ p, m, color, text, bg }) {
  return (
    <div style={{ padding: p, margin: m, color: color, backgroundColor: bg }}>
      <p>{text}</p>
    </div>
  );
}

export default App;
