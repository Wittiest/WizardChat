import * as ChatUtil from '../util/api/chat_util';

export const RECEIVE_CHAT = 'RECEIVE_CHAT';
export const RECEIVE_CHATS = 'RECEIVE_CHATS';
export const RECEIVE_CHAT_ERRORS = 'RECEIVE_AUTH_ERRORS';


const receiveChats = (chats) => ({
  type: RECEIVE_CHATS,
  chats
});

const receiveChat = (chat) => ({
  type: RECEIVE_CHAT,
  chat
});

export const receiveChatErrors = (errors) => ({
  type: RECEIVE_CHAT_ERRORS,
  errors
});

export const fetchChats = () => dispatch => {
  ChatUtil.fetchChats().then(
    (chats) => dispatch(receiveChats(chats)),
    errors => dispatch(receiveChatErrors(errors.responseJSON))
  );
};

export const fetchChat = () => dispatch => {
  ChatUtil.fetchChat().then(
    (chat) => dispatch(receiveChat(chat)),
    errors => dispatch(receiveChatErrors(errors.responseJSON))
  );
};

export const createMessage = (message) => dispatch => {
  ChatUtil.createMessage(message).then(
    (validMessage) => dispatch(receiveChat(validMessage)),
    errors => dispatch(receiveChatErrors(errors.responseJSON))
  );
};
