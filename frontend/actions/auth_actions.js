import * as AuthUtil from '../util/api/auth_util';


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_AUTH_ERRORS = 'RECEIVE_AUTH_ERRORS';

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const removeCurrentUser = () => ({
  type: REMOVE_CURRENT_USER
});

const receiveAuthErrors = (errors) => ({
  type: RECEIVE_AUTH_ERRORS,
  errors
});

export const signup = user => dispatch => {
  AuthUtil.signup(user).then(
    currentUser => receiveCurrentUser(currentUser),
    errors => receiveAuthErrors(errors)
  );
};

export const login = user => dispatch => {
  AuthUtil.login(user).then(
    currentUser => receiveCurrentUser(currentUser),
    errors => receiveAuthErrors(errors)
  );
};

export const logout = userId => dispatch => {
  AuthUtil.logout(userId).then(
    () => removeCurrentUser(),
    errors => receiveAuthErrors(errors)
  );
};
