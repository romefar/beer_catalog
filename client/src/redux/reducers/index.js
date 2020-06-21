import { combineReducers } from 'redux';
import beerReducer from './beer-list-reducer';
import searchReducer from './search-reducer';
import beerItemReducer from './beer-item-reducer';

export default combineReducers({
  beerList: beerReducer,
  beerDetails: beerItemReducer,
  search: searchReducer
});
