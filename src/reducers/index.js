import { combineReducers } from "redux";
import filmReducer from "./reducer_search";
import addFilmReducer from "./reducer_add_film";
import getConfig from "./reducer_config";

const rootReducer = combineReducers({
  filmsResult: filmReducer,
	filmsList: addFilmReducer,
	config: getConfig
});

export default rootReducer;
