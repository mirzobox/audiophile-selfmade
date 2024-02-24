import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: 0,
  price: 0,
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    data(state) {
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { data } = cart.actions;

export default cart.reducer;
