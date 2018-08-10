import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import errorsReducer from './errorsReducer';
import entitiesReducer from './entitiesReducer';
import currentChatDataReducer from './currentChatDataReducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  entities: entitiesReducer,
  currentChatData: currentChatDataReducer
});

export default rootReducer;
