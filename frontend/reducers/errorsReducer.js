import {
  RECEIVE_AUTH_ERRORS,
  RECEIVE_CURRENT_USER
} from '../actions/auth_actions';

const errorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_AUTH_ERRORS:
      return action.errors.responseJSON;
    default:
      return state;
  }
};

export default errorsReducer;
