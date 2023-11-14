import React, { useEffect } from "react";
import { GameProvider } from "@/modules/game/contexts";
import Head from "next/head";
import { GameRoom } from "@/modules/game/components";

const GameLobbyPage = () => {
  const onUnload = () => {
    return "You have attempted to leave this page. Are you sure?";
  };

  useEffect(() => {
    window.addEventListener("beforeunload", onUnload);
    return () => {
      window.removeEventListener("beforeunload", onUnload);
    };
  }, []);
  return (
    <GameProvider>
      <Head>
        <title>Game Lobby</title>
        <meta name="description" content="Love Letter web version by Ek4m" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GameRoom />
    </GameProvider>
  );
};

export default GameLobbyPage;
