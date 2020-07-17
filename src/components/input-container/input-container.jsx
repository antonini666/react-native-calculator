import React from "react";
import { FlatList } from "react-native";

import { calcButtonData } from "./calc-data";
import { CalcButton } from "../calc-button";

export const InputContainer = () => {
  return (
    <FlatList
      contentContainerStyle={{
        flex: 1,
        alignItems: "center",
      }}
      numColumns={4}
      keyExtractor={(item) => item.id}
      data={calcButtonData}
      renderItem={({ item }) => (
        <CalcButton
          text={item.title}
          noMargin={item.noMargin}
          largeButtom={item.largeButtom}
          backgroundColor={item.backgroundColor}
        />
      )}
    />
  );
};
