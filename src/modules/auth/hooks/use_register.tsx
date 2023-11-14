import { useCallback, useMemo } from "react";
import { RegisterDto } from "../types/auth.dto";
import { FormikHelpers } from "formik";
import { AuthService } from "../services";
import { SuccessResponse, ValidationErrorResponse } from "@/config/http";
import { message } from "antd";
import { __access_token, __refresh_token } from "@/constants";
import { useRouter } from "next/router";

export const useRegister = () => {
  const router = useRouter();
  const initialValues = useMemo<RegisterDto>(() => {
    return {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    };
  }, []);
  const onSubmit = useCallback(
    async (body: RegisterDto, helpers: FormikHelpers<RegisterDto>) => {
      const response = await AuthService.register(body);
      if (response instanceof SuccessResponse) {
        router.push("/login");
      } else if (response instanceof ValidationErrorResponse) {
        helpers.setErrors(response.errors);
      } else {
        message.error(response.message);
      }
    },
    [router]
  );

  return { initialValues, onSubmit };
};
