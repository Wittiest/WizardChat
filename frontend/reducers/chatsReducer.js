import {
  RECEIVE_CHATS,
  RECEIVE_MESSAGE,
  RECEIVE_NULL_CHAT,
  RECEIVE_CHAT,
  REMOVE_CHAT
} from '../actions/chat_actions';
import { REMOVE_CURRENT_USER } from '../actions/auth_actions';

const chatsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch(action.type) {
    case REMOVE_CURRENT_USER:
      return {};
    case REMOVE_CHAT:
      delete newState[action.chatId];
      return newState;
    case RECEIVE_CHAT:
      newState[action.payload.chat.id] = action.payload.chat;
      return newState;
    case RECEIVE_CHATS:
      return (action.payload.chats ? (action.payload.chats) : {});
    case RECEIVE_MESSAGE:
      newState[action.message.chatId].firstMessageId = action.message.id;
      return newState;
    case RECEIVE_NULL_CHAT:
      newState[action.chat.id] = action.chat;
      return newState;
    default:
      return state;
  }
};

export default chatsReducer;
