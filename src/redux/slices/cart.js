import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProductAmount: 0,
  allProductPrice: 0,
  addedProducts: [],
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementOrAddProduct(state, { payload }) {
      const product = state.addedProducts.find(
        (select) => select.id === payload,
      );
      if (product) {
        product.amount += 1;
      } else {
        state.addedProducts = [...state.addedProducts, payload];
      }
    },
    decrementOrRemoveProduct(state, { payload }) {
      const product = state.addedProducts.find(
        (select) => select.id === payload.id,
      );
      console.log(product);
      if (product) {
        product.amount -= 1;
      } else {
        state.addedProducts = [...state.addedProducts, payload];
      }
    },
    deleteAll(state, { payload }) {
      state.addedProducts = [];
      state.allCount = 0;
      localStorage.setItem("products", JSON.stringify(state));
    },
    total(state) {
      let price = 0,
        amount = 0;
      state.addedProducts.forEach((product) => {
        amount += product.amount;
        price = product.price * product.amount;
      });
      state.allProductAmount = amount;
      state.allProductPrice = price;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  deleteAll,
  incrementOrAddProduct,
  total,
  decrementOrRemoveProduct,
} = cart.actions;

export default cart.reducer;
