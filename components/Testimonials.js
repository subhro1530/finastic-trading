// components/Testimonials.js
import { Box, Center, Flex, Link, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

const Testimonials = () => {
  return (
    <Box>
      <Text
        fontSize="2rem"
        fontWeight="bold"
        fontFamily="Aladin"
        textAlign="center"
        style={{
          textShadow: "2px 2px 4px rgba(22,242,139,0.2)",
        }}
      >
        BECOME ONE OF MY{" "}
        <span style={{ color: "rgb(22,242,139)" }}> NEXT SUCCESS</span>{" "}
        <Text>STORIES LIKE…</Text>
      </Text>
      <Box display="flex" alignItems="center">
        <Box
          flex="1"
          mr="4"
          style={{
            margin: "1rem",
          }}
        >
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID"
            title="YouTube Video"
            allowFullScreen
            style={{
              borderRadius: "10px",
              boxShadow: "1px 1px 1px 2px rgba(0,0,0,.5)",
            }}
          ></iframe>
        </Box>
        <VStack align="start" flex="2">
          <Text fontSize="xl" fontWeight="bold" color="rgb(22,242,139)">
            John Doe
          </Text>
          <Text fontSize="md" color="black">
            Frontend Developer
          </Text>
          <Text fontSize="md" color="gray.500" fontStyle="italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            condimentum, mauris at fermentum
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default Testimonials;
