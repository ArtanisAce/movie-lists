export default (state = [], action) => {
  switch (action.type) {
    case "SEARCH_FILM":
      return action.response;
    default:
      return state;
  }
};
