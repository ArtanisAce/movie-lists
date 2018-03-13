export default (state = null, action) => {
  switch (action.type) {
    case 'FETCH_ERROR':
      console.error(action.error);
      return action.error;
    default:
      return state;
  }
};