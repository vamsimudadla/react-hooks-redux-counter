const count = (state = 0, action: { type: string; count: number }): number => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return action.count + 1;
    case "DECREMENT_COUNTER":
      return action.count - 1;
    default:
      return state;
  }
};

export default count;
