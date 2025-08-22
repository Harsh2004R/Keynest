import React from "react";
import { Box } from "@chakra-ui/react";
import Hero from "../AppComponents/HomeComponents.jsx/Hero.jsx";
import First from "../AppComponents/HomeComponents.jsx/First.jsx";
import Carousel from "../AppComponents/HomeComponents.jsx/Carousel.jsx";
function Home() {
  return (
    <>
      <Box
        // border={"2px solid red"}
        // mt="60px"
        w="100%"
        h="300vh"
        bg="#000"
      >
        {/* <Hero /> */}
        {/* <First /> */}
        <Carousel />
      </Box>
    </>
  );
}

export default Home;
