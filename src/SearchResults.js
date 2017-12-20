import React, { Component } from "react";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addFilm } from "./actions/index";
import { List, MoviePoster } from "./styles";

const AddMovieBtn = styled.button`
  display: block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  border: 2px solid #f5f5f5;
  border-radius: 50%;
  color: #f5f5f5;
  text-align: center;
  text-decoration: none;
  background: #464646;
  box-shadow: 0 0 3px gray;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: #262626;
  }
`;

class SearchResults extends Component {
  addMovie(movieId) {
    const film = this.props.filmsResult.find(movie => movie.id === movieId);
    this.props.addFilm(film);
  }

  render() {
    const tmdbConfiguration = this.props.config;

    if (Object.keys(tmdbConfiguration).length === 0 || !this.props.filmsResult.length) {
      return <div> Loading... </div>;
    }

    return (
      <div className="search-result">
        <List>
          {this.props.filmsResult.map((movie, i) => {
            return (
              <li key={i}>
                <Link to={`/movie/${movie.id}`}>
                  {movie.title}({movie.release_date.slice(0, 4)})
                </Link>
                <MoviePoster
                  src={`${tmdbConfiguration.images.base_url}/${tmdbConfiguration
                    .images.poster_sizes[0]}${movie.poster_path}`}
                  alt={`${movie.title} poster`}
                />
                <AddMovieBtn onClick={() => this.addMovie(movie.id)}>
                  +
                </AddMovieBtn>
              </li>
            );
          })}
        </List>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filmsResult: state.filmsResult,
    config: state.config
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addFilm }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
