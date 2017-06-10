// all action creators used with favourites
import firebase from 'firebase';
import {
  ADDING_FAVOURITE,
  ADDED_TO_FAVOURITES,
  FAVOURITES_FETCH_SUCCESS
}from './types';
import { Actions } from 'react-native-router-flux';

// action creator to save videos in the database using firebase methods and create an action indicating that the video is
// added to the favourites
export const add_to_favourites=(snippet,videoID) => {
  const {currentUser} = firebase.auth();
  return (dispatch) => {
    dispatch({type: ADDING_FAVOURITE})
    firebase.database().ref(`/users/${currentUser.uid}/favourites`)
      .push({snippet,videoID}).then(()=> dispatch({type:ADDED_TO_FAVOURITES}));
  };
};

// action creator that fetches the favourites data from the data base and return it as an object to the user
export const favourites_fetch = () => {
  const {currentUser} = firebase.auth();
  return(dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/favourites`)
      .on('value',snapshot => {
        dispatch({type: FAVOURITES_FETCH_SUCCESS, payload: snapshot.val() })
      });
  };
};

// action creator redirect the user to his favourite list view of videos
export const favourites_button_press= () => {
  return(dispatch) => {
    Actions.FAV();
  };
};
