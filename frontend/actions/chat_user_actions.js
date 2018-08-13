import { selectChatSearchMembershipIds } from './selectors';

export const RECEIVE_CHAT_USER = "RECEIVE_CHAT_USER";
export const REMOVE_CHAT_USER = "REMOVE_CHAT_USER";
export const REMOVE_NULL_CHAT_USERS = "REMOVE_NULL_CHAT_USERS";

export const receiveChatUser = (chatUser) => ({
  type: RECEIVE_CHAT_USER,
  chatUser
});

export const removeChatUser = (chatUserId) => ({
  type: REMOVE_CHAT_USER,
  chatUserId
});

export const removeNullChatUsers = (chatUsers) => ({
  type: REMOVE_NULL_CHAT_USERS,
  nullUserIds: selectChatSearchMembershipIds(Object.values(chatUsers))
});
