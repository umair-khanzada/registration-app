import { combineReducers } from 'redux'
import events from './events';
import users from './users';

const rootReducer = combineReducers({
  events,
  users
});

export default rootReducer