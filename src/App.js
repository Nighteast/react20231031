import { Card, CardBody, CardHeader } from "@chakra-ui/react";

function MyBox({ color, bg, children }) {
  return (
    <div>
      <Card w={"250px"} color={color} bg={bg}>
        <CardBody>{children}</CardBody>
      </Card>
    </div>
  );
}

function App() {
  return (
    <div>
      <MyBox color="aqua" bg="black">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus,
        quasi!
      </MyBox>
      <MyBox color="teal" bg="gray.200">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ipsam.
      </MyBox>
    </div>
  );
}

export default App;
