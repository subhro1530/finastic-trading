// index.js
import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faInfo, faUsers } from "@fortawesome/free-solid-svg-icons";

const Index = () => {
  return (
    <Box bg="rgba(0, 0, 0, 0.8)" minH="100vh" p={4}>
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
          {/* Replace 'your-logo.png' with the path to your logo */}
          <img src="/your-logo.png" alt="Logo" />
        </Box>
        <Flex gap={8}>
          <Link href="#home">
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
          <Link href="#info">
            <FontAwesomeIcon icon={faInfo} /> Info
          </Link>
          <Link href="#users">
            <FontAwesomeIcon icon={faUsers} /> Users
          </Link>
        </Flex>
        <Button colorScheme="teal">Join Us</Button>
      </Flex>
      {/* Add the rest of your content here */}
    </Box>
  );
};

export default Index;
