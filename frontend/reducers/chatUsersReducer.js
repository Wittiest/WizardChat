import { RECEIVE_CHAT } from '../actions/chat_actions';
import { RECEIVE_USERS, PURGE_SEARCH } from '../actions/user_actions';
import { RECEIVE_CHAT_USER } from '../actions/chat_user_actions';

const chatUsersReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_CHAT_USER:
      newState[action.chatUser.id] = action.chatUser;
      return newState;
    case RECEIVE_USERS:
      return Object.assign(newState, action.payload.chatUsers);
    case RECEIVE_CHAT:
      return Object.assign(newState, action.payload.chatUsers);
    case PURGE_SEARCH:
      for (let i in newState) {
        if (newState[i].chatId === -2) {
          delete newState[i];
        }
      }
      return newState;
    default:
      return state;
  }
};

export default chatUsersReducer;
