export default (state = null, action) => {
  switch (action.type) {
    case 'FETCH_ERROR':
      console.log(action.error);
      return action.error.message;
    default:
      return state;
  }
};