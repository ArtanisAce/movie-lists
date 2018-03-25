import { actionTypes } from './constants';
import axios from 'axios';

export const tmdbGet = async (dispatch, url, onSuccessType, specialParams = null) => {
  try {
    const parameters = { params: { ...specialParams } };
    const fetchData = !specialParams ? await axios.get(url) :
      await axios.get(url, parameters);
    dispatch({ type: onSuccessType, response: fetchData.data });
  } catch (e) {
    // We don't want to log the errors to not give riskful info for an
    // attack. We are already tracking and displaying error on the backend,
    // so on the frontend we will just keep the status text on the state
    // (even though we're not displaying it yet; but might be useful)
    const errorType = onSuccessType === actionTypes.SEARCH_RESULTS ?
      actionTypes.SEARCH_ERROR : actionTypes.CONFIG_ERROR;
    dispatch({ type: errorType, error: e.response.statusText });
  }
}