import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoryService from "../services/categoryService";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories", // Corrected slice name
  async () => {
    const response = await categoryService.getCategories();
    return response;
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload; // Corrected the assignment
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectCategories = (state) => state.categories.categories;

export default categorySlice.reducer;
