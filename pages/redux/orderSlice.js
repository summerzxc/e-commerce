import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import orderService from "../services/orderService";

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  const response = await orderService.getOrders();
  return response;
});

export const fetchRevenue = createAsyncThunk(
  "orders/fetchRevenue",
  async () => {
    const response = await orderService.getTotalSales();
    console.log(response);
    return response;
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    loading: false,
    error: null,
    revenue: 0, // New revenue state
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchRevenue.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRevenue.fulfilled, (state, action) => {
        state.loading = false;
        state.revenue = action.payload;
      })
      .addCase(fetchRevenue.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectOrders = (state) => state.orders.orders;
export const selectRevenue = (state) => state.orders.revenue; // Selector for revenue

export default orderSlice.reducer;
