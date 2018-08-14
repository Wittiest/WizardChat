import { selectChatSearchMembershipIds } from './selectors';
import * as ChatUserAPI from '../util/api/chat_user_util';
import { removeChat } from './chat_actions';

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

export const updateChatUser = (chatUser) => dispatch => {
  ChatUserAPI.updateChatUser(chatUser).then(
    updatedChatUser => dispatch(receiveChatUser(updatedChatUser))
  );
};

export const deleteChatUser = (chatUserId) => dispatch => {
  ChatUserAPI.deleteChatUser(chatUserId).then(
    deletedChatUser => {
      dispatch(removeChatUser(deletedChatUser.id));
      dispatch(removeChat(deletedChatUser.chatId));
    }
  );
};
