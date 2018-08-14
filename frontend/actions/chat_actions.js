import * as ChatUtil from '../util/api/chat_util';
import { selectChatsInOrder } from './selectors';

export const RECEIVE_CHAT = 'RECEIVE_CHAT';
export const RECEIVE_NULL_CHAT = 'RECEIVE_NULL_CHAT';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_CHATS = 'RECEIVE_CHATS';
export const RECEIVE_CHAT_ERRORS = 'RECEIVE_CHAT_ERRORS';
export const RECEIVE_CURRENT_CHAT_ID = 'RECEIVE_CURRENT_CHAT_ID';
export const REMOVE_CHAT = "REMOVE_CHAT";

export const receiveCurrentChatId = (chatId) => ({
  type: RECEIVE_CURRENT_CHAT_ID,
  chatId
});

const receiveChats = (payload) => ({
  type: RECEIVE_CHATS,
  payload
});

export const receiveNullChat = (chat) => ({
  type: RECEIVE_NULL_CHAT,
  chat
});

export const receiveChat = (payload) => ({
  type: RECEIVE_CHAT,
  payload
});

export const removeChat = (chatId) => ({
  type: REMOVE_CHAT,
  chatId
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
      if (payload.chats && Object.keys(payload.chats).length > 0) {
        dispatch(receiveCurrentChatId(selectChatsInOrder(payload.chats)[0].id));
      }
    },
    errors => dispatch(receiveChatErrors(errors.responseJSON))
  );
};

export const fetchChat = (chatId) => dispatch => {
  ChatUtil.fetchChat(chatId).then(
    (payload) => dispatch(receiveChat(payload)),
    errors => dispatch(receiveChatErrors(errors.responseJSON))
  );
};

export const createMessage = (message) => dispatch => {
  ChatUtil.createMessage(message).then(
    null, // We receive our own messages from broadcast. Change if we exclude
    errors => dispatch(receiveChatErrors(errors.responseJSON))
  );
};

export const createChat = (chatData) => dispatch => {
  ChatUtil.createChat(chatData).then(
    createdChat => {
      dispatch(receiveChat(createdChat));
      dispatch(receiveCurrentChatId(createdChat.chat.id));
    },
    errors => dispatch(receiveChatErrors(errors.responseJSON))
  );
};

export const updateChat = (chat) => dispatch => {
  ChatUtil.updateChat(chat).then(
    updatedChat => {
      dispatch(receiveChat(updatedChat));
    },
    errors => dispatch(receiveChatErrors(errors.responseJSON))
  );
};
