import { useRef, useEffect } from "react";
import { Box, Center, Text, Heading } from "@chakra-ui/react";
import TypeWriter from "./TypeWriter.jsx"
export default function Hero() {
  const backgroundVideo ="https://res.cloudinary.com/djbe55v48/video/upload/v1755673751/memoirra_assets/HomeV1_otg17v.mp4";
  const videoRef = useRef();
  useEffect(() => {
    const video = videoRef.current;
    video.play();
  }, []);
  return (
    <Center
      width="100%"
      justifyContent={"space-around"}
      flexDirection={{ base: "column", md: "row", lg: "row" }}
      // border={"2px solid blue"}
      minH={{ base: "50vh", md: "80vh", lg: "60vh" }}
    >
      <Box
        as="section"
        w={{ base: "100%", md: "40%" ,lg:"40%"}}
       h="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        color="white"
        textAlign="center"
        px={2}
        // border="3px solid cyan"
      >
       <TypeWriter/>

      </Box>
      <Box
        width={{ base: "100%", md: "65%", lg: "55%" }}
        minH={{ base: "20vh", md: "50vh", lg: "60vh" }}
        display="flex"
        // border={"1px solid cyan"}
        mt={{base:"10px",md:"none",lg:"none"}}
        justifyContent="center"
        alignItems="center"
        position="relative"
        overflow="hidden"
      >
        <video
          ref={videoRef}
          id="background-video"
          src={backgroundVideo}
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
    </Center>
  );
}
