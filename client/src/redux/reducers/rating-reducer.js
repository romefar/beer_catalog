import {
  FETCH_RATING_SUCCESS,
  FETCH_RATING_FAILURE,
  INCREMENT_RATING_SUCCESS,
  INCREMENT_RATING_FAILURE,
  DECREMENT_RATING_SUCCESS,
  DECREMENT_RATING_FAILURE
} from './../actions/rating-actions/rating-actions-types';

const initialState = {
  rating: 0,
  hasError: null,
  decremented: false,
  incremented: false
};

const ratingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RATING_SUCCESS:
      return {
        ...state,
        rating: action.payload.rating,
        decremented: action.payload.decremented,
        incremented: action.payload.incremented
      };
    case FETCH_RATING_FAILURE:
    case INCREMENT_RATING_FAILURE:
    case DECREMENT_RATING_FAILURE:
      return {
        ...state,
        hasError: action.payload
      };
    case INCREMENT_RATING_SUCCESS:
      return {
        ...state,
        incremented: !state.decremented,
        decremented: false,
        rating: action.payload.rating
      };
    case DECREMENT_RATING_SUCCESS:
      return {
        ...state,
        decremented: !state.incremented,
        incremented: false,
        rating: action.payload.rating
      };
    default: {
      return state;
    }
  }
};

export default ratingReducer;
