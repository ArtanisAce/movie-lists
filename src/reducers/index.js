import { combineReducers } from 'redux';
import filmSearchReducer, * as getResults from './reducer_search';
import filmsListReducer from './reducer_filmsList';
import configReducer, * as getConfig from './reducer_config';
import errorReducer from './reducer_error';

const rootReducer = combineReducers({
  filmSearch: filmSearchReducer,
  filmsList: filmsListReducer,
  config: configReducer,
  error: errorReducer
});

export default rootReducer;

/* Selectors */

export const selectSearchResults = state =>
  getResults.selectSearchResults(state.filmSearch);

export const selectIsFetching = state => 
  getResults.selectIsFetching(state.filmSearch);

export const getError = state => 
  state.error;

export const selectTmdbConfig = state =>
  getConfig.selectTmdbConfig(state.config);
