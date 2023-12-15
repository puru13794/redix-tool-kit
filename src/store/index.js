import { configureStore } from "@reduxjs/toolkit";
import uislice from "./ui-slice.js";
import cartSlice from "./cart-slice.js";

const store = configureStore({
  reducer: { ui: uislice.reducer, cart: cartSlice.reducer },
});

export default store;
