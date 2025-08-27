import { Center, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const colors = ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#B967FF"];

export default function ConfettiLoader() {
  return (
    <Center h="100vh" w="100%" overflow="hidden" position="relative">
      {Array.from({ length: 100 }).map((_, i) => (
        <MotionBox
          key={i}
          position="absolute"
          top="-20px"
          left={`${Math.random() * 100}%`}
          w="10px"
          h="14px"
          borderRadius="sm"
          bg={colors[i % colors.length]}
          animate={{
            y: ["0vh", "100vh"],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </Center>
  );
}
