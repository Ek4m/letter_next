import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import {
  Card,
  MyCardsContainer,
  MyPlayerContainer,
  OtherPlayersContainer,
  PlayerName,
  RoomContainer,
  StartingLoader,
} from "./styled";
import { GameContext } from "../contexts";
import { Spin } from "antd";
import { httpClient } from "@/config/http";

export const GameRoom = () => {
  const { gameStatus, gameStarted, myPlayer, otherPlayers } =
    useContext(GameContext);
  console.log(gameStarted);
  return (
    <RoomContainer>
      <CSSTransition
        in={!gameStarted}
        classNames="opacity"
        timeout={400}
        unmountOnExit
        mountOnEnter
      >
        <StartingLoader>
          <Spin size="large" fullscreen spinning={!gameStarted} />
        </StartingLoader>
      </CSSTransition>
      <OtherPlayersContainer>
        {otherPlayers.map((elem) => (
          <div key={elem.id}>
            <PlayerName>Player (#{elem.userId})</PlayerName>
          </div>
        ))}
      </OtherPlayersContainer>
      <MyPlayerContainer>
        <MyCardsContainer>
          {myPlayer?.cards.map((elem) => (
            <Card
              key={Math.random()}
              id={httpClient.defaults.baseURL + elem.image}
            />
          ))}
        </MyCardsContainer>
        <PlayerName>You (#{myPlayer?.userId})</PlayerName>
      </MyPlayerContainer>
    </RoomContainer>
  );
};
