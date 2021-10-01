import { Box, Button } from "@chakra-ui/react";

import { useForm } from "react-hook-form";

import { InputEmail } from "components/input/Text/Email";
import { InputPassword } from "components/input/Text/Password";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => alert(JSON.stringify(data));

  return (
    <Box w="100%">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputEmail register={register} name="email"></InputEmail>
        <InputPassword register={register} name="password"></InputPassword>
        <Button width="full" colorScheme="blue" mt={6} type="submit">
          Sign In
        </Button>
      </form>
    </Box>
  );
};

export { LoginForm };
