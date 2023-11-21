// ProgressBar.js
import React, { useEffect, useState } from "react";
import { Box, Progress } from "@chakra-ui/react";

const ProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [progressColor, setProgressColor] = useState("black");

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const percentage = (scrolled / scrollHeight) * 100;
      setScrollPercentage(percentage);

      // Change color to #00FFB1 when scroll percentage is greater than 10%
      if (percentage > 10) {
        setProgressColor("#00FFB1");
      } else {
        setProgressColor("black");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="999"
      display="flex"
      justifyContent="center"
      pointerEvents="none"
    >
      <Progress
        value={scrollPercentage}
        size="xs"
        color={progressColor}
        position="absolute"
        top="0"
        left="0"
        right="0"
      />
    </Box>
  );
};

export default ProgressBar;
