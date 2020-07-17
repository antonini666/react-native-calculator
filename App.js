import React, { useState } from "react";
import { StatusBar } from "react-native";

import { InputContainer } from "./src/components/input-container/";
import { ResultContainer } from "./src/components/result-container/";
import { ComponentStyled } from "./app.styles";

export default App = () => {
  const [value, setValue] = useState("0");

  const { Container } = ComponentStyled;

  return (
    <Container>
      <StatusBar text="white" />
      <ResultContainer value={value} />
      <InputContainer />
    </Container>
  );
};
