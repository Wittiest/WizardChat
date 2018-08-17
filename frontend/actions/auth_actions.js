import * as AuthUtil from '../util/api/auth_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';
export const RECEIVE_AUTH_ERRORS = 'RECEIVE_AUTH_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const removeCurrentUser = () => ({
  type: REMOVE_CURRENT_USER
});

export const receiveAuthErrors = (errors) => ({
  type: RECEIVE_AUTH_ERRORS,
  errors
});

export const signup = user => dispatch => {
  AuthUtil.signup(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    errors => dispatch(receiveAuthErrors(errors.responseJSON))
  );
};

export const login = user => dispatch => {
  AuthUtil.login(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    errors => dispatch(receiveAuthErrors(errors.responseJSON))
  );
};


export const logout = () => dispatch => {
  AuthUtil.logout().then(
    () => dispatch(removeCurrentUser()),
    errors => dispatch(receiveAuthErrors(errors.responseJSON))
  );
};
