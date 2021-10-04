import { Flex, Box, Text, VStack, Heading, Link } from "@chakra-ui/react";

import { LoginForm } from "#components/login/LoginForm";

const LoginPage = () => {
  return (
    <Flex
      flexDirection="column"
      width="100%"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      backgroundColor="gray.100"
    >
      <VStack
        p={8}
        spacing={4}
        width="500px"
        backgroundColor="whiteAlpha.900"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <Box textAlign="center">
          <Heading>Welcome Back</Heading>
          <Text color="gray.500">Enter your credentials to access your account.</Text>
        </Box>
        <LoginForm />
      </VStack>
      <Text color="gray.500">
        Forgot your password?{" "}
        <Link color="blue.500" href="#">
          Sign Up
        </Link>
      </Text>
    </Flex>
  );
};

export { LoginPage };
