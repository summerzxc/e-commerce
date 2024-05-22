import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "../services/productService";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await productService.getProducts();
    return response;
  }
);

// Define fetchProductById
export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (productId) => {
    const response = await productService.getProductById(productId);
    return response;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Handle fetchProductById
      .addCase(fetchProductById.fulfilled, (state, action) => {
        // Find the index of the product in the state
        const index = state.products.findIndex(
          (product) => product.id === action.payload.id
        );
        // If the product is found, update it, otherwise add it to the state
        if (index >= 0) {
          state.products[index] = action.payload;
        } else {
          state.products.push(action.payload);
        }
      });
  },
});

export const selectProducts = (state) => state.products.products;

// Modify selectProductById to use the correct state structure
export const selectProductById = (state, productId) =>
  state.products.products.find((product) => product.id === productId);

export default productSlice.reducer;
