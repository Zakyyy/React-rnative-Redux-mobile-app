// reducer used for any action created in the app
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  SEARCH_TEXT_UPDATED,
  GET_STATE,
  GET_SEARCH_RESULTS,
  ADDING_FAVOURITE,
  ADDED_TO_FAVOURITES,
  FAVOURITES_FETCH_SUCCESS
} from '../actions/types';

// initial state of the below videos
const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  spinner: false,
  search_word: '',
  searchResults: [],
  success_message: '',
  favourites:[]
};

// updating the above values depending on the action produced
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.payload };
    case PASSWORD_CHANGED:
      return {...state, password:action.payload};
    case LOGIN_USER_SUCCESS:
      return {...state, ...INITIAL_STATE, user:action.payload};
    case LOGIN_USER_FAIL:
      return {...state, error:'Authentication Failed', password: '', spinner: false};
    case LOGIN_USER:
      return {...state, spinner: true, error: ''};
    case LOGOUT_USER:
      return {...state, spinner: true};
    case LOGOUT_USER_SUCCESS:
      return {...state,...INITIAL_STATE};
    case SEARCH_TEXT_UPDATED:
      return {...state,search_word: action.payload};
    case GET_STATE:
      return {...state};
    case GET_SEARCH_RESULTS:
      return{...state,searchResults:action.payload};
    case ADDING_FAVOURITE:
      return{...state, spinner: true};
    case ADDED_TO_FAVOURITES:
      return{...state,spinner: false, success_message:'Added to favourites'};
    case FAVOURITES_FETCH_SUCCESS:
      return{...state,spinner: false, favourites:action.payload}
    default:
      return state;

  }
}
