import { combineReducers } from 'redux';
import beerReducer from './beer-list-reducer';

export default combineReducers({
  beerList: beerReducer
});
