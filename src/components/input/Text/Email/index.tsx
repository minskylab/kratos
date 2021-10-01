import { InputText } from "components/input/Text";

import { EmailIcon } from "@chakra-ui/icons";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputEmailProps {
  register: UseFormRegister<FieldValues>;
  name: string;
}

const InputEmail = (props: InputEmailProps) => {
  return (
    <InputText
      defaultValue=""
      isRequired
      type="email"
      placeholder="Enter your email"
      icon={<EmailIcon />}
      register={props.register}
      name={props.name}
    />
  );
};

export { InputEmail };
