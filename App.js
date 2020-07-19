import React from "react";
import { Provider } from "react-redux";

import { Home } from "./src/screens/home";
import { store } from "./src/services/redux/store";

export default App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};
