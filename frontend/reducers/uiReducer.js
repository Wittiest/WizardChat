import {
  RECEIVING_USERS,
  RECEIVE_USERS
} from '../actions/user_actions';
import {
  CLOSE_CHAT_MENU,
  OPEN_CHAT_MENU
} from '../actions/chat_menu_actions';

const _defaultState = { loading: false, chatMenuOpen: false };

const errorsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch(action.type) {
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
    default:
      return state;
  }
};

export default errorsReducer;
