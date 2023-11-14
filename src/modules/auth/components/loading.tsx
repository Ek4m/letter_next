import React from "react";
import {
  LoadingContainer,
  LoadingScreenContainer,
  LoadingSpinner,
  LoadingText,
} from "./styled";

export const LoadingScreen = () => {
  return (
    <LoadingScreenContainer>
      <LoadingContainer>
        <LoadingText />
        <LoadingSpinner />
      </LoadingContainer>
    </LoadingScreenContainer>
  );
};
