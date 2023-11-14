import React, { CSSProperties, FC, useMemo } from "react";
import { AskWord, AzeWord, MainLogoContainer } from "./styled";

interface LogoProps {
  size?: number;
}
export const MainLogo: FC<LogoProps> = ({ size }) => {
  const style = useMemo<CSSProperties>(() => {
    if (size) return { fontSize: size };
    return {};
  }, [size]);
  return (
    <MainLogoContainer>
      <AskWord style={style}>Ask</AskWord>
      <AzeWord style={style}>Azerbaijan</AzeWord>
    </MainLogoContainer>
  );
};
