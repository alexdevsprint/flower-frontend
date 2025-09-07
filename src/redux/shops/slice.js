import { createSlice } from "@reduxjs/toolkit";
import { fetchShops } from "./operations";

const slice = createSlice({
  name: "shops",
  initialState: {
    all: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchShops.fulfilled, (state, action) => {
      state.all = action.payload;
    });
  },
});


export default slice.reducer;


