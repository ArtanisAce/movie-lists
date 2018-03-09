import { combineReducers } from 'redux';
import filmReducer from './reducer_search';
import filmsListReducer from './reducer_filmsList';
import getConfig from './reducer_config';

const rootReducer = combineReducers({
  filmsResult: filmReducer,
  filmsList: filmsListReducer,
  config: getConfig
});

/* Selectors */

export const selectFilmsResult = state => {
  return state.filmsResult.map(movie => {
    return {
      id: movie.id,
      title: movie.title,
      releaseDate: movie.release_date.slice(0, 4),
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
