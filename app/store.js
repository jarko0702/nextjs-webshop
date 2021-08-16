import { configureStore } from "@reduxjs/toolkit";
import shoppingCartReducer from "../slices/shoppingCartSlice";

export const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
  },
});
