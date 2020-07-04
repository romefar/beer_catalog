import {
  ADD_BEER_ID_TO_FAVOURITES_SUCCESS,
  ADD_BEER_ID_TO_FAVOURITES_FAILURE,
  REMOVE_BEER_ID_FROM_FAVOURITES_SUCCESS,
  REMOVE_BEER_ID_FROM_FAVOURITES_FAILURE,
  FETCH_BEER_IDS_LIST_FAVOURITES_SUCCESS,
  FETCH_BEER_IDS_LIST_FAVOURITES_FAILURE,
  IMAGE_UPLOAD_REQUEST,
  PASSWORD_CHANGE_REQUEST,
  IMAGE_UPLOAD_SUCCESS,
  PASSWORD_CHANGE_SUCCESS,
  IMAGE_UPLOAD_FAILURE,
  PASSWORD_CHANGE_FAILURE,
  DELETE_PROFILE_REQUEST,
  DELETE_PROFILE_SUCCESS,
  DELETE_PROFILE_FAILURE,
  FETCH_PROFILE_DATA_FAILURE,
  FETCH_PROFILE_DATA_SUCCESS,
  FETCH_PROFILE_DATA_REQUEST
} from '../actions/profile-actions/profile-actions-types';

const initialState = {
  favourites: [],
  hasError: null,
  actionCompletedSuccessfully: false,
  profileData: {},
  isLoading: false
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BEER_ID_TO_FAVOURITES_SUCCESS:
    case FETCH_BEER_IDS_LIST_FAVOURITES_SUCCESS:
    case REMOVE_BEER_ID_FROM_FAVOURITES_SUCCESS:
      return {
        ...state,
        hasError: null,
        favourites: [...action.payload]
      };
    case IMAGE_UPLOAD_REQUEST:
    case PASSWORD_CHANGE_REQUEST:
    case DELETE_PROFILE_REQUEST:
      return {
        ...state,
        actionCompletedSuccessfully: false
      };
    case IMAGE_UPLOAD_SUCCESS:
    case PASSWORD_CHANGE_SUCCESS:
    case DELETE_PROFILE_SUCCESS:
      return {
        ...state,
        hasError: null,
        actionCompletedSuccessfully: true
      };
    case ADD_BEER_ID_TO_FAVOURITES_FAILURE:
    case REMOVE_BEER_ID_FROM_FAVOURITES_FAILURE:
    case FETCH_BEER_IDS_LIST_FAVOURITES_FAILURE:
    case PASSWORD_CHANGE_FAILURE:
    case IMAGE_UPLOAD_FAILURE:
    case DELETE_PROFILE_FAILURE:
    case FETCH_PROFILE_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        actionCompletedSuccessfully: false,
        hasError: action.payload,
        favourites: []
      };
    case FETCH_PROFILE_DATA_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_PROFILE_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasError: null,
        profileData: { ...action.payload }
      };
    default: {
      return state;
    }
  }
};

export default profileReducer;
