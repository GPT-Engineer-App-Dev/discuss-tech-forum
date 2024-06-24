import { Container, Heading, Text, VStack, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="calc(100vh - 64px)" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Welcome to TechForum</Heading>
        <Text fontSize="xl" textAlign="center">Join our community of tech enthusiasts and engage in meaningful discussions about the latest in technology.</Text>
        <Button as={RouterLink} to="/register" colorScheme="teal" size="lg">
          Join Now
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;