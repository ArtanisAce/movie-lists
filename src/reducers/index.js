import { combineReducers } from 'redux';
import filmSearchReducer, * as fromSearch from './search-film';
import filmsListReducer, * as fromFilmsList from './films-list';
import showFilmReducer, * as fromShowFilm from './show-film';
import configReducer, * as fromConfig from './config';
import errorReducer, * as fromError from './error';

const rootReducer = combineReducers({
  filmSearch: filmSearchReducer,
  filmsList: filmsListReducer,
  filmToShow: showFilmReducer,
  config: configReducer,
  error: errorReducer
});

export default rootReducer;

/* Selectors */

export const getSearchResults = state =>
  fromSearch.getSearchResults(state.filmSearch);

export const getIsFetching = state =>
  fromSearch.getIsFetching(state.filmSearch);

export const getTmdbConfig = state =>
  fromConfig.getTmdbConfig(state.config);

export const getFilmsList = state =>
  fromFilmsList.getFilmsList(state);

export const getFilmDetails = state =>
  fromShowFilm.getFilmDetails(Object.assign({},
    { searchResults: state.filmSearch.results }, { filmsList: state.filmsList },
    { filmToShowId: state.filmToShow }));

export const getSearchError = state =>
  fromError.getSearchError(state.error);

export const getConfigError = state =>
  fromError.getConfigError(state.error);

