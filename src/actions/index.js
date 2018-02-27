import { apiKey } from "../constants";
import { tmdbGet } from "../APIUtils";

export const searchFilm = film => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${film}`;

  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.
  return dispatch => {
    tmdbGet(dispatch, url, "SEARCH_FILM");
  };
}

export const getConfig = () => {
  const url = `https://api.themoviedb.org/3/configuration?api_key=${apiKey}`;

  return dispatch => {
    tmdbGet(dispatch, url, "GET_CONFIG");
  };
}

export const addFilm = film => {
  return {
    type: "ADD_FILM",
    film
  };
}
