export const RECEIVE_CHAT_USER = "RECEIVE_CHAT_USER";

export const receiveChatUser = (chatUser) => ({
  type: RECEIVE_CHAT_USER,
  chatUser
});
