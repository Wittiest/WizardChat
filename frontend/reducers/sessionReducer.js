import {
  RECEIVE_CURRENT_USER,
  REMOVE_CURRENT_USER,
} from '../actions/auth_actions';

const _nullUser = { id: null };

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return { id: action.currentUser.id };
    case REMOVE_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
};

export default sessionReducer;
