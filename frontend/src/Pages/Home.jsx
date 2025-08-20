import React from "react";
import { Box } from "@chakra-ui/react";
import Hero from "../AppComponents/Hero";
function Home() {
  return (
    <>
      <Box border={"2px solid red"} mt="60px" w="100%" h="300vh" bg="#000">
        <Hero />
      </Box>
    </>
  );
}

export default Home;
