export default (state = [], action) => {
  switch (action.type) {
    case "ADD_FILM":
      console.log([...state, action.film]);
      return [...state, action.film];
    default:
      return state;
  }
};
