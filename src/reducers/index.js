import { combineReducers } from 'redux';
import filmReducer from './reducer_search';
import addFilmReducer from './reducer_add_film';
import getConfig from './reducer_config';

const rootReducer = combineReducers({
  filmsResult: filmReducer,
  filmsList: addFilmReducer,
  config: getConfig
});

/* Selectors */

export const selectMovieList = state => {
  return state.map(movie => {
    return {
      id: movie.id,
      title: movie.title,
      releaseDate: movie.release_date ? movie.release_date.slice(0, 4) : '',
      overview: movie.overview ? movie.overview.slice(0, 300) : '',
      posterPath: movie.poster_path
    }
  });
}

export const selectTmdbConfig = state => {
  return {
    imagesUrl: state.images.base_url,
    posterSizes: state.images.poster_sizes[0]
  }
};

export default rootReducer;
