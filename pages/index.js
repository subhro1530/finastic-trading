// index.js
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import HeroSection from "@/components/HeroSection";
import PaymentGateway from "@/components/PaymentGateway";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <Box>
      <Navbar />
      <HeroSection />
      <Testimonials/>
      {/* Add the rest of your content here */}
    </Box>
  );
};

export default Index;
