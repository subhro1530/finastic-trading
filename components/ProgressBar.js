import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

const ProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const percentage = (scrolled / scrollHeight) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const progressBarStyle = {
    height: "4px",
    width: `${scrollPercentage}%`,
    backgroundColor: "#00FFB1",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "999",
  };

  return <Box style={progressBarStyle} />;
};

export default ProgressBar;
