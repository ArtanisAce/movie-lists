import React from 'react';
import { connect } from 'react-redux';
import { showFilm } from '../actions/index';
import { getFilmDetails } from '../reducers/index';
import { LoadingIndicator } from '../styles';
import filmRoll from '../svg/big-film-roll.svg';

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

    //Display error, have an isFetching flag? We're getting the details from state...

    return (
      <div>
        {this.props.movie.id}
        {this.props.movie.title}
        {/* Render here <Movie> component, pure presentational, CSS Grid layouted*/}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movie: getFilmDetails(state)
});

export default connect(mapStateToProps, { showFilm })(MovieWrapper);
