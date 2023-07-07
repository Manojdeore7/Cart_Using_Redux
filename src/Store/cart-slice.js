import { createSlice } from "@reduxjs/toolkit";
let cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalAmount: 0 },
  reducers: {
    add(state, action) {
      state.items = action.payload.items;
      state.totalAmount = action.payload.totalAmount;
    },
    addItem(state, action) {
      let newItem = action.payload;
      state.totalAmount++;
      let existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalAmount = existingItem.totalAmount + newItem.price;
      }
    },
    removeItem(state, action) {
      let id = action.payload;
      state.totalAmount--;
      let existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});
export let cartActions = cartSlice.actions;
export default cartSlice;
