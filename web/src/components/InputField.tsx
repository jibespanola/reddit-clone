import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useField } from "formik";
import { type } from "node:os";
import React from "react";

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
};
// ' ' => false
// 'error message stuff' => true

export const InputField: React.FC<InputFieldProps> = ({
  label,
  size: _,
  ...props
}) => {
  const [field, { error }] = useField(props);
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{props.label}</FormLabel>
      <Input
        {...field}
        {...props}
        id={field.name}
        placeholder={props.placeholder}
      />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};
