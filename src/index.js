import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";
import App from "./components/App";
import reducers from "./reducers/index";
import registerServiceWorker from "./registerServiceWorker";
import { loadState, saveState } from "./redux-localStorage.js";
import throttle from "lodash.throttle";

const persistedState = loadState(); // Rehydrate state using localStorage

const store = createStore(reducers, persistedState, applyMiddleware(thunk));

store.subscribe(throttle(() => { saveState(store.getState()); }));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
