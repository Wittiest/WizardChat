import {
  RECEIVING_USERS,
  RECEIVE_USERS
} from '../actions/user_actions';

const _defaultState = { loading: false };

const errorsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVING_USERS:
      return { loading: true };
    case RECEIVE_USERS:
      return _defaultState;
    default:
      return state;
  }
};

export default errorsReducer;
