import React,{Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import {Header} from './Components/common';
import Router from './Router';

class App extends Component {
  componentWillMount(){
    const config = {
    apiKey: "AIzaSyAD-Os8vKAnJPzdPory1lTe68gkAF-qxM0",
    authDomain: "manager-5f4fa.firebaseapp.com",
    databaseURL: "https://manager-5f4fa.firebaseio.com",
    projectId: "manager-5f4fa",
    storageBucket: "manager-5f4fa.appspot.com",
    messagingSenderId: "426036055073"
  };

  firebase.initializeApp(config);
  }
  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return(
      <Provider store= {store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
