import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [{ title: "initial", price: 2.49 }],
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addToShoppingCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromShoppingCart: (state, action) => {},
  },
});

export const { addToShoppingCart, removeFromShoppingCart } =
  shoppingCartSlice.actions;

export const selectItems = (state) => state.shoppingCart.items;

export default shoppingCartSlice.reducer;
