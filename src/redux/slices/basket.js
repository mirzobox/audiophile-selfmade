import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const basket = createSlice({
  name: "basket",
  initialState,
  reducers: {
    data(state) {
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { data } = basket.actions;

export default basket.reducer;
