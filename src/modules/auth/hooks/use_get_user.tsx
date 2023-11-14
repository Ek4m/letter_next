import { useQuery } from "react-query";
import { SuccessResponse } from "@/config/http";
import { AuthService } from "../services";

export const useGetUser = () =>
  useQuery(["getuser"], async () => {
    const response = await AuthService.getMe();
    if (response instanceof SuccessResponse) {
      return response.response;
    } else {
      throw new Error(response.message);
    }
  });
