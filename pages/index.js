// index.js
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Testimonials from "@/components/Testimonials";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <Box>
      <Navbar />
      {/* Add the rest of your content here */}
      <Testimonials />
    </Box>
  );
};

export default Index;
