import React, { useState } from "react";
import {
  Box,
  HStack,
  Center,
  Text,
  Flex,
  Field,
  Input,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import GoogleButton from "../AppComponents/Buttons/GoogleButton";
import GithubButton from "../AppComponents/Buttons/GithubButton";
import { FaEye } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";
import "../Styles/font.css";
function Signup() {
  const [show, setShow] = useState(false);
  const MotionBox = motion.create(Box);
  const onSignup = () => {};
  const toggleEye = () => {
    setShow((prev) => !prev);
  };
  return (
    <Center w="100%" bg="#000" minH={"100vh"}>
      <MotionBox
        p={{ base: 2, md: 2 }}
        rounded="2xl"
        shadow="2xl"
        maxW="lg"
        w="full"
        bg="rgba(255, 255, 255, 0.07)"
        hminH={{ base: "60vh", md: "70vh", lg: "80vh" }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box
          w="100%"
          h="100%"
          //  border={"2px solid red"}
          padding={"2"}
        >
          <Text
            fontFamily={"text"}
            textAlign={"center"}
            fontSize={{ base: "3xl", md: "4xl", lg: "4xl" }}
            color={"#fff"}
          >
            Register
          </Text>

          <Flex flexDirection={"column"} justify={"space-between"}>
            <form onSubmit={onSignup}>
              <Field.Root required>
                <Field.Label fontFamily={"text"} color={"#fff"}>
                  Email <Field.RequiredIndicator />
                </Field.Label>
                <Input
                  color={"#799edaff"}
                  type="email"
                  _placeholder={{
                    color: "grey.300",
                    fontSize: "xs",
                    fontFamily: "text",
                    fontWeight: "500",
                  }}
                  placeholder="Enter your email"
                />
                <Field.HelperText fontSize={"12px"} fontFamily={"heading-otf"}>
                  We'll never share your email.
                </Field.HelperText>
              </Field.Root>

              <Field.Root>
                <Field.Label fontFamily={"text"} color={"#fff"}>
                  Phone <Field.RequiredIndicator />
                </Field.Label>
                <Input
                  color={"#799edaff"}
                  type="number"
                  _placeholder={{
                    color: "grey.300",
                    fontSize: "xs",
                    fontFamily: "text",
                    fontWeight: "500",
                  }}
                  placeholder="Your contact number"
                />
              </Field.Root>

              <Field.Root required>
                <Field.Label fontFamily={"text"} color={"#fff"}>
                  Password <Field.RequiredIndicator />
                </Field.Label>
                <Flex w="100%">
                  <Input
                    color={"#799edaff"}
                    flex="1"
                    type="password"
                    _placeholder={{
                      color: "grey.300",
                      fontSize: "xs",
                      fontFamily: "text",
                      fontWeight: "500",
                    }}
                    placeholder="Create your password (min 8)"
                  />
                  <Center
                    onClick={toggleEye}
                    borderRadius={"sm"}
                    border={"1px solid #262626ff"}
                    boxSize={"40px"}
                    flexShrink={0}
                  >
                    {show ? <FaEye /> : <LuEyeClosed />}
                  </Center>
                </Flex>
                <Field.HelperText fontSize={"12px"} fontFamily={"heading-otf"}>
                  Password length should be min 8 letters
                </Field.HelperText>
              </Field.Root>

              <HStack
                justifyContent={"space-evenly"}
                py="15px"
                spacing={4}
                w="full"
                mx="auto"
              >
                <GoogleButton onClick={() => console.log("Google Login")} />
                <GithubButton onClick={() => console.log("GitHub Login")} />
              </HStack>

              <Button
                my="2"
                fontFamily={"heading"}
                bgColor="#2020e8ff"
                fontSize={{ base: "12px", md: "12px", lg: "14px" }}
                color="#fff"
                type="submit"
                w="100%"
              >
                Signup
              </Button>
            </form>
          </Flex>
        </Box>
      </MotionBox>
    </Center>
  );
}

export default Signup;
