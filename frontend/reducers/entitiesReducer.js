import { combineReducers } from 'redux';
import chatsReducer from './chatsReducer';

const entitiesReducer = combineReducers({
  chats: chatsReducer,
});

export default entitiesReducer;
