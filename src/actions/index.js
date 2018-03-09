import { apiKey, actionTypes } from '../constants';
import { tmdbGet } from '../APIUtils';

export const searchFilm = film => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=2323243&query=${film}`;

  return dispatch => {
    tmdbGet(dispatch, url, actionTypes.SEARCH_FILM);
  };
}

export const getConfig = () => {
  const url = `https://api.themoviedb.org/3/configuration?api_key=${apiKey}`;

  return dispatch => {
    tmdbGet(dispatch, url, actionTypes.GET_CONFIG);
  };
}

export const addFilm = film => {
  return {
    type: actionTypes.ADD_FILM,
    film
  };
}
