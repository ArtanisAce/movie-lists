import React, { Component } from "react";
import tmdbLogo from "./powered-by-tmdb.svg";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./App.css";
import SearchBar from "./SearchBar";
import { addFilm } from "./actions/index";
import { getConfig } from "./actions/index";

class App extends Component {
  addMovie(movieId) {
    const film = this.props.filmsResult.find(movie => movie.id === movieId);
    this.props.addFilm(film);
  }

  componentWillMount() {
    this.props.getConfig();
  }

  render() {
    console.log(this.props.config);
    const tmdbConfiguration = this.props.config;

    return (
      <div className="App">
        <header className="App-header">
          <img src={tmdbLogo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Movie-lists</h1>
          <SearchBar />
        </header>
        <div className="search-result">
          <ul>
            {this.props.filmsResult.map((movie, i) => {
              return (
                <li key={i}>
                  <a onClick={() => this.addMovie(movie.id)}>
                    {movie.title}({movie.release_date.slice(0, 4)})
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="movies-list">
          <ul>
            {this.props.filmsList &&
              this.props.filmsList.map((movie, i) => {
                return (
                  <div key={i}>
                    <li>
                      {movie.title}({movie.release_date.slice(0, 4)})
                    </li>
                    <span>
                      <img
                        src={`${tmdbConfiguration.images
                          .base_url}/${tmdbConfiguration.images
                          .poster_sizes[0]}${movie.poster_path}`}
                        alt={`${movie.title} poster`}
                      />
                    </span>
                  </div>
                );
              })}
          </ul>
        </div>
        <footer className="footer">Created by Pedro Pablo Miron Pozo</footer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filmsResult: state.filmsResult,
    filmsList: state.filmsList,
    config: state.config
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addFilm, getConfig }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
