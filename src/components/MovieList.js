import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { List, MoviePoster } from "../styles";

//TODO: meter flexbox

// TODO: Pasar el config a una accion en react router al hacer login, quizas guardar en localStorage?

const Movie = styled(Link)`
  width: 70%;
  font-weight: bold;
`;

const MovieList = props => {
  const tmdbConfiguration = props.config;
  console.log(tmdbConfiguration);

  if (Object.keys(tmdbConfiguration).length === 0 || !props.filmsList.length) {
    return <div> Loading... </div>;
  }

  return (
    <List>
      {props.filmsList.map((movie, i) => {
        return (
          <div key={i}>
            {/* <Link to={`/movie/${movie.id}`}>
              {movie.title}({movie.release_date.slice(0, 4)})
            </Link> */}
            <Movie to={`/movie/${movie.id}`}>
              {movie.title}({movie.release_date.slice(0, 4)})
            </Movie>
            <MoviePoster
              src={`${tmdbConfiguration.images.base_url}/${tmdbConfiguration
                .images.poster_sizes[0]}${movie.poster_path}`}
              alt={`${movie.title} poster`}
            />
          </div>
        );
      })}
    </List>
  );
};

const mapStateToProps = state => {
  return {
    filmsList: state.filmsList,
    config: state.config
  };
};

export default connect(mapStateToProps, null)(MovieList);
