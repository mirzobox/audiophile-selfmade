import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isPending: false,
  isError: false,
  isAuthReady: false,
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.user = payload;
    },
    setAuthReady(state, { payload }) {
      state.isAuthReady = payload;
    },
    setPending(state, { payload }) {
      state.isPending = payload;
    },
    setError(state, { payload }) {
      state.isError = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, setPending, setError, setAuthReady } = user.actions;

export default user.reducer;
