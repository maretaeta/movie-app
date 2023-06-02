import { combineReducers } from "@reduxjs/toolkit";
import post from "./post";
import tv from "./tvReducers";
import auth from "./authReducers";

export default combineReducers({
  post,
  tv,
  auth,
});
