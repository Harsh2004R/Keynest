import React from "react";
import Typewriter from "typewriter-effect";
import { Center, Box, Text, Heading } from "@chakra-ui/react";
function TypeWriter() {
  return (
    <Center
      w="100%"
      h={{base:"60vh",md:"60vh",lg:"50vh"}}
      py="15px"
      as="section"
      flexDirection={{ base: "column", md: "column", lg: "row" }}
      px={2}
    //   border="1px solid red"
    >
      <Center flexDir={"column"} w="100%" h="100%"
    //    border="1px solid #fff"
       >
        <Heading
          fontFamily={"heading-otf"}
          fontSize={{ base: "3xl", md: "5xl" }}
          mb={4}
          color="#fff"
        >
          Data <Text as="span" color="#ef8126"></Text>
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
                "Name : Jhon Doe",
                "Password: John@xyz806",
                "Secret Keys: e94a17cb19f483fb03d4",
                "Top Privacy which You Can Trust 🛡️ ",
              ],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 30,
            }}
          />
        </Text>
      </Center>

      {/* Hashed typing box... */}

      <Center flexDir={"column"} w="100%" h="100%" 
    //   border="1px solid #fff"
      >
        <Heading
          fontFamily={"heading-otf"}
          fontSize={{ base: "3xl", md: "5xl" }}
          mb={4}
          color="#fff"
        >
          Hashed{" + "}
          <Text as="span" color="#ef8126">
            Encrypted
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
                "Name : Jhon Doe",
                "Password: $2b$05.kazb",
                "Secret Keys: <::#fdf64dfdf@4f56f>",
                "Top Privacy which You Can Trust 🛡️ ",
              ],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 30,
            }}
          />
        </Text>
      </Center>
    </Center>
  );
}

export default TypeWriter;
