import * as UserUtil from '../util/api/user_util';

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVING_USERS = "RECEIVING_USERS";

const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});

const receivingUsers = () => ({
  type: RECEIVING_USERS
});

export const searchUsers = (query) => dispatch => {
  dispatch(receivingUsers());
  UserUtil.searchUsers(query).then(
    (usersMatchingQuery) => dispatch(receiveUsers(usersMatchingQuery))
  );
};
