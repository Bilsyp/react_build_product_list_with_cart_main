import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  cart: [],
};

export const dessertSlice = createSlice({
  name: "dessert",
  initialState,
  reducers: {
    addCart(state, action) {
      state.cart.push(action.payload);
    },
    removeCartById(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    removeCartByName(state, action) {
      const index = state.cart.findIndex(
        (item) => item.name === action.payload
      );
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCart, removeCartById, removeCartByName } =
  dessertSlice.actions;

export default dessertSlice.reducer;
