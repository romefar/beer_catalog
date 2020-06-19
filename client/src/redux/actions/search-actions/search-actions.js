import {
  SEARCH_QUERY_CHANGE
} from './search-actions-types';
import {
  beerListCleared
} from '../beer-list-actions/beer-list-actions';

const searchQueryChanged = (searchQuery) => (dispatch) => {
  dispatch(beerListCleared());
  dispatch({
    type: SEARCH_QUERY_CHANGE,
    payload: searchQuery
  });
};

export {
  searchQueryChanged
};
