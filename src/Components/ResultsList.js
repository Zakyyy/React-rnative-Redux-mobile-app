// Component used to show the 25 results from search, and to show each result in a specific card containing its details
// and under each card an add to favourite button if you want to add this specific video to your favourites
import React ,{ Component} from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { get_state, get_search_results} from '../actions'; // action Creators used in this Component
import axios from 'axios';
import ResultDetails from './ResultDetails';


class ResultsList extends Component{
  componentWillMount(){
    // when the Component is rendered before it to gets the search results data from google youtube api and
    // then call an action creator to save this results in a variable to be easily used
    this.props.get_state();
    axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q='+this.props.search_word+'&key=AIzaSyCuhGv3MEDVyj_0fcXrKWozLQXuNx3DA84').
    then(response => this.props.get_search_results(response.data.items));
  }

  renderResults(){
    // using the variable that have the search results map each result into a Component that shows some of its specific details
    return this.props.searchResults.map(result => <ResultDetails key={result.etag} result={result}/>);
  }

  render() {
    return(
        <ScrollView>
          {this.renderResults()}
        </ScrollView>
    );
  };
}
// placing all the Component in a scroll view tag to make it scrollable
const mapStateToProps = ({auth}) => {
  // used to get the states of the requird props items needed above like searchResults
  const { email, password, error, spinner, search_word,searchResults } = auth;
  return {
    email,
    password,
    error,
    spinner,
    search_word,
    searchResults
  };
};

export default connect(mapStateToProps,{get_state,get_search_results})(ResultsList);
