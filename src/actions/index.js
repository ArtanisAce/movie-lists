import { actionTypes } from '../constants';
import { tmdbGet } from '../APIUtils';

export const searchFilm = film => {

  return dispatch => {
    dispatch({ type: actionTypes.SEARCH_FILM });
    tmdbGet(dispatch, '/search-film', actionTypes.SEARCH_RESULTS, { film });
  };
}

export const getConfig = () => {

  return dispatch => {
    tmdbGet(dispatch, '/get-config', actionTypes.GET_CONFIG);
  };
}

export const addFilm = filmId => {
  return (dispatch, getState) => {
    // Save full movie object, so we will be able to have all movie data
    // in order to show on Movie component (full details) without having
    // to make an additional http request
    const fullMovie = getState().filmSearch.results.find(movie => filmId === movie.id);
    dispatch({
      type: actionTypes.ADD_FILM,
      film: fullMovie
    });
  };
}

export const showFilm = filmId => {
  return {
    type: actionTypes.SHOW_FILM,
    filmId
  }
}
