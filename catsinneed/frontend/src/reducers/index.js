import { combineReducers } from "redux";
import cats from "./cats";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";

export default combineReducers({
  cats,
  errors,
  messages,
  auth
});
