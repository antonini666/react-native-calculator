import React from "react";
import { connect } from "react-redux";

import { ResultContainer } from "./result-container";

const ResultContainerState = ({ value, memory, memoryVisibility }) => {
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
    <ResultContainer
      getValue={getValue}
      value={value}
      memory={memory}
      memoryVisibility={memoryVisibility}
    />
  );
};

const mapStateToProps = (state) => ({
  value: state.currentValue,
  memory: state.memory,
  memoryVisibility: state.memoryVisibility,
});

export default connect(mapStateToProps)(ResultContainerState);
