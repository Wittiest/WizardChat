import {
  RECEIVE_CURRENT_CHAT_ID
} from '../actions/auth_actions';

const _nullChatData = { id: null };

const currentChatDataReducer = (state = _nullChatData, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_CHAT_ID:
      return { id: action.chatId };
    default:
      return state;
  }
};

export default currentChatDataReducer;
