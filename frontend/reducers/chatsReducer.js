import {
  RECEIVE_CHATS,
  RECEIVE_MESSAGE
} from '../actions/chat_actions';

const chatsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_CHATS:
      return (action.payload.chats ? (action.payload.chats) : {});
    case RECEIVE_MESSAGE:
      newState[action.message.chatId].firstMessageId = action.message.id;
      return newState;
    default:
      return state;
  }
};

export default chatsReducer;
