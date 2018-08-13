import * as UserUtil from '../util/api/user_util';

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVING_USERS = "RECEIVING_USERS";
export const PURGE_SEARCH = "PURGE_SEARCH";

const receiveUsers = (payload) => ({
  type: RECEIVE_USERS,
  payload
});

const receivingUsers = () => ({
  type: RECEIVING_USERS
});

export const purgeSearch = () => ({
  type: PURGE_SEARCH
});


export const searchUsers = (query) => dispatch => {
  dispatch(receivingUsers());
  UserUtil.searchUsers(query).then(
    (payload) => dispatch(receiveUsers(payload))
  );
};
