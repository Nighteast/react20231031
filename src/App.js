import { Button, Link } from "@chakra-ui/react";

function MyLink({ to, children }) {
  return (
    <div>
      <a href={to}>{children}</a>

      <Button as="a" href={to}>
        {children}
      </Button>
    </div>
  );
}

function App() {
  return (
    <>
      <MyLink to={"https://www.naver.com"}>naver로</MyLink>
      <MyLink to={"https://www.daum.net"}>daum으로</MyLink>
      {/* 
    <a href="https://www.naver.com">naver로</a>
    <a href="https://www.daum.net">daum으로</a>
     */}
    </>
  );
}

export default App;
