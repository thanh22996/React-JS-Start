import * as Message from "../constants/MessageTypes"
import * as types from "./../constants/ActionTypes"
var initialState = Message.MSG_WELCOME;

const message = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_MESSAGE:
      state = action.message;
      return state;
    default:
      return state;
  }
};

export default message;
