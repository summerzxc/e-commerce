import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../services/userService";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await userService.getUsers();
  console.log(response);
  return response;
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload; // Corrected the assignment
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectUsers = (state) => state.users.users;

export default userSlice.reducer;
