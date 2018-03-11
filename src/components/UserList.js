import React from 'react';
import { connect } from 'react-redux';
import MovieList from './MovieList';
import { selectTmdbConfig } from '../reducers';

// TODO: Pasar el config a una accion en react router al hacer login, guardar en localstorage quizas?

const UserList = props => {
  const tmdbConfiguration = props.config;

  if (!props.filmsList.length) {
    return <div> No movies added! :( </div>;
  }

  if (Object.keys(tmdbConfiguration).length === 0) {
    return <div> An error ocurred! :(</div>
  }

  const movieBoxProps = {
    tmdbConfiguration: tmdbConfiguration
  }

  return (
    this.props.error ?
    <div>Oops, something went wrong :(</div>
    :
    <MovieList
      films={props.filmsList}
      movieBoxProps={movieBoxProps}
    />
  );
};

const mapStateToProps = state => ({
  filmsList: state.filmsList,
  config: selectTmdbConfig(state.config),
  error: state.error
});

export default connect(mapStateToProps, null)(UserList);
