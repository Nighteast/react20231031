import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { Box, Button, Flex } from "@chakra-ui/react";

function HomeComp() {
  // 경로 이동 시 useNavigate hook 사용 해야 함
  const navigate = useNavigate();

  return (
    <Box>
      <Flex gap={"10px"}>
        <Box>
          {/* 경로 이동 시 javascript 코드를 그냥 쓰면 안 됨 */}
          <Button onClick={() => (window.location.href = "/apath")}>
            a로 가기
          </Button>
        </Box>
        <Box>
          <Button onClick={() => (window.location.href = "/bpath")}>
            b로 가기
          </Button>
        </Box>
        <Box>
          <Button onClick={() => navigate("/apath")}>a로 가기!</Button>
        </Box>
        <Box>
          <Button onClick={() => navigate("/bpath")}>b로 가기!</Button>
        </Box>
      </Flex>
      <Outlet />
    </Box>
  );
}

function AComp() {
  return <Box>에이 컴포넌트</Box>;
}

function BComp() {
  return <Box>비 컴포넌트</Box>;
}

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeComp />}>
      <Route path="apath" element={<AComp />} />
      <Route path="bpath" element={<BComp />} />
    </Route>,
  ),
);

function App(props) {
  return <RouterProvider router={routes} />;
}

export default App;
