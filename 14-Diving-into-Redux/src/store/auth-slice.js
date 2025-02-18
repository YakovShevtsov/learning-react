import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  isLoggedIn: false,
  userData: { email: "test@example.com", password: "12345" },
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    login(state, action) {
      if (
        action.payload.enteredEmail === state.userData.email &&
        action.payload.enteredPassword === state.userData.password
      ) {
        state.isLoggedIn = true;
      }
    },

    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
