import { combineReducers } from 'redux';
import chatsReducer from './chatsReducer';
import messagesReducer from './messagesReducer';
import usersReducer from './usersReducer';

const entitiesReducer = combineReducers({
  chats: chatsReducer,
  messages: messagesReducer,
  users: usersReducer
});

export default entitiesReducer;
