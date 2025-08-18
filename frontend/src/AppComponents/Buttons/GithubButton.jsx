import React from "react";
import { Button, HStack, Text, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
const MotionButton = motion.create(Button);

function GithubButton({ onClick }) {
  return (
    <MotionButton
      onClick={onClick}
      w="half"
      h="50px"
      rounded="xl"
      bg="black"
      color="white"
      shadow="md"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
      _hover={{ bg: "gray.800" }}
      _active={{ bg: "gray.900" }}
    >
      <HStack spacing={3}>
        <Text fontSize={{base:"10px",md:"12px",lg:"13px"}}  fontWeight="semibold" fontFamily="text">
          Continue with GitHub
        </Text>
        <Icon as={FaGithub} boxSize={5} />
      </HStack>
    </MotionButton>
  );
}

export default GithubButton;
