import { useState } from "react";
import { Container, VStack, Heading, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the login data to your backend
    console.log("Login submitted", { email, password });
  };

  return (
    <Container centerContent maxW="container.md" mt={8}>
      <VStack spacing={8} width="100%">
        <Heading>Login</Heading>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <VStack spacing={4} align="stretch">
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <Button type="submit" colorScheme="teal">Login</Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default Login;