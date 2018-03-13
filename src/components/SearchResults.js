import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFilm } from '../actions/index';
import { selectSearchResults, selectTmdbConfig, selectIsFetching } from '../reducers/index';
import MovieList from './MovieList';

class SearchResults extends Component {

  constructor() {
    super();
    this.state = { hideButtons: {} };
    this.addMovie = this.addMovie.bind(this);
  }

  addMovie(movieId) {
    const film = this.props.searchResult.find(movie => movie.id === movieId);
    this.props.addFilm(film);
    this.setState({ hideButtons: Object.assign(this.state.hideButtons, { [movieId]: true }) });
  }

  render() {
    const { searchResult, config, error, isFetching } = this.props

    if (isFetching && !searchResult.length) {
      return <div> Loading... </div>
    }

    if (error) {
      return <div>Oops, something went wrong :(</div>
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
  searchResult: selectSearchResults(state),
  config: selectTmdbConfig(state),
  error: state.error,
  isFetching: selectIsFetching(state)
});

// Passing an object full of actions will automatically run each action 
// through the bindActionCreators utility, and turn them into props
//http://blog.isquaredsoftware.com/2016/10/idiomatic-redux-why-use-action-creators/
export default connect(mapStateToProps, { addFilm })(SearchResults);
