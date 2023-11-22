// index.js
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import HeroSection from "@/components/HeroSection";
import PaymentGateway from "@/components/PaymentGateway";

const Index = () => {
  return (
    <Box>
      <Navbar />
      <HeroSection />
      {/* Add the rest of your content here */}
    </Box>
  );
};

export default Index;
