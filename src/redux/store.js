import { configureStore } from "@reduxjs/toolkit";
import shopsReducer from './shops/slice';
import flowersReducer from './flowers/slice'
import cartReducer from './cart/slice';

export const store = configureStore({
  reducer: {
    shops: shopsReducer,
    flowers: flowersReducer,
    cart: cartReducer,
  },
});
