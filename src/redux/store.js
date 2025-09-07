import { configureStore } from "@reduxjs/toolkit";
import shopsReducer from './shops/slice';
import flowersReducer from './flowers/slice'

export const store = configureStore({
  reducer: {
    shops: shopsReducer,
    flowers: flowersReducer,
  },
});
