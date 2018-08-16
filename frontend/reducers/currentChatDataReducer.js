import { RECEIVE_CURRENT_CHAT_ID } from '../actions/chat_actions';
import { REMOVE_CURRENT_USER } from '../actions/auth_actions';

const _nullChatData = { id: null };

const currentChatDataReducer = (state = _nullChatData, action) => {
  Object.freeze(state);
  switch(action.type) {
    case REMOVE_CURRENT_USER:
      return _nullChatData;
    case RECEIVE_CURRENT_CHAT_ID:
      return { id: action.chatId };
    default:
      return state;
  }
};

export default currentChatDataReducer;
