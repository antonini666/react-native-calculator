import React from "react";
import { connect } from "react-redux";

import { CalcButton } from "./calc-button";

import {
  handleNumber,
  handleClear,
  handleEqual,
  handleOperation,
  handlePlusMinus,
  handlePercent,
  handleMemoryAdd,
  handleMemoryClear,
  handleMemoryRead,
  handleMemoryReduce,
} from "../../services/redux/actions";

const CalcButtonContainer = ({
  noMargin,
  largeButtom,
  backgroundColor,
  text,
  type,
  value,
  handleNumber,
  handleClear,
  handleEqual,
  handleOperation,
  handlePlusMinus,
  handlePercent,
  handleMemoryAdd,
  handleMemoryClear,
  handleMemoryRead,
  handleMemoryReduce,
}) => {
  const handleButtonPress = () => {
    switch (type) {
      case "number":
        return handleNumber(value);
      case "clear":
        return handleClear();
      case "equal":
        return handleEqual(value);
      case "operator":
        return handleOperation(value);
      case "plus-minus":
        return handlePlusMinus();
      case "percentage":
        return handlePercent();
      case "m+":
        return handleMemoryAdd();
      case "mc":
        return handleMemoryClear();
      case "m-":
        return handleMemoryReduce();
      case "mr":
        return handleMemoryRead();
    }
  };

  return (
    <CalcButton
      handleButtonPress={handleButtonPress}
      noMargin={noMargin}
      largeButtom={largeButtom}
      backgroundColor={backgroundColor}
      text={text}
    />
  );
};

const mapDispatchToProps = {
  handleNumber,
  handleClear,
  handleEqual,
  handleOperation,
  handlePlusMinus,
  handlePercent,
  handleMemoryAdd,
  handleMemoryClear,
  handleMemoryRead,
  handleMemoryReduce,
};

export default connect(null, mapDispatchToProps)(CalcButtonContainer);
