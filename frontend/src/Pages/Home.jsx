import React from "react";
import { Box, Center, Heading } from "@chakra-ui/react";
import Hero from "../AppComponents/HomeComponents.jsx/Hero.jsx";
import First from "../AppComponents/HomeComponents.jsx/First.jsx";
import Carousel from "../AppComponents/HomeComponents.jsx/Carousel.jsx";
import TypeWriter from "../AppComponents/HomeComponents.jsx/TypeWriter.jsx";
function Home() {
  return (
    <>
      <Box
        // border={"2px solid red"}
        mt="70px"
        w="100%"
        h="300vh"
        bg="#000"
      >
        {/* <Hero /> */}
        {/* <First /> */}
        <Carousel />

        <Center
          flexDirection={{ base: "column", md: "row", lg: "row" }}
          mt="25px"
          mb="25px"
          w="100%"
          p={5}
          minH={{ base: "50vh", md: "65vh", lg: "50vh" }}
        >
          <Heading
            textAlign={{ base: "center", md: "justify", lg: "justify" }}
            w={{ base: "100%", md: "50%", lg: "50%" }}
            p={{ base: "20px", md: "15px", lg: "15px" }}
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          >
            An enterprise assets management experience like no other
          </Heading>

          <TypeWriter />
         
        </Center>
      </Box>
    </>
  );
}

export default Home;
