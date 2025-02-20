import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = { items: [], totalQuantity: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;

      const existingItemIndex = state.items.findIndex(
        (item) => item.id === newItem.id
      );

      const existingItem = state.items[existingItemIndex];

      if (existingItemIndex === -1) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          totalPrice: newItem.price,
          title: newItem.title,
          quantity: 1,
        });
      } else {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.quantity + newItem.price;
      }
      state.totalQuantity += 1;
    },

    removeItem(state, action) {
        const id = action.payload;

      const existingItemIndex = state.items.findIndex(
        (item) => item.id === id
      );

      const existingItem = state.items[existingItemIndex];


      if (existingItem.quantity === 1) {
        state.items.splice(existingItemIndex, 1);
      } else {
        existingItem.quantity -= 1;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
      state.totalQuantity -= 1;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
