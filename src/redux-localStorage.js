// This functions will be used to save / load state to
// localStorage and rehydrate the application state

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (err) {
    console.error(err);
  }
};

export const loadState = () => {
  try {
    if (localStorage.getItem("reduxState")) {
      return JSON.parse(localStorage.getItem("reduxState"));
    } else {
      return undefined; // let reducers initialize the state with the default one
    }
  } catch (err) {
    return undefined;
  }
};
