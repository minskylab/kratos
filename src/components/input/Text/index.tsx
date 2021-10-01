import { FormControl, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

import { ReactNode } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputTextProps {
  defaultValue: string;
  isRequired: boolean;
  type?: string;
  placeholder: string;
  icon: ReactNode;
  register: UseFormRegister<FieldValues>;
  name: string;
}

const InputText = ({
  defaultValue,
  isRequired,
  type = "text",
  placeholder,
  icon,
  register,
  name,
}: InputTextProps) => {
  return (
    <FormControl mt={8} isRequired={isRequired}>
      <InputGroup>
        <InputLeftElement pointerEvents="none" color="gray.300" children={icon} />
        <Input
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          {...register(name, { required: isRequired })}
        />
      </InputGroup>
    </FormControl>
  );
};

export { InputText };
