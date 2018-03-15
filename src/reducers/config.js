const configReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_CONFIG':
      return action.response;
    default:
      return state;
  }
};

export default configReducer;

export const getTmdbConfig = state => {
  if (Object.keys(state).length) {
    return {
      imagesUrl: state.images.base_url,
      posterSizes: state.images.poster_sizes[0]
    }
  } else {
    return {};
  }
};