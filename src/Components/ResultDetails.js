// component used to show some specific information about each video
import React,{Component} from 'react';
import {View, Text, Image, Linking, TouchableOpacity} from 'react-native';
import {Button , Card , CardSection, Spinner } from './common';
import { connect } from 'react-redux';
import { add_to_favourites} from '../actions/FavouritesActions';

class ResultDetails extends Component {
  onFavouritesPress(){
    // Method used to send specific information of the video you want to add to favourites to the action Creator
    // to save it in the database
    const result =this.props.result;
    const {snippet}= result;
    const videoID=result.id.videoId;
    this.props.add_to_favourites(snippet,videoID);
  }
  renderButton(){
    // used to either show the spinner will adding a video to the favourites or the add to favourites Button
    if(this.props.spinner){
      return <Spinner size= "large" />;
    }
    return(
      <Button onPressFunction={this.onFavouritesPress.bind(this)}> Add to favourites </Button>
    );
  }
// by putting the image in TouchableOpacity to make it clicable to open this youtube video
  render(){
    const result = this.props.result;
    const {snippet} = result;
    const {channelTitle, publishedAt, title, thumbnails} = snippet;
    const {high} = thumbnails;
    const {url} = high;
    const {headContainerStyle, successMessageStyle, headerTextStyle , thumbnailStyle , thumbnailContainerStyle, imageStyle} = styles;
    const videoID = result.id.videoId;
    return(
      <Card>

        <TouchableOpacity onPress={()=> Linking.openURL('https://www.youtube.com/watch?v='+videoID)}>
          <CardSection>
              <Image style={imageStyle} source={{uri:url}}/>
          </CardSection>
        </TouchableOpacity>

        <CardSection>
          <View style={headContainerStyle}>
            <Text style={headerTextStyle}>{title}</Text>
            <Text>{channelTitle}</Text>
          </View>
        </CardSection>

        <Text style={successMessageStyle}>{this.props.success_message} </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>


      </Card>
    );
  };
};

// styles used  by the above Component to adjust its view
const styles = {
  headerTextStyle:{
    fontSize:18
  },

  thumbnailStyle: {
    height:360,
    width:480
  },

  thumbnailContainerStyle: {
    justifyContent:'center',
    alignItems:'center',
    marginLeft:10,
    marginRight:10
  },

  imageStyle: {
    height:300,
    flex:1,
    width:null
  },
  successMessageStyle: {
    fontSize:16,
    color: 'green',
    alignSelf:'center'
  }
}

const mapStateToProps = ({auth}) => {
  // used to get the needed current values of some variables below to use it above
  // as this method returns the current value after any update happens
  const { email, password, error, spinner, search_word, success_message} = auth;
  return {
    email,
    password,
    error,
    spinner,
    search_word,
    success_message
  };
};

export default connect(mapStateToProps,{add_to_favourites})(ResultDetails);
