import {
  Box,
  Flex,
  Spacer,
  Heading,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const MotionBox = motion(Box);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1.5rem"
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Heading as="h1" size="md" pr={4}>
        QR Game
      </Heading>
      <MotionBox
        display={{ base: "none", md: "flex" }}
        alignItems="center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.32 }}
      >
        <Button
          variant="ghost"
          mr={3}
          mt={{ base: 2, md: 0 }}
          paddingTop={{ base: 2, md: 1 }}
        >
          Home
        </Button>
        <Button
          variant="ghost"
          mr={3}
          mt={{ base: 2, md: 0 }}
          paddingTop={{ base: 2, md: 1 }}
        >
          About
        </Button>
        <Button
          variant="ghost"
          mr={3}
          mt={{ base: 2, md: 0 }}
          paddingTop={{ base: 2, md: 1 }}
        >
          Services
        </Button>
        <Button
          variant="ghost"
          mt={{ base: 2, md: 0 }}
          paddingTop={{ base: 2, md: 1 }}
        >
          Contact
        </Button>
      </MotionBox>

      <Spacer />

      <MotionBox
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        cursor="pointer"
        border="1px"
        borderColor="gray.300"
        borderRadius="50%"
        p={1}
      >
        {colorMode === "light" ? (
          <SunIcon onClick={toggleColorMode} w={6} h={6} />
        ) : (
          <MoonIcon onClick={toggleColorMode} w={6} h={6} />
        )}
      </MotionBox>
    </Flex>
  );
};

export default Navbar;
