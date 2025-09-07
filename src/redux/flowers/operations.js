import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosAPI from "../../api/api";

export const fetchFlowersByShop = createAsyncThunk(
  'flowers/fetchByShop',
  async (shopId) => {
    const response = await axiosAPI.get(`/flowers/?shopId=${shopId}`);
    return response.data.data;
  }
);


