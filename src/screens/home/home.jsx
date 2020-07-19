import React from "react";
import { StatusBar } from "react-native";

import { InputContainer } from "../../components/input-container";
import { ResultContainerState as ResultContainer } from "../../components/result-container/";
import { ComponentStyled } from "./home.styles";

const Home = () => {
  const { Container } = ComponentStyled;

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <ResultContainer />
      <InputContainer />
    </Container>
  );
};

export { Home };
