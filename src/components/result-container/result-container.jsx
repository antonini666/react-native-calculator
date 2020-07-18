import React from "react";
import { connect } from "react-redux";

import { ComponentStyled } from "./result-container.styles";

const ResultContainer = ({ value, memory, memoryVisibility }) => {
  const {
    Container,
    MemoryContainer,
    MemoryText,
    ResultContainer,
    ResultText,
  } = ComponentStyled;

  const regNum = /[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)/;

  const getValue = () => {
    if (value.slice(-1) === ".") {
      return value;
    } else if (regNum.test(value)) {
      return parseFloat(value).toExponential(4);
    } else if (value.length > 9) {
      return parseFloat(value).toExponential(4);
    } else {
      return parseFloat(value);
    }
  };

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

const mapStateToProps = (state) => ({
  value: state.currentValue,
  memory: state.memory,
  memoryVisibility: state.memoryVisibility,
});

export default connect(mapStateToProps)(ResultContainer);
