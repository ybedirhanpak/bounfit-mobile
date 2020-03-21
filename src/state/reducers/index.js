import { combineReducers } from 'redux';
import mealReducer from './meal';

export default combineReducers({
    meal: mealReducer,
});