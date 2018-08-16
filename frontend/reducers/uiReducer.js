import {
  RECEIVING_USERS,
  RECEIVE_USERS
} from '../actions/user_actions';
import {
  CLOSE_CHAT_MENU,
  OPEN_CHAT_MENU,
  RECEIVE_SEARCH_QUERY
} from '../actions/ui_actions';
import { REMOVE_CURRENT_USER } from '../actions/auth_actions';

const _defaultState = { loading: false, chatMenuOpen: false, searchQuery: '' };

const errorsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_SEARCH_QUERY:
      newState.searchQuery = action.searchQuery;
      return newState;
    case OPEN_CHAT_MENU:
      newState.chatMenuOpen = true;
      return newState;
    case CLOSE_CHAT_MENU:
      newState.chatMenuOpen = false;
      return newState;
    case RECEIVING_USERS:
      newState.loading = true;
      return newState;
    case RECEIVE_USERS:
      return _defaultState;
    case REMOVE_CURRENT_USER:
      return _defaultState;
    default:
      return state;
  }
};

export default errorsReducer;
