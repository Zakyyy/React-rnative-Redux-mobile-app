// Import libraries
import React from 'react';
import {Text,View} from 'react-native';

//make Component
const Header = (props) => {
  const { textStyle , viewStyle} = styles;

  return(
    <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};
const styles ={
  textStyle:{
    fontSize:20

  },
  viewStyle:{
    backgroundColor:'#F8F8F8',
    justifyContent: 'center', //moves Verticall
    alignItems: 'center', // moves Horizontal
    height: 60,
    paddingTop:15,
    shadowColor:'#000',
    shadowOffset:{ width:0, height:2},
    shadowOpacity:0.2
  }
};

// make this Component available to other parts

export  {Header};
