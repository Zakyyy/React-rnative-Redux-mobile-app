// List used to view the favourites list of the current logged in user
import React , { Component } from 'react';
import _ from 'lodash';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import {Button , Card , CardSection , Input , Spinner } from './common';
import { favourites_fetch } from '../actions/FavouritesActions';// action creators used by this component
import FavouritesDetails from './FavouritesDetails';
class FavouritesList extends Component{
  componentWillMount(){
    // before rendring the Component it will fetch the data of the favourites from the database
    // returning an object of data
    this.props.favourites_fetch();
  }
  renderFav(){
    // method used to create the list of favourites by applying the map function on favArray (array of favourites) and produce
    // a component for each specific favourite
    return this.props.favArray.map(result => <FavouritesDetails key={result.uid} result={result} />);
  }
  render(){
    return(
      <ScrollView>
        {this.renderFav()}
      </ScrollView>
    );
  };
}
const mapStateToProps = ({auth}) => {
  const { favourites } = auth;
  const favArray= _.map(favourites, (val, uid) => {
    // this method is used to convert the object retrieved from the database into an array of videos
    // to make it easier to show it
    return {...val, uid};
  });
// favArray IS now the array of favourites
  return {favArray};
};

export default connect(mapStateToProps,{favourites_fetch})(FavouritesList);
