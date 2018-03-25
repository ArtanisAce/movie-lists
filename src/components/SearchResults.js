import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFilm } from '../actions/index';
import {
  getSearchResults,
  getTmdbConfig,
  getIsFetching,
  getSearchError,
  getConfigError
} from '../reducers/index';
import MovieList from './MovieList';
import filmRoll from '../svg/big-film-roll.svg';
import { ErrorMessage, LoadingIndicator } from '../styles';

class SearchResults extends Component {

  constructor() {
    super();
    this.state = { hideButtons: {} };
    this.addMovie = this.addMovie.bind(this);
  }

  addMovie(movieId) {
    const film = this.props.searchResult.find(movie => movie.id === movieId);
    this.props.addFilm(film.id);
    this.setState({ hideButtons: Object.assign(this.state.hideButtons, { [movieId]: true }) });
  }

  render() {
    const {
      searchResult,
      config,
      searchError,
      configError,
      isFetching } = this.props

    if (isFetching && !searchResult.length && !searchError && !configError) {
      return (
        <div>
          <div>Loading...</div>
          <LoadingIndicator path={filmRoll} />
        </div>
      )
    }

    if (configError) {
      return <ErrorMessage>There was a network issue. Please, reload the application</ErrorMessage>
    }

    if (searchError) {
      return <ErrorMessage>Oops, something went wrong with the search!</ErrorMessage>
    }

    if (!searchResult.length) {
      return <ErrorMessage>Couldn't find any film that matches the search...</ErrorMessage>
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
