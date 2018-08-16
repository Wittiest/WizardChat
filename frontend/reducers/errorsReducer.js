import {
  RECEIVE_AUTH_ERRORS,
  RECEIVE_CURRENT_USER,
  REMOVE_CURRENT_USER
} from '../actions/auth_actions';
import {
  RECEIVE_CHAT_ERRORS,
  RECEIVE_CHAT
} from '../actions/chat_actions';

const errorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case REMOVE_CURRENT_USER:
      return [];
    case RECEIVE_CHAT:
      return [];
    case RECEIVE_AUTH_ERRORS:
      return action.errors;
    case RECEIVE_CHAT_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default errorsReducer;
