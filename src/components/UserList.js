import React from 'react';
import { connect } from 'react-redux';
import MovieList from './MovieList';
import { selectTmdbConfig } from '../reducers';

const UserList = props => {

  const { filmsList, config, error } = props;

  if (!filmsList.length) {
    return <div> No movies added! :( </div>;
  }

  const movieBoxProps = {
    config
  }

  return (
    error ?
    <div>Oops, something went wrong :(</div>
    :
    <MovieList
      films={filmsList}
      movieBoxProps={movieBoxProps}
    />
  );
};

const mapStateToProps = state => ({
  filmsList: state.filmsList,
  config: selectTmdbConfig(state),
  error: state.error
});

export default connect(mapStateToProps, null)(UserList);
