import {
  SEARCH_QUERY_CHANGE
} from './search-actions-types';

const searchQueryChanged = (searchQuery) => {
  return {
    type: SEARCH_QUERY_CHANGE,
    payload: searchQuery
  };
};

export {
  searchQueryChanged
};
