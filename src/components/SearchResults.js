import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addFilm } from '../actions/index';
import { 
  getSearchResults, 
  getTmdbConfig, 
  getIsFetching,
  getSearchError,
  getConfigError
 } from '../reducers/index';
import MovieList from './MovieList';

class SearchResults extends Component {

  constructor() {
    super();
    this.state = { hideButtons: {}, errorCounter: 4 };
    this.addMovie = this.addMovie.bind(this);
    this.decreaseCounter = this.decreaseCounter.bind(this);
  }

  addMovie(movieId) {
    const film = this.props.searchResult.find(movie => movie.id === movieId);
    this.props.addFilm(film);
    this.setState({ hideButtons: Object.assign(this.state.hideButtons, { [movieId]: true }) });
  }

  decreaseCounter() {
    if (this.state.errorCounter > 0) {
      this.setState({errorCounter: this.state.errorCounter - 1});
    }
  }

  render() {
    const { 
      searchResult, 
      config, 
      searchError, 
      configError, 
      isFetching } = this.props

    if (isFetching && !searchResult.length) {
      return <div>Loading...</div>
    }

    if (!searchResult.length) {
      return <div>Couldn't find any film that matches the search...</div>
    }

    if (configError) {
      console.error(configError);
      return <div>There was a network issue. Please, reload the application</div>
    }

    if (searchError) {
      const counter = this.state.errorCounter;
      console.error(searchError);
      this.decreaseCounter();
      return
      (
        <div>
          <div>Oops, something went wrong with the search! Redirecting to home page...</div>
          <div>{counter}</div>
          !counter ? <Redirect to='/' /> : null
        </div>
      )
    }

    const movieBoxProps = {
      addMovieButton: true,
      config: config,
      addMovie: this.addMovie,
    }

    return (
      <MovieList
        films={searchResult}
        movieBoxProps={movieBoxProps}
        hideButtons={this.state.hideButtons} />
    );
  }
}

const mapStateToProps = state => ({
  searchResult: getSearchResults(state),
  config: getTmdbConfig(state),
  searchError: getSearchError(state),
  configError: getConfigError(state),
  isFetching: getIsFetching(state)
});

// Passing an object full of actions will automatically run each action 
// through the bindActionCreators utility, and turn them into props
//http://blog.isquaredsoftware.com/2016/10/idiomatic-redux-why-use-action-creators/
export default connect(mapStateToProps, { addFilm })(SearchResults);
