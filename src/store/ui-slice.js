import { createSlice } from "@reduxjs/toolkit";

const uislice = createSlice({
  name: "ui",
  initialState: { cartVisible: false },
  reducers: {
    toggle(state) {
      state.cartVisible  = !state.cartVisible;
    },
  },
});

export const uiActions = uislice.actions;
export default uislice;
