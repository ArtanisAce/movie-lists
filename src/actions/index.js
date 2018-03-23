import { actionTypes } from '../constants';
import { tmdbGet } from '../APIUtils';

export const searchFilm = film => {

  return dispatch => {
    dispatch({type: actionTypes.SEARCH_FILM});
    tmdbGet(dispatch, '/search-film', actionTypes.SEARCH_RESULTS, { film });
  };
}

export const getConfig = () => {
  
  return dispatch => {
    tmdbGet(dispatch, '/get-config', actionTypes.GET_CONFIG);
  };
}

export const addFilm = film => {
  return {
    type: actionTypes.ADD_FILM,
    film
  };
}
