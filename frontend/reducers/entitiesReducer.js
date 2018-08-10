import { combineReducers } from 'redux';
import chatsReducer from './chatsReducer';
import messagesReducer from './messagesReducer';

const entitiesReducer = combineReducers({
  chats: chatsReducer,
  messages: messagesReducer
});

export default entitiesReducer;
