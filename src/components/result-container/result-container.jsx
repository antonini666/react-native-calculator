import React from "react";

import { ComponentStyled } from "./result-container.styles";

export const ResultContainer = ({ value }) => {
  const { Container, ResultContainer, ResultText } = ComponentStyled;

  return (
    <Container>
      <ResultContainer>
        <ResultText>{value}</ResultText>
      </ResultContainer>
    </Container>
  );
};
