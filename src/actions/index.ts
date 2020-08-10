export const incrementCount = (count: number) => {
  return {
    type: "INCREMENT_COUNTER",
    count,
  };
};

export const decrementCount = (count: number) => {
  return {
    type: "DECREMENT_COUNTER",
    count,
  };
};
