import * as UserUtil from '../util/api/user_util';

export const RECEIVE_USERS = "RECEIVE_USERS";

const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});

export const searchUsers = (query) => dispatch => {
  UserUtil.searchUsers(query).then(
    (usersMatchingQuery) => dispatch(receiveUsers(usersMatchingQuery))
  );
};
