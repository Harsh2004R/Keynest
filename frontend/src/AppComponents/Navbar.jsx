import React, { useState } from "react";
import {
  Container,
  Flex,
  Text,
  Image,
  Box,
  Center,
  Menu,
  Portal,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import brand_logo from "../Brand/Memoirra-300.png";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const Links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "About",
      path: "/about",
    },
    // {
    //   name: "Private Page",
    //   path: "/private",
    // },
    // {
    //   name: "...",
    //   path: "/auth2568",
    // },
    // {
    //   name: "...",
    //   path: "/auth24",
    // },
    // {
    //   name: "...",
    //   path: "/auth22",
    // },
  ];

  return (
    <Container
      maxW={"full"}
      minH={"60px"}
      px={{base:"2",md:"2",lg:"2"}}
      pos={"relative"}
      zIndex={"1000"}
      position={"fixed"}
      top="0"
    >
      <Box
        display={{ base: "none", md: "block", lg: "block" }}
        bg="rgba(255, 255, 255, 0.15)"
        backdropFilter="blur(12px)"
        WebkitBackdropFilter="blur(12px)"
        border="1px solid rgba(255, 255, 255, 0.3)"
        boxShadow="0 8px 30px rgba(0,0,0,0.2)"
        p={{base:"0",md:"1",lg:"1"}}
        borderRadius={"full"}
      >
        <Flex>
          <Box w={{ base: "40%", md: "40%", lg: "40%" }} h="60px" flex="1">
            <Center
              borderRadius={"full"}
              w="60px"
              h="60px"
              // border={"1px solid #0000EE"}
            >
              <Menu.Root >
                <Menu.Trigger asChild>
                  <Image
                    borderRadius={"full"}
                    w="98%"
                    h="98%"
                    // src="https://avatar.iran.liara.run/public/1"
                    src={brand_logo}
                    alt="user.png"
                  />
                </Menu.Trigger>
                <Portal>
                  <Menu.Positioner>
                    <Menu.Content>
                      <Menu.ItemGroup>
                        <Link to="/profile">
                          {" "}
                          <Menu.ItemGroupLabel>Profile</Menu.ItemGroupLabel>
                        </Link>
                        <Link to="/login">
                          {" "}
                          <Menu.ItemGroupLabel>Login</Menu.ItemGroupLabel>
                        </Link>
                        <Menu.ItemGroupLabel>Logout</Menu.ItemGroupLabel>
                      </Menu.ItemGroup>
                    </Menu.Content>
                  </Menu.Positioner>
                </Portal>
              </Menu.Root>
            </Center>
          </Box>
          <Flex w={{ base: "60%", md: "60%", lg: "60%" }} h="60px">
            {Links.map((el) => (
              <Center ml="20px" key={el.path}>
                <Link to={el.path}>
                  <Text fontFamily={"text"}>{el.name}</Text>
                </Link>
              </Center>
            ))}
          </Flex>
        </Flex>
      </Box>

      {/*  Mobile Navigator from scratch... */}
      <Box
        w="100%"
        h="60px"
        justifyContent={"space-between"}
        display={{ base: "flex", md: "none", lg: "none" }}
      >
        <Center w="10%" h="100%">
          <GiHamburgerMenu
            onClick={() => setToggle((prev) => !prev)}
            size="25px"
          />
        </Center>
        {toggle && (
          <Box
            bg="#18191aff"
            zIndex={"1001"}
            pos={"absolute"}
            top={"0"}
            left={"0"}
            borderRight={"1px solid #DADADA"}
            w="80%"
            minH={"100vh"}
          >
            <Center w="16%" flexDir={"column"} h="60px">
              <IoMdClose
                onClick={() => setToggle((prev) => !prev)}
                size="35px"
              />
            </Center>
            <Flex flexDir={"column"} w={"100%"} h="100%">
              {Links.map((el) => (
                <Box
                  mt="25px"
                  padding={"2"}
                  key={el.path}
                  borderBottom={"0.5px solid #a5a5a5ff"}
                >
                  <Link to={el.path}>
                    <Text fontFamily={"text"}>{el.name}</Text>
                  </Link>
                </Box>
              ))}
            </Flex>
          </Box>
        )}

        <Center
          borderRadius={"full"}
          w="60px"
          h="60px"
          border={"1px solid lime"}
        >
          <Menu.Root>
            <Menu.Trigger asChild>
              <Image
                borderRadius={"full"}
                w="90%"
                h="90%"
                // src="https://avatar.iran.liara.run/public/1"
                src={brand_logo}
                alt=""
              />
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.ItemGroup>
                    <Link to="/profile">
                      {" "}
                      <Menu.ItemGroupLabel>Profile</Menu.ItemGroupLabel>
                    </Link>
                    <Link to="/login">
                      {" "}
                      <Menu.ItemGroupLabel>Login</Menu.ItemGroupLabel>
                    </Link>
                    <Menu.ItemGroupLabel>Logout</Menu.ItemGroupLabel>
                  </Menu.ItemGroup>
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
        </Center>
      </Box>
    </Container>
  );
}
export default Navbar;
