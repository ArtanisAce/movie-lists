export function searchFilm(film) {
  const apiKey = "77e8ba72ea77e21dbf90375e91ae2ad9"; //TODO: extraer a un archivo de constantes
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${film}`;

  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.
  return async dispatch => {
    function onSuccess(resp) {
      dispatch({ type: "SEARCH_FILM", response: resp.results });
    }
    function onError(error) {
      dispatch({ type: "SEARCH_ERROR", error });
    }

    try {
      let tmdbRequest = await fetch(url);
      let resp = await tmdbRequest.json();
      onSuccess(resp);
    } catch (error) {
      onError(error);
    }
  };
}

export function getConfig() {
  const apiKey = "77e8ba72ea77e21dbf90375e91ae2ad9"; //TODO: extraer a un archivo de constantes
  const url = `https://api.themoviedb.org/3/configuration?api_key=${apiKey}`;

  return async dispatch => {
    function onSuccess(response) {
      dispatch({ type: "GET_CONFIG", response });
    }
    function onError(error) {
      dispatch({ type: "GET_ERROR", error });
    }

    try {
      let tmdbRequest = await fetch(url);
			let resp = await tmdbRequest.json();
      onSuccess(resp);
    } catch (error) {
      onError(error);
    }
  };
}

export function addFilm(film) {
  return {
    type: "ADD_FILM",
    film
  };
}
