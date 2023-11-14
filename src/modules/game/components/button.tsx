import { ButtonProps } from "antd";
import React, { FC } from "react";
import { MedivalBtn } from "./styled";

export const MedievalButton: FC<ButtonProps> = (props) => {
  return <MedivalBtn {...props}>{props.children}</MedivalBtn>;
};
