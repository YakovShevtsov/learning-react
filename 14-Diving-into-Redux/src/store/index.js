import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter-slice";
import authSlice from "./auth-slice";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  }, // can also asign as an object, to pass multiple reducer functions
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
