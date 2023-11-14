import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import {
  Card,
  GameCards,
  GameCardsLength,
  MyCardsContainer,
  MyPlayerContainer,
  OtherPlayersContainer,
  PlayerName,
  RoomContainer,
  StartingLoader,
  TurnSign,
} from "./styled";
import { GameContext } from "../contexts";
import { Space, Spin } from "antd";
import { httpClient } from "@/config/http";
import { GiFleurDeLys, GiCardPlay } from "react-icons/gi";

export const GameRoom = () => {
  const { gameStatus, gameStarted, myPlayer, otherPlayers, onPressCard } =
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
          <Space key={elem.id}>
            <PlayerName>Player (#{elem.userId})</PlayerName>
            {elem.turn && (
              <TurnSign>
                <GiFleurDeLys size={20} color="white" />
              </TurnSign>
            )}
          </Space>
        ))}
      </OtherPlayersContainer>
      <MyPlayerContainer>
        <GameCards>
          <GiCardPlay size={30} color="white" />
          <GameCardsLength>{gameStatus?.cards.length}</GameCardsLength>
        </GameCards>
        <Space direction="vertical" align="end">
          <MyCardsContainer>
            {myPlayer?.cards.map((elem) => (
              <Card
                onClick={() => onPressCard(elem.rank)}
                key={Math.random()}
                id={httpClient.defaults.baseURL + elem.image}
              />
            ))}
          </MyCardsContainer>
          <Space>
            <PlayerName>You (#{myPlayer?.userId})</PlayerName>
            {myPlayer && myPlayer.turn && (
              <TurnSign>
                <GiFleurDeLys size={25} color="white" />
              </TurnSign>
            )}
          </Space>
        </Space>
      </MyPlayerContainer>
    </RoomContainer>
  );
};
