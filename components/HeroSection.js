// HeroSection.js
import React, { useState, useEffect } from "react";
import { Box, Button, Heading } from "@chakra-ui/react";

const HeroSection = () => {
  const [currentColor, setCurrentColor] = useState("#00FFB1");
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Trigger animation on component mount
    setIsAnimated(true);

    // Change text color every second
    const colorChangeInterval = setInterval(() => {
      setCurrentColor(generateRandomColor());
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(colorChangeInterval);
  }, []);

  // Generate a random color for smooth color-changing effect
  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <Box
      bgImage="url('/hero_bg.jpg')" // Replace with your background image
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      height="90vh"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={8}
    >
      <Box flex="1" mr={8}>
        <Heading
          fontSize={{ base: "2xl", md: "4xl", lg: "6xl" }}
          color={isAnimated ? currentColor : "transparent"} // Dynamically changing color
          background="linear-gradient(to right, #FFFFFF, #FFFFFF, #00FFB1, #FFFFFF, #FFFFFF)"
          backgroundClip="text"
          WebkitBackgroundClip="text"
          transition="color 0.3s ease-in-out"
        >
          MADE TRADING OPPORTUNITY FOR EVERYONE
        </Heading>
        <Box mt={6} display="flex">
          <Button
            colorScheme="teal"
            padding="10px 35px"
            bg="#21B084"
            mr={4}
            color="black"
            border="2px solid #21B084"
            _hover={{
              opacity: "0.8",
            }}
          >
            START LEARNING
          </Button>
          <Button
            colorScheme="teal"
            bg="transparent"
            mr={4}
            padding="15px 45px"
            border="2px solid #21B084"
            color="#21B084"
            _hover={{ bg: "#21B084", color: "black" }}
          >
            LEARN MORE
          </Button>
        </Box>
      </Box>
      <Box height="100%" width="100%" flex="1">
        {/* Replace the demo link with your 3D content */}
        <iframe
          margin="0px"
          width="100%"
          height="100%" // 16:9 aspect ratio (9/16 = 56.25)
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FVTkPxSe7IP3CQQ11tOxUQG%2FTaskAway-%2526-TerraGrow-Solutions%3Ftype%3Ddesign%26node-id%3D150%253A30%26mode%3Ddev"
          allowFullScreen
        ></iframe>
      </Box>
    </Box>
  );
};

export default HeroSection;
