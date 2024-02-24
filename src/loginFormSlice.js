import { createSlice } from "@reduxjs/toolkit";

export const loginFormSlice = createSlice({
  name: "loginForm",
  initialState: {
    name: "",
    email: "",
    age: "0",
    agreedToTerms: false,
    showEmail: false,
    loggingIn: true,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    agree: (state) => {
      state.agreedToTerms = true;
    },
    disagree: (state) => {
      state.agreedToTerms = false;
    },
    agreeEmail: (state) => {
      state.showEmail = true;
    },
    disagreeEmail: (state) => {
      state.showEmail = false;
    },
    logIn: (state) => {
      state.loggingIn = false;
    },
  },
});

export const {
  setAge,
   setEmail,
    setName,
     agree,
      disagree,
       logIn,
       agreeEmail,
       disagreeEmail,
       showEmail,
       email
       } = loginFormSlice.actions;

export default loginFormSlice.reducer;