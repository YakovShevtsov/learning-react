import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterInitialState = { counter: 0, showCounter: true };
const authInitialState = {
  isLoggedIn: false,
  userData: { email: "test@example.com", password: "12345" },
};

const counterSlice = createSlice({
  name: "counter",
  initialState: counterInitialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

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

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  }, // can also asign as an object, to pass multiple reducer functions
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
