import React from 'react';
import { showFilm } from '..actions/index';
import { connect } from 'react-redux';

class MovieWrapper extends React.Component {

  componentDidMount() {
    // call action creator. This should search for the film, on the store,
    // and get the state. User films list should then be saved aswell as the whole
    // films object, in order to find a film that was clicked for full details
    // in UserList
  }

  render() {
    const movieId = parseInt(props.match.params.id, 10);
    return (
      <div>
        {movieId}
      </div>
    );
  }
}

export default connect(mapStateToProps, { showFilm })(MovieWrapper);
