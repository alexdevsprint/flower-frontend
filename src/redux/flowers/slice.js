import { createSlice } from "@reduxjs/toolkit";
import { fetchFlowersByShop } from "./operations";

const slice = createSlice({
  name: "flowers",
  initialState: {
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFlowersByShop.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});


export default slice.reducer;