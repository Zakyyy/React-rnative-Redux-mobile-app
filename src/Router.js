// this file is used to define all possible scenes that the user may visit
import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './Components/LoginForm';
import Search from './Components/Search';
import Exit from './Components/Exit';
import ResultsList from './Components/ResultsList';
import {Header} from './Components/common';
import FavouritesList from './Components/FavouritesList';
const RouterComponent =() => {
  return (
    <Router sceneStyle={{paddingTop:65}}>
    <Scene key="auth">
      <Scene
        key="loin"
        component={LoginForm}
        title="Login"
      />
    </Scene>
    <Scene key="main">
      <Scene
        key="Search"
        component={Search}
        title="Search"
        initial
      />
      <Scene
        key="Results"
        component={ResultsList}
        title="Your Search Results"
      />
      <Scene
        key="FAV"
        component={FavouritesList}
        title="Your Favourites"
      />
    </Scene>
    <Scene key="Exit">
      <Scene
        key="exitpage"
        component={Exit}
        title = "Are you sure?"
      />
    </Scene>
    </Router>
  );
};

export default RouterComponent;
