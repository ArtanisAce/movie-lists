import { apiKey, actionTypes } from '../constants';
import { tmdbGet } from '../APIUtils';

export const searchFilm = film => {
  // const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${film}`;

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
