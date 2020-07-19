import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";

import { InputContainer } from "./src/components/input-container/";
import { ResultContainerState as ResultContainer } from "./src/components/result-container/";
import { ComponentStyled } from "./app.styles";
import { store } from "./src/services/redux/store";

export default App = () => {
  const { Container } = ComponentStyled;

  return (
    <Provider store={store}>
      <Container>
        <StatusBar barStyle="light-content" />
        <ResultContainer />
        <InputContainer />
      </Container>
    </Provider>
  );
};
