import { configureStore } from "@reduxjs/toolkit";
import user from "../slices/user";
import cart from "../slices/cart";

export const store = configureStore({
  reducer: {
    user,
    cart,
  },
});
