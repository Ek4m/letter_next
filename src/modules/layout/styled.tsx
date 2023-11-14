import { _colors } from "@/constants";
import Link from "next/link";
import styled from "styled-components";

export const MainAppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(https://cdreplat-a.akamaihd.net/web-content/rg.com/images/content/wallpapers/kingsroad-knight-adamar-1920x1080.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  @media (max-width: 1000px) {
    height: auto;
  }
`;

export const LeftSideBar = styled.div`
  width: 280px;
  height: 100vh;
  border-left: 8px solid #f39c12;
  border-right: 8px solid #e67e22;
  border-top: 8px solid #f9ca24;
  border-bottom: 8px solid #d35400;
  white-space: nowrap;
  text-overflow: ellipsis;
  background: linear-gradient(
    to bottom,
    ${_colors.red.light},
    ${_colors.red.darker},
    ${_colors.red.dark}
  );
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const QuestionList = styled.div`
  width: 100%;
  height: calc(100% - 150px);
  position: relative;
  padding: 1rem;
  overflow: hidden scroll;
`;

export const QuestionListTitle = styled.h2`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  color: white;
  svg {
    margin-right: 5px;
  }
`;

export const UserInfo = styled.div`
  margin: 0 1rem;
  height: 80px;
  border-top: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserInfoName = styled.p`
  color: white;
`;

export const UserInfoMenuButton = styled.button`
  background: none;
  border: none;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s ease 0s;
  border-radius: 50%;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const QuestionListElement = styled(Link)`
  color: white;
  width: 100%;
  display: flex;
  text-decoration: none;
  font-weight: 400;
  font-size: 15px;
  overflow: hidden;
  transition: 0.2s ease 0s;
  border-radius: 5px;
  &:hover {
    background: #353b48;
  }
  @media (max-width: 500px) {
    &:hover {
      background: grey;
    }
  }
`;

export const QuestionListElementContainer = styled.div`
  margin: 1rem 0;
  padding: 0 20px;
  @media (max-width: 500px) {
    color: black;
  }
`;

export const RightContent = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  flex: 1;
  @media (max-width: 1000px) {
    height: max-content;
    overflow-y: auto;
  }
`;

export const UserLink = styled(Link)`
  display: flex;
  align-items: center;
  span {
    margin-left: 10px;
  }
`;

export const LogoutLink = styled(UserLink)`
  color: red !important;
`;
