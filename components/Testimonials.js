// components/Testimonials.js
import { useRef, useEffect, useState } from "react";
import { Box, Text, VStack, Button } from "@chakra-ui/react";
import styles from "@/styles/testimonials.module.css";

const Testimonial = ({ name, profession, quote, videoSrc, alignment }) => {
  const [isClient, setIsClient] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    setIsClient(true);

    const handleScroll = () => {
      if (boxRef.current) {
        const { top } = boxRef.current.getBoundingClientRect();
        setIsVisible(top < window.innerHeight);
        if (isVisible && !isDone) {
          // Set isDone to true when the component is visible
          setIsDone(true);
        }
      }
    };
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Call handleScroll once to check the initial position
    handleScroll();
    // Remove the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const animationClass =
    isVisible && !isDone
      ? alignment === "left"
        ? styles.leftSlideAnimation
        : styles.rightSlideAnimation
      : "";

  return (
    <Box
      ref={boxRef}
      display="flex"
      alignItems="center"
      className={styles.animationClass}
    >
      {alignment === "left" && (
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
              src={videoSrc}
              title="YouTube Video"
              allowFullScreen
              style={{
                borderRadius: "10px",
                boxShadow: "1px 1px 1px 2px rgba(0,0,0,.5)",
              }}
            ></iframe>
          )}
        </Box>
      )}
      <VStack align="start" flex="2" style={{ margin: "1rem" }}>
        <Text fontSize="2rem" fontWeight="bold" color="rgb(13,201,106)">
          {name}
        </Text>
        <Text fontSize="1.3rem" color="black">
          {profession}
        </Text>
        <Text
          fontSize="md"
          color="gray.500"
          fontStyle="italic"
          style={{ marginTop: "1.5rem" }}
        >
          &quot;{quote}&quot;
        </Text>
      </VStack>
      {alignment === "right" && (
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
              src={videoSrc}
              title="YouTube Video"
              allowFullScreen
              style={{
                borderRadius: "10px",
                boxShadow: "1px 1px 1px 2px rgba(0,0,0,.5)",
              }}
            ></iframe>
          )}
        </Box>
      )}
    </Box>
  );
};

const Testimonials = () => {
  return (
    <VStack>
      <Text
        fontSize="2rem"
        fontWeight="bold"
        fontFamily="Aladin"
        textAlign="center"
        style={{
          margin: "2rem",
          textShadow: "2px 2px 4px rgba(22,242,139,0.2)",
        }}
      >
        BECOME ONE OF MY{" "}
        <span style={{ color: "rgb(22,242,139)" }}> NEXT SUCCESS</span>{" "}
        <Text>STORIES LIKE…</Text>
      </Text>
      <Testimonial
        name="Shaswata Saha"
        profession="Experienced Trading Strategist"
        quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum, mauris at fermentum"
        videoSrc="https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID"
        alignment="left"
      />
      <Testimonial
        name="Pratham Agarwal"
        profession="+400k Profits in Trading Career"
        quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum, mauris at fermentum"
        videoSrc="https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID"
        alignment="right"
      />
      <Testimonial
        name="Henda Mendis"
        profession="Financial Maestro, Risk Management Expert, Investment Virtuoso"
        quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum, mauris at fermentum"
        videoSrc="https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID"
        alignment="left"
      />
      <Button
        align="center"
        style={{
          backgroundColor: "rgb(22,242,139)",
          color: "black",
          textAlign: "center",
          borderRadius: "2rem",
          height: "4rem",
          fontSize: "1.9rem",
          fontFamily: "Aladin",
          fontWeight: "normal",
          margin: "2rem",
          padding: "1rem",
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
