import {
  RECEIVE_CHAT,
  RECEIVE_MESSAGE
} from '../actions/chat_actions';

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_MESSAGE:
      newState[action.message.id] = action.message;
      return newState;
    case RECEIVE_CHAT:
      return action.payload.messages;
    default:
      return state;
  }
};

export default messagesReducer;
