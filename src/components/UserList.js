import React from 'react';
import { connect } from 'react-redux';
import MovieList from './MovieList';
import { 
  getFilmsList, 
  getTmdbConfig, 
  getConfigError
 } from '../reducers/index';
 import { ErrorMessage } from '../styles';

const UserList = props => {

  const { filmsList, config, configError } = props;

  if (!filmsList.length) {
    return <ErrorMessage>No movies added! :(</ErrorMessage>;
  }

  if (configError) {
    console.error(configError);
    return <ErrorMessage>There was a network issue. Please, reload the application</ErrorMessage>
  }

  const movieBoxProps = {
    config
  }

  return (
    <MovieList
      films={filmsList}
      movieBoxProps={movieBoxProps}
    />
  );
};

const mapStateToProps = state => ({
  filmsList: getFilmsList(state),
  config: getTmdbConfig(state),
  configError: getConfigError(state)
});

export default connect(mapStateToProps, null)(UserList);
