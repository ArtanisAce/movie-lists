import { apiKey, actionTypes } from '../constants';
import { tmdbGet } from '../APIUtils';

const { SEARCH_FILM, GET_CONFIG, ADD_FILM } = actionTypes;

export const searchFilm = film => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${film}`;

  return dispatch => {
    tmdbGet(dispatch, url, SEARCH_FILM);
  };
}

export const getConfig = () => {
  const url = `https://api.themoviedb.org/3/configuration?api_key=${apiKey}`;

  return dispatch => {
    tmdbGet(dispatch, url, GET_CONFIG);
  };
}

export const addFilm = film => {
  return {
    type: ADD_FILM,
    film
  };
}
