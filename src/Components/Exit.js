import React , { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { confirm_logout, cancel_logout} from '../actions'; // action creators used in this Component
import {Button , Card , CardSection , Input , Spinner } from './common';
class Search extends Component {

  onButtonPress(){
    // indicate that the user pressed the logOut button again and want to confirm his exit
    this.props.confirm_logout();
  };
  onCancelButtonPress(){
    // indicates that the user pressed on the cancel button to stop his logout and return back to
    // the search page
    this.props.cancel_logout();
  };
  renderButton(){
    // this method used to either show the spinner will logging out or the logout button
    if(this.props.spinner){
      return <Spinner size= "large" />;
    }
    return(
      <Button onPressFunction={this.onButtonPress.bind(this)}>
        LogOut
      </Button>
    );
  }

  render() {
    return(
        <View style={styles.containerStyle}>
          {this.renderButton()}
          <Button onPressFunction={this.onCancelButtonPress.bind(this)}> Cancel </Button>
        </View>

    );
  }
};

// styles for the View
const styles={
  containerStyle:{
    justifyContent:'flex-start',
    flexDirection:'row'

  }
}
// states of the spinner to use it.
const mapStateToProps = ({auth}) => {
  const { email, password, error, spinner} = auth;
  return {
    email,
    password,
    error,
    spinner
  };
};

export default connect(mapStateToProps,{confirm_logout,cancel_logout})(Search);
