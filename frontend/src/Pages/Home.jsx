import React from "react";
import { Box, Center, Heading ,Text} from "@chakra-ui/react";
import Hero from "../AppComponents/HomeComponents.jsx/Hero.jsx";
import Carousel from "../AppComponents/HomeComponents.jsx/Carousel.jsx";
import TargetAudience from "../AppComponents/HomeComponents.jsx/TargetAudience.jsx";
import Footer from "../AppComponents/Footer.jsx"
function Home() {
  return (
    <>
      <Box
        // border={"2px solid red"}
        mt="70px"
        w="100%"
        h="600vh"
        bg="#000"
      >
        <Carousel />

        <Center
          flexDirection={"column"}
          mt="25px"
          mb="25px"
          w="100%"
          p={5}
          // border="2px solid lime"
        h="auto"
        >
          <Text
            textAlign="center"
            w={{ base: "100%", md: "90%", lg: "80%" }}
            mt={{ base: "20px", md: "50px", lg: "50px" }}
            mb={{ base: "20px", md: "50px", lg: "50px" }}
            fontSize={{ base: "30px", md: "40px", lg: "50px" }}
            fontFamily={"main"}
            fontWeight={"200"}
          >
            An enterprise assets management experience like no other
          </Text>
          <Hero />
        </Center>

        <TargetAudience />
      </Box>
      <Footer/>
    </>
  );
}

export default Home;
