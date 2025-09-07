import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosAPI from "../../api/api";

export const fetchShops = createAsyncThunk(
  "shops/fetchAll",
  async (_, thunkAPI) => {
    try {
      const res = await axiosAPI.get("/shops");
      return res.data.data;
    } catch {
      return thunkAPI.rejectWithValue(true);
    }
  }
);