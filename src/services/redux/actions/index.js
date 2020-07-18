export const SET_NUMBER = "SET_NUMBER";
export const SET_OPERATOR = "SET_OPERATOR";
export const SET_EQUAL = "SET_EQUAL";
export const SET_CLEAR = "SET_CLEAR";
export const SET_PLUS_MINUS = "SET_PLUS_MINUS";
export const SET_PERCENTAGE = "SET_PERCENTAGE";
export const SET_MEMORY_ADD = "SET_MEMORY_ADD";
export const SET_MEMORY_CLEAR = "SET_MEMORY_CLEAR";
export const SET_MEMORY_READ = "SET_MEMORY_READ";
export const SET_MEMORY_REDUCE = "SET_MEMORY_REDUCE";

export const handleNumber = (value) => ({
  type: SET_NUMBER,
  payload: value,
});

export const handleClear = () => ({
  type: SET_CLEAR,
});

export const handleEqual = () => ({
  type: SET_EQUAL,
});

export const handleOperation = (value) => ({
  type: SET_OPERATOR,
  payload: value,
});

export const handlePlusMinus = () => ({
  type: SET_PLUS_MINUS,
});

export const handlePercent = () => ({
  type: SET_PERCENTAGE,
});

export const handleMemoryAdd = () => ({
  type: SET_MEMORY_ADD,
});

export const handleMemoryClear = () => ({
  type: SET_MEMORY_CLEAR,
});

export const handleMemoryRead = () => ({
  type: SET_MEMORY_READ,
});

export const handleMemoryReduce = () => ({
  type: SET_MEMORY_REDUCE,
});
