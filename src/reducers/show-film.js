export default (state = null, action) => {
  switch (action.type) {
    case "SHOW_FILM":
      return action.filmId;
    default:
      return state;
  }
};

export const getFilmDetails = state => {
  // Search for the movie in the film search state, and then in
  // user movie list state if it wasn't found
  const searchResultsCached = state.searchResults.find(
    movie => movie.id === state.filmToShow
  );
  const cachedFilm = searchResultsCached
    ? searchResultsCached
    : state.filmsList.find(movie => movie.id === state.filmToShow);

  return cachedFilm
    ? {
        title: cachedFilm.title,
        originalTitle: cachedFilm.original_title,
        voteAverage: cachedFilm.vote_average,
        originalLang: cachedFilm.original_language.toUpperCase(),
        releaseDate: cachedFilm.release_date.slice(0, 4),
        overview: cachedFilm.overview,
        posterPath: cachedFilm.poster_path
      }
    : {};
};
