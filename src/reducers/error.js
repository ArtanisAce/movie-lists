import { combineReducers } from 'redux';

const searchError = (state = null, action) => {
  switch (action.type) {
    case 'SEARCH_ERROR':
      return action.error;
    default:
      return state;
  }
};

const configError = (state = null, action) => {
  switch (action.type) {
    case 'CONFIG_ERROR':
      return action.error;
    default:
      return state;
  }
};

export default combineReducers({
  searchError,
  configError
});

export const getSearchError = state => state.searchError;

export const getConfigError = state => state.configError;