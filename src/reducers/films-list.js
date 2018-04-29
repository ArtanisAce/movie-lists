export default (state = [], action) => {
  switch (action.type) {
    case "ADD_FILM":
      return [...state, action.film];
    default:
      return state;
  }
};

export const getFilmsList = state => {
  return state
    ? state.map(movie => {
        return {
          id: movie.id,
          title: movie.title,
          releaseDate: movie.release_date.slice(0, 4),
          overview: movie.overview ? movie.overview.slice(0, 300) : "",
          posterPath: movie.poster_path
        };
      })
    : [];
};
