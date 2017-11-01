export default (state = [], action) => {
  switch (action.type) {
    case "GET_CONFIG":
      return action.response;
    default:
      return state;
  }
};
