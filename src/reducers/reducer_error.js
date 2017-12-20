export default (state = null, action) => {
  switch (action.type) {
    case "ERROR":
      return action.error;
    default:
      return state;
  }
};