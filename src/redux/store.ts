import {
  createStore,
  compose,
  applyMiddleware,
  Store,
  Middleware,
} from "redux";
import rootReducer, { rootState } from "./root-reducer";
import { persistStore } from "redux-persist";

import logger from "redux-logger";
import thunk from "redux-thunk";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
// const composeEnhancer =
//   (process.env.NODE_ENV !== "production" &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const composeEnhancers = compose;
const initialState = {};

const middlewares: [any] = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const syncBreadCrumbs: Middleware = (store) => (next) => (action) => {
  return next(action);
};

middlewares.push(syncBreadCrumbs);

let store: Store<rootState> = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middlewares))
);
let persistor = persistStore(store, null);

export { store, persistor };
