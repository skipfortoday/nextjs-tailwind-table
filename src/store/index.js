import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import reducers from "./reducers";

const makeStore = () => {
  const composeEnhancers = composeWithDevTools;
  return createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
};

export default createWrapper(makeStore, { debug: false });
