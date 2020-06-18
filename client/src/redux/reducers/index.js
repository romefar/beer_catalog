import { combineReducers } from 'redux';
import beerReducer from './beer-list-reducer';
import searchReducer from './search-reducer';

export default combineReducers({
  beerList: beerReducer,
  search: searchReducer
});
