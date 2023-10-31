function MyComponent1() {
  return (
    <div style={{ width: "100%" }}>
      <img
        style={{ width: "100%" }}
        src="https://i.imgur.com/Af67nss.png"
        alt="ghost"
      />
      ;
    </div>
  );
}

function App() {
  return (
    <div>
      <MyComponent1 />
      <MyComponent1 />
      <MyComponent1 />
      {/*
      <img src="https://i.imgur.com/Af67nss.png" />
      <img src="https://i.imgur.com/Af67nss.png" />
      <img src="https://i.imgur.com/Af67nss.png" />
      */}
    </div>
  );
}

export default App;
