import { useCallback, useContext, useMemo } from "react";
import { LoginDto } from "../types/auth.dto";
import { FormikHelpers } from "formik";
import { AuthService } from "../services";
import { SuccessResponse } from "@/config/http";
import { message } from "antd";
import Cookies from "js-cookie";
import { __access_token, __refresh_token } from "@/constants";
import { AuthContext } from "../contexts";
import { useRouter } from "next/router";

export const useLogin = () => {
  const { refresh } = useContext(AuthContext);
  const router = useRouter();

  const initialValues = useMemo<LoginDto>(() => {
    return {
      email: "",
      password: "",
    };
  }, []);

  const onSubmit = useCallback(
    async (body: LoginDto, helpers: FormikHelpers<LoginDto>) => {
      const response = await AuthService.login(body);
      if (response instanceof SuccessResponse) {
        Cookies.set(__access_token, response.response.access_token);
        Cookies.set(__refresh_token, response.response.refresh_token);
        await refresh();
        router.push("/");
      } else {
        message.error(response.message);
      }
    },
    [router, refresh]
  );

  return { initialValues, onSubmit };
};
