//footer.jsx
import {
  Box,
  Text,
  HStack,
  Icon,
  VStack,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdSecurity } from "react-icons/md";
import logo from "../Brand/Memoirra-300.png";

const MotionImage = motion(Image);
const MotionIcon = motion(Icon);

export default function Footer() {
  return (
    <Box
      as="footer"
      bg="gray.900"
      color="gray.300"
      py={10}
      px={{ base: 6, md: 16 }}
      shadow="inner"
    >
      {/* Top Grid Sections */}
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={10}
        textAlign={{ base: "center", md: "left" }}
        mb={8}
      >
        {/* Brand */}
        <VStack spacing={3}>
          <HStack spacing={2}>
            <MotionImage
              src={logo}
              alt="Memoirra Logo"
              boxSize="40px"
              borderRadius={"full"}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <Text fontSize="2xl" fontWeight="bold" color="#ef8126">
              Memoirra
            </Text>
          </HStack>
          <Text fontSize="sm" color="gray.500">
            Your personal vault for passwords, IDs, and secure links.
          </Text>
        </VStack>

        {/* Quick Links */}
        <VStack spacing={2}>
          <Text fontWeight="semibold" fontSize="lg" color="#e2e2e2dd">
            Quick Links
          </Text>
          {["Home", "Features", "Security", "Support"].map((link) => (
            <Link
              key={link}
              to={link}
              color="gray.500"
              href="#"
              _hover={{
                color: "teal.300",
                textDecoration: "underline",
                transform: "translateX(3px)",
              }}
              transition="all 0.2s ease-in-out"
            >
              <Text>{link}</Text>
            </Link>
          ))}
        </VStack>

        {/* Contact */}
        <VStack spacing={2}>
          <Text fontWeight="semibold" fontSize="lg" color="#e2e2e2dd">
            Contact
          </Text>
          <HStack>
            <Icon as={MdEmail} />
            <Link
              color="gray.500"
              href="mailto:support@memoirra.com"
              _hover={{ color: "teal.300" }}
            >
              support@memoirra.com
            </Link>
          </HStack>
          <HStack>
            <Icon as={MdSecurity} />
            <Link color="gray.500" href="#" _hover={{ color: "teal.300" }}>
              Privacy Policy
            </Link>
          </HStack>
        </VStack>
      </SimpleGrid>

      {/* Divider */}
      <Box w="100%" border="0.5px solid #ef8126"></Box>

      {/* Bottom Social + Copy */}
      <VStack spacing={4} mt={4}>
        <HStack spacing={6}>
          {[
            { icon: FaGithub, link: "https://github.com/Harsh2004R" },
            {
              icon: FaLinkedin,
              link: "https://www.linkedin.com/in/harsh-sharma-0545aa25b/",
            },
          ].map((item, i) => (
            <Link to={item.link} key={i}>
              <MotionIcon
                as={item.icon} 
                boxSize={6}
                cursor="pointer"
                whileHover={{ scale: 1.3, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                _hover={{ color: "teal.300" }}
              />
            </Link>
          ))}
        </HStack>
        <Text fontSize="sm" color="gray.500">
          © {new Date().getFullYear()} Memoirra. All rights reserved.
        </Text>
      </VStack>
    </Box>
  );
}
