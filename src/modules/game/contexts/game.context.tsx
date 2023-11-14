import {
  FC,
  Fragment,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useRouter } from "next/router";
import { Socket, io } from "socket.io-client";
import { httpClient } from "@/config/http";
import { IGame, IGameDetailed, JoinGameDto } from "../types";
import { AuthContext } from "@/modules/auth/contexts";
import { message } from "antd";

interface IGameContext {
  gameId?: string;
  gameStatus?: IGameDetailed;
  gameStarted: boolean;
  myPlayer?: IGameDetailed["users"][number];
  otherPlayers: IGameDetailed["users"];
}

export const GameContext = createContext<IGameContext>({
  gameId: undefined,
  gameStatus: undefined,
  gameStarted: false,
  myPlayer: undefined,
  otherPlayers: [],
});

let socket: Socket<any, any>;

export const GameProvider: FC<PropsWithChildren> = ({ children }) => {
  const [gameId, setGameId] = useState<string>();
  const [gameStatus, setGameStatus] = useState<IGameDetailed>();

  const { query } = useRouter();
  const { userData } = useContext(AuthContext);

  useEffect(() => {
    setGameId(query.gameId as string);
  }, [query]);

  useEffect(() => {
    socket = io(httpClient.defaults.baseURL!);
    return () => {
      socket.close();
    };
  }, []);

  useEffect(() => {
    if (gameId && userData) {
      const body: JoinGameDto = { gameId: +gameId, userId: userData.id };
      socket.emit("join_game", body);
    }
  }, [gameId, userData]);

  useEffect(() => {
    socket.on(
      "user_connected",
      (value: { userId: number; game: IGameDetailed }) => {
        setGameStatus({ ...value.game, users: [] });
        message.success(`User #${value.userId} connected`);
      }
      );
      socket.on("user_disconnected", (value: any) => {
        console.log("_SAAAAAAAAAAAAAAAAAAAAAA");
      message.error(`User #${value} disconnected`);
    });
    socket.on("room_full", () => {
      message.warning("ROOM IS FULL");
    });
    socket.on("game_state", (value: IGameDetailed) => {
      setGameStatus(value);
    });
    socket.on("game_started", (): void => {
      message.warning("GAME STARTED");
    });
    return () => {
      setGameId(undefined);
      setGameStatus(undefined);
      socket.off("user_disconnected");
      socket.off("user_connected");
      socket.off("room_full");
      socket.off("game_state");
      socket.off("game_started");
    };
  }, []);

  const gameStarted = useMemo(() => {
    if (gameStatus && !!gameStatus.isStarted) return true;
    return false;
  }, [gameStatus]);

  const otherPlayers = useMemo(() => {
    if (userData && gameStatus) {
      const myIndex = gameStatus.users.findIndex(
        (elem) => elem.userId === userData.id
      );
      if (myIndex >= 0) {
        const playersBefore = gameStatus.users.slice(0, myIndex);
        const playersAfter = gameStatus.users.slice(myIndex + 1);
        playersBefore.reverse();
        playersAfter.reverse();
        return [...playersBefore, ...playersAfter];
      }
    }
    return [];
  }, [gameStatus, userData]);

  const myPlayer = useMemo(() => {
    if (userData && gameStatus)
      return gameStatus.users.find((elem) => elem.userId === userData.id);
  }, [gameStatus, userData]);

  return (
    <GameContext.Provider
      value={{ gameId, gameStatus, gameStarted, myPlayer, otherPlayers }}
    >
      {children}
    </GameContext.Provider>
  );
};
