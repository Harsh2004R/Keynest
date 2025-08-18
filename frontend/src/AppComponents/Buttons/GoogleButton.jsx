import React from "react";
import { Button, HStack, Text, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGoogle } from "react-icons/fa";

const MotionButton = motion.create(Button);

function GoogleButton({ onClick }) {
  return (
    <MotionButton
      onClick={onClick}
      w="half"
      h="50px"
      rounded="xl"
      bg="white"
      shadow="md"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
      _hover={{ bg: "gray.50" }}
      _active={{ bg: "gray.100" }}
    >
      <HStack spacing={3}>
        <Icon as={FaGoogle} boxSize={5} color="red.500" />
        <Text fontSize={{base:"10px",md:"12px",lg:"13px"}} fontWeight="semibold" fontFamily="text">
          Continue with Google
        </Text>
      </HStack>
    </MotionButton>
  );
}

export default GoogleButton;
