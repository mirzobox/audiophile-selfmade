import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    data(state) {
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { data } = user.actions;

export default user.reducer;
