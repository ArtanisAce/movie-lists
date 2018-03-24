import { actionTypes } from './constants';
import axios from 'axios';

export const tmdbGet = async (dispatch, url, onSuccessType, specialParams = null) => {
  const parameters = { params: { ...specialParams } };
  const fetchData = await axios.get(url)
  console.log(fetchData);
  if (fetchData.statusText === 'OK') {
    dispatch({ type: onSuccessType, response: fetchData.data });
  } else {
    const errorType = onSuccessType === actionTypes.SEARCH_RESULTS ?
      actionTypes.SEARCH_ERROR : actionTypes.CONFIG_ERROR;
    dispatch({ type: errorType, error: fetchData.response });
  }
}