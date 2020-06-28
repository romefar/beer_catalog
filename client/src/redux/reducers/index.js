import { combineReducers } from 'redux';
import beerReducer from './beer-list-reducer';
import searchReducer from './search-reducer';
import beerItemReducer from './beer-item-reducer';
import signInReducer from './sign-in-reducer';
import signUpReducer from './sign-up-reducer';
import profileReducer from './profile-reducer';
import beerFavouritesReducer from './beer-favourites-reducer';

export default combineReducers({
  beerList: beerReducer,
  beerDetails: beerItemReducer,
  beerFavourites: beerFavouritesReducer,
  profile: profileReducer,
  search: searchReducer,
  signIn: signInReducer,
  signUp: signUpReducer
});
