// //external imports
// import { applyMiddleware, createStore, compose } from "redux";
// import thunk from "redux-thunk";
// import logger from "redux-logger";
// import { composeWithDevTools } from "redux-devtools-extension";

// // internal imports
// import reducers from "./reducers";

// //thunk middleware is used to intercept actions so as to make API call before dispatching result to reducer
// const store = createStore(
//   reducers,
//   composeWithDevTools(applyMiddleware(thunk, logger))
// );

// export default store;

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
