import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addFilm } from "../actions/index";
import MovieList from "./MovieList";

class SearchResults extends Component {

  constructor() {
    super();
    this.state = { hideButtons: {} };
    this.addMovie = this.addMovie.bind(this);
  }

  addMovie(movieId) {
    const film = this.props.filmsResult.find(movie => movie.id === movieId);
    this.props.addFilm(film);
    this.setState({ hideButtons: Object.assign(this.state.hideButtons, { [movieId]: true }) });
  }

  render() {
    const tmdbConfiguration = this.props.config;

    if (Object.keys(tmdbConfiguration).length === 0) {
      return <div> An error ocurred :( </div>;
    }

    if (!this.props.filmsResult.length) {
      return <div> Loading... </div>
    }

    const movieBoxProps = {
      addMovieButton: true,
      tmdbConfiguration: tmdbConfiguration,
      addMovie: this.addMovie,
    }

    return (
      <MovieList
        films={this.props.filmsResult}
        movieBoxProps={movieBoxProps}
        hideButtons={this.state.hideButtons} />
    );
  }
}

const mapStateToProps = state => {
  return {
    filmsResult: state.filmsResult,
    config: state.config
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addFilm }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
