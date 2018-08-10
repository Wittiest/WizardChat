import {
  RECEIVE_CHATS,
} from '../actions/chat_actions';


const entitiesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_CHATS:
      return action.payload.chats;
    default:
      return state;
  }
};

export default entitiesReducer;
