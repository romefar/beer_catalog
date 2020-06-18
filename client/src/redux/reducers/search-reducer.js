import {
  SEARCH_QUERY_CHANGE
} from '../actions/search-actions/search-actions-types';

const initalState = {
  searchQuery: ''
};

const searchReducer = (state = initalState, action) => {
  switch (action.type) {
    case SEARCH_QUERY_CHANGE:
      return {
        ...state,
        searchQuery: action.payload
      };
    default:
      return state;
  }
};

export default searchReducer;
