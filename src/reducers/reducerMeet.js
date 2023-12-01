import { SELL_MEAT } from "./actionTypes";

const reducerMeet = (state = [], action) => {
  switch (action.type) {
    case SELL_MEAT:
      return {
        ...state,
        numOfMeet: state.numOfMeet - 1,
      };
    default:
      return state;
  }
};

export default reducerMeet;
