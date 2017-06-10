// Component used to show specific information about the favourites
import React,{Component} from 'react';
import {View, Text, Image, Linking, TouchableOpacity} from 'react-native';
import {Button , Card , CardSection, Spinner } from './common';
import { connect } from 'react-redux';
import { add_to_favourites} from '../actions/FavouritesActions';

class FavouritesDetails extends Component {
  render(){
    // dereferencing the result (video) element to get its specific information
    const result = this.props.result; // result contains the snippet and videoID and uid
    const {snippet, videoID} = result;
    const {channelTitle, publishedAt, title, thumbnails} = snippet;
    const {high} = thumbnails;
    const {url} = high;
    const {headContainerStyle, successMessageStyle, headerTextStyle , thumbnailStyle , thumbnailContainerStyle, imageStyle} = styles;
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
      </Card>
    );
  };
};

// styles used for the Component above
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
  }
}

export default FavouritesDetails;
