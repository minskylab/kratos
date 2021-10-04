import { LockIcon } from "@chakra-ui/icons";
import { FieldValues, UseFormRegister } from "react-hook-form";

import { InputText } from "#components/input/Text";

interface InputPasswordProps {
  register: UseFormRegister<FieldValues>;
  name: string;
}

const InputPassword = (props: InputPasswordProps) => {
  return (
    <InputText
      defaultValue=""
      isRequired
      type="password"
      placeholder="Enter your password"
      icon={<LockIcon />}
      register={props.register}
      name={props.name}
    />
  );
};

export { InputPassword };
