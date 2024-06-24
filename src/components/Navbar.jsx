import { Box, Flex, Button, Heading } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.100" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading as="h1" size="lg">
          <RouterLink to="/">TechForum</RouterLink>
        </Heading>
        <Flex alignItems="center">
          <Button as={RouterLink} to="/forum" colorScheme="teal" variant="ghost" mr={3}>
            Forum
          </Button>
          <Button as={RouterLink} to="/login" colorScheme="teal" variant="ghost" mr={3}>
            Login
          </Button>
          <Button as={RouterLink} to="/register" colorScheme="teal">
            Register
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;