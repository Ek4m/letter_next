import { _colors } from "@/constants";
import { Button, Space, Table } from "antd";
import styled from "styled-components";

export const OptionsBox = styled(Space)`
  width: 100%;
  margin-bottom: 1rem;
`;

export const GameTable = styled(Table)`
  border-left: 8px solid #f39c12;
  border-right: 8px solid #e67e22;
  border-top: 8px solid #f9ca24;
  border-bottom: 8px solid #d35400;
  table {
    border-radius: 0;
  }
  & * {
    border-radius: 0 !important;
  }
`;

export const MedivalBtn = styled(Button)`
  background-color: ${_colors.red.light};
  border-radius: 0;
  color: white;
  text-shadow: 0px 2px 1px black;
  border-left: 4px solid #f39c12;
  border-right: 4px solid #e67e22;
  border-top: 4px solid #f9ca24;
  border-bottom: 4px solid #d35400;
  box-shadow: 0px 0px 5px 1px grey;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: white !important;
    border-left: 4px solid #f39c12 !important;
    border-right: 4px solid #e67e22 !important;
    border-top: 4px solid #f9ca24 !important;
    border-bottom: 4px solid #d35400 !important;
    background-color: ${_colors.red.darker};
  }
`;

export const RoomContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(/images/board.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  border: 5px solid #ffb900;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: space-between;
`;

export const StartingLoader = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(192, 57, 43, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MyPlayerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 2rem;
`;

export const PlayerName = styled.h1`
  color: white;
  font-weight: 400;
  margin: 1rem 0;
`;

export const MyCardsContainer = styled.div`
  display: flex;
`;

export const Card = styled.div`
  width: 180px;
  height: 250px;
  background-image: url(${({ id }) => id});
  background-size: cover;
  border-radius: 6px;
  box-shadow: 0px 3px 5px 1px black;
  transition: 0.2s ease 0s;
  cursor: pointer;
  &:hover {
    transform: scale(1.5, 1.5) translateX(-1rem) rotate(-10deg);
  }
`;

export const OtherPlayersContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  padding: 2rem;
`;

export const TableContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 1rem;
`;

export const TurnSign = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  box-shadow: 0px 0px 6px 1px black inset;
  border: 2px solid white;
  background-color: orange;
`;

export const GameCards = styled.div`
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  background-color: ${_colors.red.dark};
  border-left: 4px solid #7f8c8d;
  border-right: 4px solid #34495e;
  border-top: 4px solid #bdc3c7;
  border-bottom: 4px solid #2c3e50;
`;

export const GameCardsLength = styled.h1`
  color: white;
`;
