import {
  RECEIVE_CHAT,
  RECEIVE_CHATS,
  RECEIVE_MESSAGE,
  REMOVE_CHAT
} from '../actions/chat_actions';


const messagesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_CHATS:
      return Object.assign(newState, action.payload.messages);
    case RECEIVE_CHAT:
      return Object.assign(newState, action.payload.messages);
    case RECEIVE_MESSAGE:
      newState[action.message.id] = action.message;
      return newState;
    default:
      return state;
  }
};

export default messagesReducer;
