// Login Form
import React , { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser} from '../actions'; // action creators used in this view
import {Button , Card , CardSection , Input , Spinner } from './common';

class LoginForm extends Component {
  onEmailChange(text){
    // function called to indicate change in the email letters to always update its value
    this.props.emailChanged(text);
  }
  onPasswordChange(text){
    // function called to indicate change in the password letters in order to update its value
    this.props.passwordChanged(text);
  }
  onButtonPress() {
    // indicates that the users presses the login button and takes current email and password and try to login
    const {email, password} = this.props;
    this.props.loginUser({email, password});
  }
  renderButton(){
    // function used to either show the login button or to show the spinner
    if(this.props.spinner){
      return <Spinner size= "large" />;
    }
    return(
      <Button onPressFunction={this.onButtonPress.bind(this)}>
        login
      </Button>
    );
  }

  render(){
    return(
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value= {this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            placeholder="password"
            secureTextEntry
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}
// styles for the login form components
const styles ={
  errorTextStyle:{
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

const mapStateToProps = ({ auth }) => {
  // returns the current state of these values to be auto updated within use
  const { email, password, error, spinner} = auth;
  return {
    email,
    password,
    error,
    spinner
  };
};

export default connect(mapStateToProps,{
  emailChanged, passwordChanged, loginUser
})(LoginForm);
