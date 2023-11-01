import Box, { color } from "./component/Box";
import Container, { color as cl } from "./component/Contatiner";

function App() {
  return (
    <div>
      <Box style={{ color: color }} />
      <Container style={{ color: cl }} />
    </div>
  );
}

export default App;
