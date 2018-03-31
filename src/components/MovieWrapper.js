import React from 'react';
import { connect } from 'react-redux';
import { showFilm } from '../actions/index';
import { getFilmDetails, getTmdbConfig, getConfigError } from '../reducers/index';
import { ErrorMessage, LoadingIndicator } from '../styles';
import filmRoll from '../svg/big-film-roll.svg';
import Movie from './Movie';

class MovieWrapper extends React.Component {

  componentDidMount() {
    this.props.showFilm(parseInt(this.props.match.params.id, 10));
  }

  render() {

    if (!this.props.movie) {
      return (
        <div>
          <div>Loading...</div>
          <LoadingIndicator path={filmRoll} />
        </div>
      );
    }

    if (this.props.configError) {
      return <ErrorMessage>There was a network issue. Please, reload the application</ErrorMessage>
    }

    //Display error, have an isFetching flag? We're getting the details from state...

    return (
      <Movie {...this.props.movie} config={this.props.config} />
    );
  }
}

const mapStateToProps = state => ({
  movie: getFilmDetails(state),
  config: getTmdbConfig(state, 2),
  configError: getConfigError(state),
});

export default connect(mapStateToProps, { showFilm })(MovieWrapper);
