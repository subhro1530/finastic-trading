// Navbar.js
import React from "react";
import {
  Box,
  Flex,
  Link,
  Button,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfo,
  faImages,
  faEnvelope,
  faComments,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import ProgressBar from "./ProgressBar";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <ProgressBar />
      <Box
        bg="rgba(0, 0, 0, 0.8)"
        p={4}
        position="fixed"
        w="100%"
        zIndex="1000"
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Box>
            <img src="/your-logo.png" alt="Logo" />
          </Box>
          <Flex gap={8} display={{ base: "none", md: "flex" }}>
            <Link
              href="#home"
              color="white"
              _hover={{
                color: "#21B084",
                transition: "color 0.3s ease-in-out",
              }}
            >
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
            <Link
              href="#about"
              color="white"
              _hover={{
                color: "#21B084",
                transition: "color 0.3s ease-in-out",
              }}
            >
              <FontAwesomeIcon icon={faInfo} /> About
            </Link>
            <Link
              href="#gallery"
              color="white"
              _hover={{
                color: "#21B084",
                transition: "color 0.3s ease-in-out",
              }}
            >
              <FontAwesomeIcon icon={faImages} /> Gallery
            </Link>
            <Link
              href="#contact"
              color="white"
              _hover={{
                color: "#21B084",
                transition: "color 0.3s ease-in-out",
              }}
            >
              <FontAwesomeIcon icon={faEnvelope} /> Contact
            </Link>
            <Link
              href="#testimonials"
              color="white"
              _hover={{
                color: "#21B084",
                transition: "color 0.3s ease-in-out",
              }}
            >
              <FontAwesomeIcon icon={faComments} /> Testimonials
            </Link>
          </Flex>
          <Flex display={{ base: "flex", md: "none" }}>
            <IconButton
              color="white"
              _hover={{ backgroundColor: "#21b084" }}
              icon={
                isOpen ? (
                  <FontAwesomeIcon icon={faTimes} />
                ) : (
                  <FontAwesomeIcon icon={faBars} />
                )
              }
              onClick={onToggle}
              bg="transparent" // No background color
            />
          </Flex>
          <Flex display={{ base: "none", md: "flex" }}>
            <Button colorScheme="teal" bg="#21B084">
              Join Us
            </Button>
          </Flex>
        </Flex>
        <Drawer placement="right" onClose={onToggle} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent bg="rgba(0, 0, 0, 0.6)" color="white">
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
            <DrawerBody display="flex" flexDirection="column">
              <Link
                href="#home"
                py={2}
                onClick={onToggle}
                _hover={{
                  color: "#21B084",
                  transition: "color 0.3s ease-in-out",
                }}
              >
                <FontAwesomeIcon icon={faHome} /> Home
              </Link>
              <Link
                href="#about"
                py={2}
                onClick={onToggle}
                _hover={{
                  color: "#21B084",
                  transition: "color 0.3s ease-in-out",
                }}
              >
                <FontAwesomeIcon icon={faInfo} /> About
              </Link>
              <Link
                href="#gallery"
                py={2}
                onClick={onToggle}
                _hover={{
                  color: "#21B084",
                  transition: "color 0.3s ease-in-out",
                }}
              >
                <FontAwesomeIcon icon={faImages} /> Gallery
              </Link>
              <Link
                href="#contact"
                py={2}
                onClick={onToggle}
                _hover={{
                  color: "#21B084",
                  transition: "color 0.3s ease-in-out",
                }}
              >
                <FontAwesomeIcon icon={faEnvelope} /> Contact
              </Link>
              <Link
                href="#testimonials"
                py={2}
                onClick={onToggle}
                _hover={{
                  color: "#21B084",
                  transition: "color 0.3s ease-in-out",
                }}
              >
                <FontAwesomeIcon icon={faComments} /> Testimonials
              </Link>
              <Button colorScheme="teal" mt={4} bg="#21B084">
                Join Us
              </Button>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
