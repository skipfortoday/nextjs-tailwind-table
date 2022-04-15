// external imports
import { combineReducers } from "redux";

// internal imports
import routeReducer from "./route";

const reducers = combineReducers({
  route: routeReducer,
});

export default reducers;
