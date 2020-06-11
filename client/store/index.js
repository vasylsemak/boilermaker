import { combineReducers } from "redux";
import usersReducer from "./users";
import puppiesReducer from "./puppies";

const appReducer = combineReducers({
  users: usersReducer,
  puppies: puppiesReducer,
});

export default appReducer;
