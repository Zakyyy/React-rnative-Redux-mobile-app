// Action Creatorrr
import {
  // all these are constants for some action types you can find it in types.js file
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  SEARCH_TEXT_UPDATED,
  GET_STATE,
  GET_SEARCH_RESULTS
} from './types';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

// action Creator to create an action to get the current state of all variables in the system
export const get_state =() => {
  return{
    type:GET_STATE
  };
};

 // action Creator to create an action to get the search results
export const get_search_results= (response) => {
  return{
    type:GET_SEARCH_RESULTS,
    payload:response
  };
};

// action Creator to create an action that indicates that the text in the Email Input is changed to update it
export const emailChanged =(text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

// action Creator to create an action that indicates that the text in the password Input is changed to update it
export const passwordChanged =(text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

// action Creator to create an action that navigate the user to the Exit component when he preses the logout button
export const user_logout = () => {
  return (dispatch) => {
      Actions.Exit();
  };
};

// action Creator to create an action that indicates that the user confirmed his logout and remove any specific values related to the user
export const confirm_logout = () => {
  return (dispatch) => {
    dispatch({type: LOGOUT_USER})
    firebase.auth().signOut().then(() => logoutSuccess(dispatch));
  };
};

// action Creator to create an action that indicates that the user presses the cancel button and redirect him to search view
export const cancel_logout= () => {
  return(dispatch) => {
    Actions.main();
  };
};

// action Creator to create an action indicates that the seach input value is changed and updates it
export const search_text=(text) => {
  return{
    type:SEARCH_TEXT_UPDATED,
    payload:text
  };
};

// action Creator to create an action indicates that the search button is pressed and the user is waiting to
// get the results associated with the search text he entered
export const search_button_press= () => {
  return(dispatch) => {
    Actions.Results();
  };
};

// action Creator to create an action that indicates that the user wrote his credintials and want to sign in
// it will check if the credintials are right it will navigate him to the search view else it will show error message or create
// new account depending on the email
export const loginUser = ({email, password}) => {
  return (dispatch) => {
    dispatch({type: LOGIN_USER})
    firebase.auth().signInWithEmailAndPassword(email,password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => {
        console.log(error);
        firebase.auth().createUserWithEmailAndPassword(email,password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };
};

// helper method that creates ana action indicating that the user credintials are wrong
const loginUserFail =(dispatch,user) => {
  dispatch({
    type:LOGIN_USER_FAIL
  });
};

// helper method that creates an action that indicates that the user succesfully logged in
const loginUserSuccess = (dispatch,user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
  Actions.main();
};

// action Creator to create an action that indicates that the user logged out succesfully and redirect him to the login page
const logoutSuccess = (dispatch) => {
  dispatch({
    type:LOGOUT_USER_SUCCESS
  });
  Actions.auth();
}
