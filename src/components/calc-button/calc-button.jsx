import React from "react";

import { ComponentStyled } from "./calc-button.styles";

const CalcButton = ({
  noMargin,
  largeButtom,
  backgroundColor,
  text,
  handleButtonPress,
}) => {
  const { ButtonContainer, ButtonText } = ComponentStyled;

  return (
    <ButtonContainer
      noMargin={noMargin}
      largeButtom={largeButtom}
      backgroundColor={backgroundColor}
      onPress={handleButtonPress}
    >
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};

export { CalcButton };
