import {
  RECEIVE_USERS,
} from '../actions/user_actions';
import {
  RECEIVE_CHATS,
  RECEIVE_CHAT
} from '../actions/chat_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_USERS:
      return Object.assign(newState, action.payload.users);
    case RECEIVE_CHATS:
      return Object.assign(newState, action.payload.users);
    case RECEIVE_CHAT:
      return Object.assign(newState, action.payload.users);
    default:
      return state;
  }
};

export default usersReducer;
