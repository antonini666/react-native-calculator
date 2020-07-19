import React from "react";

import { ComponentStyled } from "./result-container.styles";

const ResultContainer = ({ value, memory, memoryVisibility, getValue }) => {
  const {
    Container,
    MemoryContainer,
    MemoryText,
    ResultContainer,
    ResultText,
  } = ComponentStyled;

  return (
    <Container>
      <MemoryContainer>
        {memoryVisibility ? <MemoryText>m: {memory}</MemoryText> : null}
      </MemoryContainer>
      <ResultContainer>
        <ResultText resultLenght={value.length}>{getValue()}</ResultText>
      </ResultContainer>
    </Container>
  );
};

export { ResultContainer };
