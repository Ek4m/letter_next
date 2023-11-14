import { useField } from "formik";
import React, { ChangeEvent, InputHTMLAttributes, useCallback } from "react";
import {
  FormInput,
  FormInputContainer,
  FormInputLabel,
  ErrorMessage,
} from "../styled";

export const TextInput = (
  props: { label: string } & InputHTMLAttributes<any>
) => {
  const [input, meta, helper] = useField(props.name!);
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      helper.setValue(e.target.value);
    },
    [helper]
  );
  return (
    <FormInputContainer>
      <FormInputLabel htmlFor={props.id}>{props.label}</FormInputLabel>
      <FormInput {...props} value={input.value} onChange={onChange} />
      {meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
    </FormInputContainer>
  );
};
