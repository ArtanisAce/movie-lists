import { actionTypes } from './constants';
import axios from 'axios';

export const tmdbGet = async (dispatch, url, onSuccessType, params = {}) => {

  const fetchData = Object.keys(params).length ?
   await axios.get(url) : await axios.get(url, { params });
  console.log(fetchData.data);
  if (fetchData.statusText === 'OK') {
    dispatch({ type: onSuccessType, response: fetchData.data });
  } else {
    const errorType = onSuccessType === actionTypes.SEARCH_RESULTS ? 
    actionTypes.SEARCH_ERROR : actionTypes.CONFIG_ERROR;
    dispatch({ type: errorType, error: fetchData.response });
  }
}