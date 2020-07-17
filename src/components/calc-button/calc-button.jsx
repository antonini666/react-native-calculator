import React from "react";

import { ComponentStyled } from "./calc-button.styles";

export const CalcButton = ({
  noMargin,
  largeButtom,
  backgroundColor,
  text,
}) => {
  const { ButtonContainer, ButtonText } = ComponentStyled;

  return (
    <ButtonContainer
      noMargin={noMargin}
      largeButtom={largeButtom}
      backgroundColor={backgroundColor}
    >
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};
