export default (state = null, action) => {
  switch (action.type) {
    case 'SHOW_FILM':
      return action.filmId;
    default:
      return state;
  }
}

export const getFilmDetails = state => {
  // Search for the movie in the film search state, and then in
  // user movie list state if it wasn't found
  const cachedFilm = state.searchResults.find(movie => movie.id === state.filmToShow);
  return cachedFilm ? cachedFilm : state.filmsList.find(movie => movie.id === state.filmToShowId);
}