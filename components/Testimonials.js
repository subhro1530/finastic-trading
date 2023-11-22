// components/Testimonials.js
import { Box, Text, VStack, HStack, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import styles from "@/styles/testimonials.module.css";

const Testimonials = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <VStack>
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
              margin: "1rem 3rem",
            }}
          >
            {isClient && (
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
            )}
          </Box>
          <VStack align="start" flex="2">
            <Text fontSize="2rem" fontWeight="bold" color="rgb(13,201,106)">
              Shaswata Saha
            </Text>
            <Text fontSize="1.3rem" color="black">
              Experienced Trading Strategist, Financial Markets Pro, Risk
              Management Specialist
            </Text>
            <Text
              fontSize="md"
              color="gray.500"
              fontStyle="italic"
              style={{ marginTop: "1.5rem" }}
            >
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum condimentum, mauris at fermentum&quot;
            </Text>
          </VStack>
        </Box>
      </Box>
      <Box display="flex" alignItems="center">
        <VStack align="start" flex="2" style={{ marginLeft: "1rem" }}>
          <Text fontSize="2rem" fontWeight="bold" color="rgb(13,201,106)">
            Pratham Agarwal
          </Text>
          <Text fontSize="1.3rem" color="black">
            +400k Profits in Trading Career, Financial Markets Success, Expert
            Risk Manager
          </Text>
          <Text
            fontSize="md"
            color="gray.500"
            fontStyle="italic"
            style={{ marginTop: "1.5rem" }}
          >
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum condimentum, mauris at fermentum&quot;
          </Text>
        </VStack>
        <Box
          flex="1"
          ml="4"
          style={{
            margin: "1rem",
          }}
        >
          {isClient && (
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
          )}
        </Box>
      </Box>
      <Box display="flex" alignItems="center">
        <Box
          flex="1"
          mr="4"
          style={{
            margin: "1rem 3rem",
            marginLeft: "1rem",
          }}
        >
          {isClient && (
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
          )}
        </Box>
        <VStack align="start" flex="2">
          <Text fontSize="2rem" fontWeight="bold" color="rgb(13,201,106)">
            Henda Mendis
          </Text>
          <Text fontSize="1.3rem" color="black">
            Financial Maestro, Risk Management Expert, Investment Virtuoso
          </Text>
          <Text
            fontSize="md"
            color="gray.500"
            fontStyle="italic"
            style={{ marginTop: "1.5rem" }}
          >
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum condimentum, mauris at fermentum&quot;
          </Text>
        </VStack>
      </Box>
      <Button
        align="center"
        style={{
          backgroundColor: "rgb(22,242,139)",
          color: "black",
          textAlign: "center",
          borderRadius: "2rem",
          height: "4rem",
          width: "37rem",
          fontSize: "1.9rem",
          fontFamily: "Aladin",
          fontWeight: "normal",
          margin: "2rem",
          boxShadow:
            "6px 6px 18px 0px rgba(47.81203804347826, 226.7375, 126.38365394612467, 0.5)",
        }}
        _hover={{
          backgroundColor: "white !important",
          color: "#007d3d !important",
          transition: "transform 0.3s ease-in-out",
          transform: "scale(1.2)",
        }}
      >
        I want to join #FT and earn money
      </Button>
    </VStack>
  );
};
export default Testimonials;
