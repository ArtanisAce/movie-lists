export default (state = null, action) => {
  switch (action.type) {
    case 'FETCH_ERROR':
      return action.error;
    default:
      return state;
  }
};