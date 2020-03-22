import { combineReducers } from 'redux';
import userReducer from './user';
import onlineReducer from './online';

export default combineReducers({
  user: userReducer,
  online: onlineReducer,
});
