import { combineReducers } from 'redux';
import chatsReducer from './chatsReducer';
import messagesReducer from './messagesReducer';
import usersReducer from './usersReducer';
import chatUsersReducer from './chatUsersReducer';

const entitiesReducer = combineReducers({
  chats: chatsReducer,
  messages: messagesReducer,
  users: usersReducer,
  chatUsers: chatUsersReducer
});

export default entitiesReducer;
