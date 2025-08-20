import { useRef, useEffect } from "react";
import { Box, Center, Text, Heading } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
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
      flexDirection={{ base: "column", md: "row", lg: "row" }}
      // border={"2px solid blue"}
      minH={{ base: "50vh", md: "80vh", lg: "60vh" }}
    >
      <Box
        as="section"
        w={{ base: "100%", md: "40%" ,lg:"40%"}}
        minH={{base:"30vh",md:"80vh",lg:"60vh"}}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        color="white"
        textAlign="center"
        px={2}
      >
        <Heading
          fontFamily={"heading-otf"}
          fontSize={{ base: "3xl", md: "5xl" }}
          mb={4}
          color="#fff"
        >
          Welcome to{" "}
          <Text as="span" color="#ef8126">
            Memoirra
          </Text>
        </Heading>

        <Text
          as="div"
          fontSize={{ base: "xl", md: "2xl" }}
          textShadow="0 0 25px #0062ffff"
          color={"#ffffffff"}
          fontWeight="medium"
          fontFamily={"text"}
        >
          <Typewriter
            options={{
              strings: [
                "Your Digital Vault",
                "Store your gmail | password | links and many more Securely",
                "Access Anywhere, Anytime ☁️",
                "Top Privacy which You Can Trust 🛡️ ",
              ],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 30,
            }}
          />
        </Text>
      </Box>
      <Box
        width={{ base: "100%", md: "65%", lg: "60%" }}
        minH={{ base: "20vh", md: "50vh", lg: "60vh" }}
        display="flex"
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
