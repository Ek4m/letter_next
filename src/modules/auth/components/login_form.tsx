import { Formik, FormikProps } from "formik";
import React, { FC } from "react";
import { LoginDto } from "../types/auth.dto";
import { TextInput } from "./inputs";
import { FormLink, FormMain, FormTitle, SubmitButton } from "./styled";
import { useLogin } from "../hooks";

const FormikComponent: FC<FormikProps<LoginDto>> = (props) => {
  return (
    <FormMain>
      <FormTitle>Log in</FormTitle>
      <TextInput
        label="Email"
        name="email"
        type="email"
        placeholder="Your email..."
      />
      <TextInput
        label="Password"
        name="password"
        type="password"
        placeholder="Your password..."
      />
      <SubmitButton
        loading={props.isSubmitting}
        onClick={() => props.handleSubmit()}
      >
        Sign in!
      </SubmitButton>
      <br />
      <br />
      <FormLink href="/register">Don{"'"}t you have account? Sign up!</FormLink>
    </FormMain>
  );
};

export const LoginForm = () => {
  const { initialValues, onSubmit } = useLogin();
  return (
    <Formik
      component={FormikComponent}
      initialValues={initialValues}
      onSubmit={onSubmit}
    />
  );
};
