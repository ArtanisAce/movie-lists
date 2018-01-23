export default (state = [], action) => {
  switch (action.type) {
    case "ADD_FILM":
      return [...state, action.film];
    default:
      return state;
  }
};
