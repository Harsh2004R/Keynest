import React from "react";
import Typewriter from "typewriter-effect";
import { Center, Text, Heading } from "@chakra-ui/react";
function TypeWriter() {
  return (
    <Center
      w={{base:"100%",md:"50%",lg:"50%"}}
      h={{base:"30vh",md:"60vh",lg:"50vh"}}
      py="15px"
      as="section"
      flexDirection={{ base: "column", md: "column", lg: "column" }}
      px={2}
        // bg="rgba(255, 255, 255, 0.15)"
      border="2px solid rgba(255, 255, 255, 0.3)"
      borderRadius={"xl"}
    >
      <Center flexDir={"column"} w="100%" h="100%"
      //  border="1px solid #fff"
       >
        <Heading
          fontFamily={"heading-otf"}
          fontSize={{ base: "xl", md: "3xl" }}
         mb={2}
          color="#ef8126"
        >
          Data <Text as="span" color=""></Text>
        </Heading>

        <Text
          as="div"
          fontSize={{ base: "sm", md: "xl" }}
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
      // border="1px solid #fff"
      >
        <Heading
          fontFamily={"heading-otf"}
          fontSize={{ base: "xl", md: "3xl" }}
          mb={2}
          color="#fff"
        >
          Hashed{" + "}
          <Text as="span" color="#7ed957">
            Encrypted
          </Text>
        </Heading>

        <Text
          as="div"
          fontSize={{ base: "sm", md: "xl" }}
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
