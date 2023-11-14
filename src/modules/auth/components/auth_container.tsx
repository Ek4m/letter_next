import React, { FC, PropsWithChildren } from "react";
import { AuthImage, FormContainer, ImageContainer, MainAuthContainer } from "./styled";

export const AuthContainer: FC<PropsWithChildren<{ image: string }>> = ({
  children,
  image,
}) => {
  return (
    <MainAuthContainer gutter={[24, 24]}>
      <ImageContainer  xl={11} lg={11} md={24} xs={24}>
        <AuthImage src={image} />
      </ImageContainer>
      <FormContainer xl={13} lg={13} md={24} xs={24}>
        {children}
      </FormContainer>
    </MainAuthContainer>
  );
};
