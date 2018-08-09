import {
  RECEIVE_CHAT,
  RECEIVE_CHATS,
} from '../actions/chat_actions';

const entitiesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_CHATS:
      return action.chats;
    case RECEIVE_CHAT:
        newState[action.chat.id] = action.chat;
      return newState;
    default:
      return state;
  }
};

export default entitiesReducer;
