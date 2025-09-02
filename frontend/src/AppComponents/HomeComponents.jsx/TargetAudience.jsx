import React from "react";
import { Center, Box, Text, Grid, GridItem } from "@chakra-ui/react";

const sections = [
  { text: "", link: "", bg_color: "#f7e294ff", image_url: "", id: "1" },
  { text: "", link: "", bg_color: "#88d7edff", image_url: "", id: "2" },
  { text: "", link: "", bg_color: "#9affe4ff", image_url: "", id: "3" },
  { text: "", link: "", bg_color: "#e3b8f7ff", image_url: "", id: "4" },
];
function TargetAudience() {
  return (
    <Center
      //   border="2px solid red"
      minH={{ base: "100vh", md: "85vh", lg: "90vh" }}
      w={{ base: "100%", md: "100%", lg: "95%" }}
      m="auto"
      p={{ base: "2", md: "3", lg: "4" }}
      flexDirection={"column"}
      justifyContent={"space-between"}
    >
      <Text
        mt={{ base: "25px", md: "35px", lg: "50px" }}
        mb={{ base: "25px", md: "35px", lg: "50px" }}
        fontFamily={"main"}
        fontSize={{ base: "30px", md: "40px", lg: "50px" }}
        color="#fff"
        textAlign={"center"}
      >
        The go-to credentials manager for everyone
      </Text>
      <Box w="100%">
        <Grid
          flexDirection="column"
          gap={{ base: "2", md: "3", lg: "6" }}
          p="1"
          gridTemplateColumns={{
            base: "repeat(2,1fr)",
            md: "repeat(4,1fr)",
            lg: "repeat(4,1fr)",
          }}
          h={{ base: "80vh", md: "80vh", lg: "90vh" }}
        >
          {sections.map((el, i) => (
            <GridItem
              w="100%"
              transition="0.1s ease-in"
              _hover={{ scale: "1.02" }}
              h="100%"
              key={el.id}
              bg={el.bg_color}
              borderRadius={"xl"}
              border="1px solid rgba(255, 255, 255, 0.25)"
            ></GridItem>
          ))}
        </Grid>
      </Box>
    </Center>
  );
}

export default TargetAudience;
