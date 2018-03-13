import { actionTypes } from './constants';

export const tmdbGet = async (dispatch, url, onSuccessType) => {

  const tmdbRequest = await fetch(url);
  const response = await tmdbRequest.json();
  if (tmdbRequest.ok) {
    dispatch({ type: onSuccessType, response });
  } else {
    dispatch({ type: actionTypes.FETCH_ERROR, error: response.status_message });
  }
}