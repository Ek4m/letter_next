import { RegisterForm } from "@/modules/auth/components";
import Head from "next/head";
import React from "react";

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Register | Love Letter</title>
        <meta name="description" content="Love Letter web version by Ek4m" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <RegisterForm />
    </>
  );
};

export default LoginPage;
