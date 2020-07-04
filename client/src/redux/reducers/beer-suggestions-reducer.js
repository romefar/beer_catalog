import {
  FETCH_BEER_SUGGESTIONS_REQUEST,
  FETCH_BEER_SUGGESTIONS_SUCCESS,
  FETCH_BEER_SUGGESTIONS_FAILURE
} from '../actions/beer-suggestions-actions/beer-suggestions-actions-types';

const initialState = {
  isLoading: false,
  hasError: null,
  isSuggestAvailable: false,
  isYeastSuggestion: false,
  isEmpty: false,
  items: [],
  pages: 0
};

const beerSuggestionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BEER_SUGGESTIONS_REQUEST:
      return {
        ...state,
        isEmpty: false,
        isLoading: true
      };
    case FETCH_BEER_SUGGESTIONS_SUCCESS:
      return {
        pages: action.payload.pages || state.pages,
        isLoading: false,
        isYeastSuggestion: !!action.payload.isYeastSuggestion,
        isSuggestAvailable: !!action.payload.isSuggestAvailable,
        items: [...action.payload.items],
        isEmpty: !action.payload.items.length,
        hasError: null
      };
    case FETCH_BEER_SUGGESTIONS_FAILURE:
      return {
        ...state,
        isEmpty: false,
        hasError: action.payload
      };
    default:
      return state;
  }
};

export default beerSuggestionsReducer;
