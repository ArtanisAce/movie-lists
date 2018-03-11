import { actionTypes } from './constants';

export const tmdbGet = async (dispatch, url, onSuccessType) => {
  function onSuccess(response) {
    dispatch({ type: onSuccessType, response });
  }
  function onError(error) {
    dispatch({ type: actionTypes.FETCH_ERROR, error });
  }

  try {
    let tmdbRequest = await fetch(url);
    let response = await tmdbRequest.json();
    if (tmdbRequest.ok) {  
      onSuccess(response);
    } else {
      onError(response.status_message);
    }
  } catch (error) {
    onError(error);
  }
}