import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // массив объектов { _id, name, price, imageURL, quantity }
  },
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.items.find(i => i._id === item._id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter(item => item._id !== id);
    },
    clearCart(state) {
      state.items = [];
    },
    decreaseQuantity(state, action) {
      const id = action.payload;
      const item = state.items.find(i => i._id === id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter(i => i._id !== id);
        }
      }
    }
  },
});

export const { addToCart, removeFromCart, clearCart, decreaseQuantity } = slice.actions;

export default slice.reducer;
