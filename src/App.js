import { Button } from "@chakra-ui/react";
import { ArrowRightIcon, EmailIcon } from "@chakra-ui/icons";

function App() {
  return (
    <>
      <Button colorScheme="blue">Lorem.</Button>
      <Button colorScheme="red">Lorem.</Button>
      <Button colorScheme="yellow">Odio.</Button>
      <Button colorScheme="orange">Accusantium?</Button>
      <Button colorScheme="teal" size={"sm"}>
        Quia!
      </Button>
      <Button colorScheme="telegram" size={"lg"}>
        Soluta!
      </Button>
      <Button colorScheme="orange" variant={"ghost"}>
        Doloribus.
      </Button>
      <Button variant={"link"}>Voluptatibus!</Button>
      <Button leftIcon={<EmailIcon />}>Eum.</Button>
      <Button rightIcon={<ArrowRightIcon />}>Quod.</Button>
      <Button isLoading>Dicta.</Button>
      <Button isLoading loadingText={"전송중"}>
        Iste.
      </Button>
      <Button>Aperiam?</Button>
      <Button>Dolore!</Button>
      <Button>Neque!</Button>
      <Button>Porro.</Button>
      <Button>Perferendis.</Button>
      <Button>Voluptate.</Button>
      <Button>Esse.</Button>
      <Button>Dolorem.</Button>
      <Button>Ea.</Button>
      <Button>Qui.</Button>
      <Button>Temporibus.</Button>
      <Button>Pariatur.</Button>
      <Button>Rem!</Button>
      <Button>Veniam.</Button>
      <Button>Doloribus!</Button>
      <Button>Distinctio?</Button>
      <Button>Nemo.</Button>
      <Button>Nesciunt.</Button>
      <Button>Perferendis.</Button>
    </>
  );
}

export default App;
