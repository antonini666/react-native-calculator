import {
  SET_NUMBER,
  SET_OPERATOR,
  SET_EQUAL,
  SET_CLEAR,
  SET_PLUS_MINUS,
  SET_PERCENTAGE,
  SET_MEMORY_ADD,
  SET_MEMORY_CLEAR,
  SET_MEMORY_READ,
  SET_MEMORY_REDUCE,
} from "../actions";

const initialState = {
  currentValue: "0",
  operator: null,
  previousValue: null,
  memory: "0",
  memoryVisibility: false,
};

export const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NUMBER:
      if (state.currentValue === "0" && action.payload === ".") {
        return { ...state, currentValue: `0${action.payload}` };
      }
      if (state.currentValue.includes(".") && action.payload === ".") {
        return { ...state };
      }
      if (state.currentValue === "0") {
        return { ...state, currentValue: `${action.payload}` };
      }
      if (state.currentValue.length > 9) {
        return { ...state };
      }
      return {
        ...state,
        currentValue: `${state.currentValue}${action.payload}`,
      };
    case SET_EQUAL:
      const current = parseFloat(state.currentValue);
      const previous = parseFloat(state.previousValue);
      const resetState = {
        operator: null,
        previousValue: null,
      };
      if (state.operator === "/") {
        return {
          ...state,
          currentValue: `${previous / current}`,
          ...resetState,
        };
      }
      if (state.operator === "*") {
        return {
          ...state,
          currentValue: `${previous * current}`,
          ...resetState,
        };
      }
      if (state.operator === "-") {
        return {
          ...state,
          currentValue: `${previous - current}`,
          ...resetState,
        };
      }
      if (state.operator === "+") {
        return {
          ...state,
          currentValue: `${previous + current}`,
          ...resetState,
        };
      }
    case SET_OPERATOR:
      return {
        ...state,
        operator: action.payload,
        previousValue: state.currentValue,
        currentValue: "0",
      };
    case SET_PLUS_MINUS:
      return {
        ...state,
        currentValue: `${parseFloat(state.currentValue) * -1}`,
      };
    case SET_PERCENTAGE:
      return {
        ...state,
        currentValue: `${parseFloat(state.currentValue) * 0.01}`,
      };
    case SET_CLEAR:
      return initialState;
    case SET_MEMORY_ADD:
      return {
        ...state,
        memory: `${parseFloat(state.memory) + parseFloat(state.currentValue)}`,
        currentValue: "0",
        memoryVisibility: true,
      };
    case SET_MEMORY_REDUCE:
      return {
        ...state,
        memory: `${parseFloat(state.memory) - parseFloat(state.currentValue)}`,
        currentValue: "0",
      };
    case SET_MEMORY_READ:
      return {
        ...state,
        currentValue: state.memory,
      };
    case SET_MEMORY_CLEAR:
      return {
        ...state,
        memory: "0",
        memoryVisibility: false,
      };
    default:
      return state;
  }
};
