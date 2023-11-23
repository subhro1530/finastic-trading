// index.js
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import HeroSection from "@/components/HeroSection";
import PaymentGateway from "@/components/PaymentGateway";
import Footer from "@/components/Footer";
// import Testimonials from "@/components/Testimonials";
import dynamic from "next/dynamic";
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  ssr: false,
});

const Index = () => {
  return (
    <Box>
      <Navbar />
      <HeroSection />
      <Testimonials />
      <Footer />
      {/* Add the rest of your content here */}
    </Box>
  );
};

export default Index;
