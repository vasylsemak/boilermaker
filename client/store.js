import { createStore, applyMiddleware } from "redux";
import appReducer from "./store/index.js";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import axios from "axios";

const middlewares = [
  thunkMiddleware.withExtraArgument({ axios }), // use for async axios call
  createLogger({ collapsed: true }),
];

const store = createStore(appReducer, applyMiddleware(...middlewares));

export default store;
