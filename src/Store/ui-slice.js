import { createSlice } from "@reduxjs/toolkit";
let uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartIsVisible: false,
    notification: { status: "", title: "", message: "" },
  },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNOtification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});
export let uiActions = uiSlice.actions;
export default uiSlice;
