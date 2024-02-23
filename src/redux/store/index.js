import { configureStore } from "@reduxjs/toolkit";
import { user } from "../slices/user";
import { basket } from "../slices/basket";

export const store = configureStore({
  reducer: {
    user,
    basket,
  },
});
