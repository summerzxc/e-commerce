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

// Async thunk for decrementing quantity
export const decrementQuantity = createAsyncThunk(
  "orders/decrementQuantity",
  async (id) => {
    try {
      const orderItems = await orderService.getOrderItems();
      const currentItem = orderItems.find((item) => item._id === id);
      const newQuantity = Math.max(currentItem.quantity - 1, 1); // Ensure quantity doesn't go below 1
      await orderService.updateOrderItemQuantity(id, newQuantity);
      return { id, newQuantity };
    } catch (error) {
      throw error;
    }
  }
);

// Async thunk for incrementing quantity
export const incrementQuantity = createAsyncThunk(
  "orders/incrementQuantity",
  async (id) => {
    try {
      const orderItems = await orderService.getOrderItems();
      const currentItem = orderItems.find((item) => item._id === id);
      const newQuantity = currentItem.quantity + 1;
      await orderService.updateOrderItemQuantity(id, newQuantity);
      return { id, newQuantity };
    } catch (error) {
      throw error;
    }
  }
);

export const fetchOrderItems = createAsyncThunk(
  "orders/fetchOrderItems",
  async () => {
    const response = await orderService.getOrderItems();
    return response;
  }
);

export const removeOrderItem = createAsyncThunk(
  "orders/removeOrderItem",
  async (id) => {
    await orderService.removeOrderItem(id);
    return id;
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    loading: false,
    error: null,
    revenue: 0, // New revenue state
    orderItems: [],
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
      })
      .addCase(fetchOrderItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOrderItems.fulfilled, (state, action) => {
        state.loading = false;
        state.orderItems = action.payload;
      })
      .addCase(fetchOrderItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(removeOrderItem.fulfilled, (state, action) => {
        state.orderItems = state.orderItems.filter(
          (item) => item._id !== action.payload
        );
      })
      .addCase(decrementQuantity.fulfilled, (state, action) => {
        const { id, newQuantity } = action.payload;
        state.orderItems = state.orderItems.map(item =>
          item._id === id ? { ...item, quantity: newQuantity } : item
        );
      })
      // Add incrementQuantity reducer
      .addCase(incrementQuantity.fulfilled, (state, action) => {
        const { id, newQuantity } = action.payload;
        state.orderItems = state.orderItems.map(item =>
          item._id === id ? { ...item, quantity: newQuantity } : item
        );
      });;
  },
});

export const selectOrders = (state) => state.orders.orders;
export const selectRevenue = (state) => state.orders.revenue;
export const selectOrderItems = (state) => state.orders.orderItems;

export default orderSlice.reducer;
