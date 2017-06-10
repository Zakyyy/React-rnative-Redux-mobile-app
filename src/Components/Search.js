// View contains the Search bar , Search Button, LogOut and View Favourites Button

import React , { Component } from 'react';
import SearchBar from 'react-native-search-bar';
import YoutubePlayer from 'react-youtube-player';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { user_logout , search_text,search_button_press} from '../actions'; // action creators used in this view
import { favourites_fetch,favourites_button_press } from '../actions/FavouritesActions';
import {Button , Card , CardSection , Input , Spinner } from './common';

class Search extends Component {
  onButtonPress(){
    // indicates if the user pressed on the logout button and then it navigates him to the Exit View
    this.props.user_logout();
  }
  onSearchChange(text){
    // called whenever the search text is changed in order to automatically update its value
    this.props.search_text(text);
  }
  onSearchPress(){
    // called whenever the user pressed on the search button and navigates the user to the search results list
    this.props.search_button_press();
  }
  onFavouritesButtonPress(){
    // indicates that the user pressed on the favourites button
    this.props.favourites_button_press();
  }

  render() {
    return(
      <Card>
        <CardSection>
          <Input
            label="Search"
            placeholder="Search"
            onChangeText={this.onSearchChange.bind(this)}
            value={this.props.search_word}
          />
        </CardSection>

        <CardSection>
          <Button onPressFunction={this.onSearchPress.bind(this)}> Search </Button>
          <Button onPressFunction={this.onButtonPress.bind(this)}> LogOut </Button>
        </CardSection>
        <CardSection>
        <Button onPressFunction={this.onFavouritesButtonPress.bind(this)}> favourites </Button>
        </CardSection>

      </Card>

    );
  }
};
// styles used for the components
const styles={
  containerStyle:{
    paddingTop:100,
    justifyContent:'flex-start',
    flexDirection:'row'
  },
  containerButtonStyle:{
    paddingTop:200,
    justifyContent:'flex-start',
    flexDirection:'row'
  }
}
// same concept just to have this value updated according to any change
const mapStateToProps = ({auth}) => {
  const { email, password, error, spinner, search_word, favourites} = auth;
  return {
    email,
    password,
    error,
    spinner,
    search_word,
    favourites
  };
};

export default connect(mapStateToProps,{user_logout,search_text,search_button_press,favourites_fetch,favourites_button_press})(Search);
