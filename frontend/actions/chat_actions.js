import * as ChatUtil from '../util/api/chat_util';
import { selectChatsInOrder } from './selectors';

export const RECEIVE_CHAT = 'RECEIVE_CHAT';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_CHATS = 'RECEIVE_CHATS';
export const RECEIVE_CHAT_ERRORS = 'RECEIVE_AUTH_ERRORS';
export const RECEIVE_CURRENT_CHAT_ID = 'RECEIVE_CURRENT_CHAT_ID';

export const receiveCurrentChatId = (chatId) => ({
  type: RECEIVE_CURRENT_CHAT_ID,
  chatId
});

const receiveChats = (payload) => ({
  type: RECEIVE_CHATS,
  payload
});

export const receiveChat = (messages) => ({
  type: RECEIVE_CHAT,
  messages
});

export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message
});

export const receiveChatErrors = (errors) => ({
  type: RECEIVE_CHAT_ERRORS,
  errors
});

export const fetchChats = () => dispatch => {
  ChatUtil.fetchChats().then(
    (payload) => {
      dispatch(receiveChats(payload));
      dispatch(receiveCurrentChatId(selectChatsInOrder(payload.chats)[0].id));
    },
    errors => dispatch(receiveChatErrors(errors.responseJSON))
  );
};

export const fetchChat = (chatId) => dispatch => {
  ChatUtil.fetchChat(chatId).then(
    (messages) => dispatch(receiveChat(messages)),
    errors => dispatch(receiveChatErrors(errors.responseJSON))
  );
};

export const createMessage = (message) => dispatch => {
  ChatUtil.createMessage(message).then(
    (validMessage) => dispatch(receiveMessage(validMessage)),
    errors => dispatch(receiveChatErrors(errors.responseJSON))
  );
};
