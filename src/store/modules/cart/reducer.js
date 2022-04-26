import { Reducer } from "redux";

const INITIAL_STATE = {
  items: [],
};

const cart = (state, action) => {
  console.log(state, action);

  return INITIAL_STATE;
};

export default cart;
