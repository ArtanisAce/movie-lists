import React from 'react';
import { connect } from 'react-redux';
import MovieList from './MovieList';
import { 
  getFilmsList, 
  getTmdbConfig, 
  getConfigError
 } from '../reducers/index';

const UserList = props => {

  const { filmsList, config, configError } = props;

  if (!filmsList.length) {
    return <div>No movies added! :(</div>;
  }

  if (configError) {
    console.error(configError);
    return <div>There was a network issue. Please, reload the application</div>
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
