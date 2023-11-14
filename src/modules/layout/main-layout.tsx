import React, { PropsWithChildren, useContext, useMemo } from "react";
import { BsListUl, BsThreeDotsVertical } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { Dropdown, MenuProps } from "antd";

import {
  LeftSideBar,
  LogoutLink,
  MainAppContainer,
  UserInfoName,
  RightContent,
  UserInfo,
  UserInfoMenuButton,
  QuestionListTitle,
} from "./styled";

import { AuthContext } from "../auth/contexts";

export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { userData } = useContext(AuthContext);

  const items: MenuProps["items"] = useMemo(() => {
    const result = [
      {
        key: "1",
        label: (
          <LogoutLink href="/logout">
            <FiLogOut />
            <span> Log out</span>
          </LogoutLink>
        ),
      },
    ];
    return result;
  }, []);

  return (
    <MainAppContainer>
      <LeftSideBar>
        <QuestionListTitle>
          <BsListUl />
          User
        </QuestionListTitle>
        <UserInfo>
          <UserInfoName>
            {userData?.firstName} {userData?.lastName}
          </UserInfoName>
          <Dropdown menu={{ items }} placement="topRight" arrow>
            <UserInfoMenuButton>
              <BsThreeDotsVertical color="white" />
            </UserInfoMenuButton>
          </Dropdown>
        </UserInfo>
      </LeftSideBar>
      <RightContent>{children}</RightContent>
    </MainAppContainer>
  );
};
