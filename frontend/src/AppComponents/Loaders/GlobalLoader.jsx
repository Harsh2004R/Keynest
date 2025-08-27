import { Box, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function GlobalLoader() {
  return (
    <>
      <Center h="100vh" w="100%">
        <Box display="flex" gap={6}>
          {[0, 1].map((i) => (
            <Box
              key={i}
              w="40px"
              h="40px"
              borderRadius="full"
              bg="gray.200"
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxShadow="md"
            >
              {/* Eyeball */}
              <MotionBox
                w="14px"
                h="14px"
                borderRadius="full"
                bg="black"
                animate={{
                  x: ["0%", "50%", "-50%", "0%"], // eyeballs move left → right
                  y: ["0%", "-20%", "20%", "0%"], // little bounce
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            </Box>
          ))}
        </Box>
      </Center>

      {/* Simple three dots animation loader... */}

      {/* <Center h="100vh" w="100%">
      <Box display="flex" gap={2}>
        {[0, 1, 2].map((i) => (
          <MotionBox
            key={i}
            w="12px"
            h="12px"
            borderRadius="full"
            bg="blue.400"
            animate={{
              y: ["0%", "-50%", "0%"],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </Box>
    </Center> */}
    </>
  );
}
