import { configureStore } from "@reduxjs/toolkit";
import loginFormReducer from "./loginFormSlice";

export default configureStore({
  reducer: {
    loginForm: loginFormReducer,
  },
});
