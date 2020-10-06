import * as types from "./../constants/ActionTypes"
var initialState = [];

const message = (state = initialState, action) => {
  switch (action.type) {
    case types.REMOVE_TO_CART:
      state = action;
      return state;
    default:
      return state;
  }
};

export default message;
