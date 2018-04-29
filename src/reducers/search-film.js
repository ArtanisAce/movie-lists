import { combineReducers } from "redux";

const results = (state = [], action) => {
  switch (action.type) {
    case "SEARCH_RESULTS":
      return action.response.results;
    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case "SEARCH_FILM":
      return true;
    case "SEARCH_RESULTS":
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  results,
  isFetching
});

export const getSearchResults = state => {
  return state.results
    ? state.results.map(movie => {
        return {
          id: movie.id,
          title: movie.title,
          releaseDate: movie.release_date.slice(0, 4),
          overview: movie.overview ? movie.overview.slice(0, 300) : "",
          posterPath: movie.poster_path
        };
      })
    : [];
};

export const getIsFetching = state => state.isFetching;
