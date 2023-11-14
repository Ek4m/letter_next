import {
  FailResponse,
  SuccessResponse,
  ValidationErrorResponse,
  httpClient,
} from "@/config/http";
import { CreateGameDto, IGame } from "../types";
import { __basicErrorMessage } from "@/constants";
import { isAxiosError } from "axios";

export class GameService {
  static async getActiveGames(): Promise<
    SuccessResponse<IGame[]> | FailResponse
  > {
    try {
      const response = await httpClient.get("/game");
      return new SuccessResponse(response.data);
    } catch (error: any) {
      return new FailResponse(error.message || __basicErrorMessage);
    }
  }

  static async createGame(
    body: CreateGameDto
  ): Promise<SuccessResponse<any> | FailResponse | ValidationErrorResponse> {
    try {
      const response = await httpClient.post("/game/create_room", body);
      return new SuccessResponse(response.data);
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
