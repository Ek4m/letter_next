import { useQuery } from "react-query";
import { GameService } from "../services";
import { SuccessResponse } from "@/config/http";
import { message } from "antd";

export const useGetActiveGames = () =>
  useQuery(
    ["getactivegames"],
    async () => {
      const result = await GameService.getActiveGames();
      if (result instanceof SuccessResponse) return result.response;
      message.error(result.message);
    },
    { refetchInterval: 5000 }
  );
