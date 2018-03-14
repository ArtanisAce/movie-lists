import { actionTypes } from './constants';

export const tmdbGet = async (dispatch, url, onSuccessType) => {

  const tmdbRequest = await fetch(url);
  const response = await tmdbRequest.json();
  if (tmdbRequest.ok) {
    dispatch({ type: onSuccessType, response });
  } else {
    const errorType = onSuccessType === actionTypes.SEARCH_RESULTS ? 
    actionTypes.SEARCH_ERROR : actionTypes.CONFIG_ERROR;
    dispatch({ type: errorType, error: response.status_message });
  }
}