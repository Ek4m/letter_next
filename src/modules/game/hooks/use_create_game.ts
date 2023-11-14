import { useCallback, useMemo } from "react";
import { CreateGameDto } from "../types";
import { FormikHelpers } from "formik";
import { GameService } from "../services";
import { SuccessResponse, ValidationErrorResponse } from "@/config/http";
import { message } from "antd";

export const useCreateGame = (onCancel: () => void) => {
  const initialValues = useMemo<CreateGameDto>(() => {
    return {
      name: "",
    };
  }, []);

  const onSubmit = useCallback(
    async (values: CreateGameDto, helpers: FormikHelpers<CreateGameDto>) => {
      const result = await GameService.createGame(values);
      if (result instanceof SuccessResponse) {
        console.log(result.response);
        onCancel();
        helpers.resetForm();
      } else if (result instanceof ValidationErrorResponse) {
        helpers.setErrors(result.errors);
      } else {
        message.error(result.message);
      }
    },
    [onCancel]
  );

  return { initialValues, onSubmit };
};
