import { Formik, FormikProps } from "formik";
import React, { FC } from "react";
import { RegisterDto } from "../types/auth.dto";
import { TextInput } from "./inputs";
import { FormLink, FormMain, FormTitle, SubmitButton } from "./styled";
import { useRegister } from "../hooks";
import { AuthContainer } from "./auth_container";

const FormikComponent: FC<FormikProps<RegisterDto>> = (props) => {
  return (
    <FormMain>
      <FormTitle>Register now</FormTitle>
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
      <TextInput
        label="First name"
        name="firstName"
        type="text"
        placeholder="Ex:John"
      />
      <TextInput
        label="Last name"
        name="lastName"
        type="text"
        placeholder="Ex:Doe"
      />
      <SubmitButton
        loading={props.isSubmitting}
        onClick={() => props.handleSubmit()}
      >
        Sign up!
      </SubmitButton>
      <br />
      <br />
      <FormLink href="/login">Already have account? Sign in!</FormLink>
    </FormMain>
  );
};

export const RegisterForm = () => {
  const { initialValues, onSubmit } = useRegister();
  return (
      <AuthContainer image="/images/register_image.jpg">
        <Formik
          component={FormikComponent}
          initialValues={initialValues}
          onSubmit={onSubmit}
        />
      </AuthContainer>
  );
};
