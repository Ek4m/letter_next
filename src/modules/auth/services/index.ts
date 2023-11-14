import {
  FailResponse,
  SuccessResponse,
  ValidationErrorResponse,
  httpClient,
} from "@/config/http";
import { IUser } from "../types";
import { LoginDto } from "../types/auth.dto";
import { isAxiosError } from "axios";
import { __basicErrorMessage } from "@/constants";

export class AuthService {
  static async getMe(): Promise<SuccessResponse<IUser> | FailResponse> {
    try {
      const response = await httpClient.get("/auth/me");
      return new SuccessResponse(response.data);
    } catch (error) {
      return new FailResponse(__basicErrorMessage);
    }
  }

  static async login(
    body: LoginDto
  ): Promise<
    | SuccessResponse<{ access_token: string; refresh_token: string }>
    | FailResponse
  > {
    try {
      const response = await httpClient.post("/auth/login", body);
      return new SuccessResponse(response.data);
    } catch (error) {
      if (isAxiosError(error)) {
        const message = error.response?.data.message || __basicErrorMessage;
        return new FailResponse(message);
      } else {
        return new FailResponse(__basicErrorMessage);
      }
    }
  }

  static async register(
    body: LoginDto
  ): Promise<SuccessResponse<number> | FailResponse | ValidationErrorResponse> {
    try {
      const response = await httpClient.post("/auth/register", body);
      return new SuccessResponse(response.data.id);
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response?.status === 400) {
          return new ValidationErrorResponse(error.response.data);
        } else {
          const message = error.response?.data.message || __basicErrorMessage;
          return new FailResponse(message);
        }
      } else {
        return new FailResponse(__basicErrorMessage);
      }
    }
  }
}
