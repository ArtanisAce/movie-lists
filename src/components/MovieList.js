import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { List, MoviePoster, MovieBox } from "../styles";

//TODO: meter flexbox / CSS Grid

// TODO: Pasar el config a una accion en react router al hacer login, guardar en localstorage quizas?

const Movie = styled(Link) `
  width: 70%;
  font-weight: bold;
`;

const MovieList = props => {
  const tmdbConfiguration = props.config;
  console.log(tmdbConfiguration);

  if (!props.filmsList.length) {
    return <div> No movies added! :( </div>;
  }

  if (Object.keys(tmdbConfiguration).length === 0) {
    return <div> An error ocurred! :(</div>
  }

  return (
    <List>
      {props.filmsList.map((movie, i) => {
        return (
          <MovieBox key={i}>
            <Movie to={`/movie/${movie.id}`}>
              {movie.title}({movie.release_date.slice(0, 4)})
            </Movie>
            <MoviePoster
              src={`${tmdbConfiguration.images.base_url}/${tmdbConfiguration
                .images.poster_sizes[0]}${movie.poster_path}`}
              alt={`${movie.title} poster`}
            />
          </MovieBox>
        );
      })}
    </List>
  );
};

const mapStateToProps = state => {
  console.log(state.filmsList);
  return {
    filmsList: state.filmsList,
    config: state.config
  };
};

export default connect(mapStateToProps, null)(MovieList);
