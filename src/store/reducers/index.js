// external imports
import { combineReducers } from "redux";

// internal imports
import routeReducer from "./route";
import homeReducer from "./home";

const reducers = combineReducers({
  route: routeReducer,
  home: homeReducer,
});

export default reducers;
