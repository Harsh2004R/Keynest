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
import { useForm } from "react-hook-form";
import GoogleButton from "../AppComponents/Buttons/GoogleButton";
import GithubButton from "../AppComponents/Buttons/GithubButton";
import { FaEye } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";
import "../Styles/font.css";

function Login() {
  const [show, setShow] = useState(false);
  const MotionBox = motion.create(Box);
  // useForm hook
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    reset();
    //  API call here
  };
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
        minH={{ base: "auto", md: "auto", lg: "auto" }}
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
            Login
          </Text>

          <Flex flexDirection={"column"} justify={"space-between"}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Field.Root py="14px" required>
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
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                      message: "Invalid email address",
                    },
                  })}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <Text color="red.400" fontSize="xs">
                    {errors.email.message}
                  </Text>
                )}
              </Field.Root>

              <Field.Root py="14px" required>
                <Field.Label fontFamily={"text"} color={"#fff"}>
                  Password <Field.RequiredIndicator />
                </Field.Label>
                <Flex w="100%">
                  <Input
                    color={"#799edaff"}
                    flex="1"
                    type={show ? "text" : "password"}
                    _placeholder={{
                      color: "grey.300",
                      fontSize: "xs",
                      fontFamily: "text",
                      fontWeight: "500",
                    }}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                    })}
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
                {errors.password && (
                  <Text color="red.400" fontSize="xs">
                    {errors.password.message}
                  </Text>
                )}
              </Field.Root>

              <HStack
                justifyContent={"space-evenly"}
                spacing={4}
                w="full"
                py="14px"
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
                // isLoading={isSubmitting}
                disabled={isSubmitting}
              >
                Login
              </Button>
            </form>
          </Flex>
        </Box>
      </MotionBox>
    </Center>
  );
}

export default Login;
