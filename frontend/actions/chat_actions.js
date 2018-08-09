import * as ChatUtil from '../util/api/chat_util';

export const RECEIVE_CHAT = 'RECEIVE_CHAT';
export const RECEIVE_CHATS = 'RECEIVE_CHATS';

const receiveChats = (chats) => ({
  type: RECEIVE_CHATS,
  chats
});

const receiveChat = (chat) => ({
  type: RECEIVE_CHAT,
  chat
});

export const fetchChats = () => dispatch => {
  ChatUtil.fetchChats().then(
    (chats) => dispatch(receiveChats(chats)),
    errors => dispatch(receiveAuthErrors(errors.responseJSON))
  );
};

export const fetchChat = () => dispatch => {
  ChatUtil.fetchChat().then(
    (chat) => dispatch(receiveChat(chat)),
    errors => dispatch(receiveAuthErrors(errors.responseJSON))
  );
};
