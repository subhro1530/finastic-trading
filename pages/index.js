// index.js
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Testimonials from "@/components/Testimonials";
import HeroSection from "@/components/HeroSection";
import PaymentGateway from "@/components/PaymentGateway";

const Index = () => {
  return (
    <Box>
      <Navbar />
      <HeroSection/>
      <PaymentGateway />
      {/* Add the rest of your content here */}
      <Testimonials />
    </Box>
  );
};

export default Index;
