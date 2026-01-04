import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = "https://69590c126c3282d9f1d67d1b.mockapi.io/details";

export const fetchUser = createAsyncThunk("users/fetchUser", async () => {
  const response = await axios.get(api);
  return response.data;
});

export const addUser = createAsyncThunk("users/addUser", async (addedUser) => {
  const response = await axios.post(api, addedUser);
  return response.data;
});

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (updatedUser) => {
    const response = await axios.put(`${api}/${updatedUser.id}`, updatedUser);
    return response.data;
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (userId) => {
    await axios.delete(`${api}/${userId}`, userId);
    return userId;
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.users = action.payload;
      })

      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })

      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.users.findIndex(
          (user) => user.id === action.payload.id
        );
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      })

      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user.id !== action.payload);
      });
  },
});

export default userSlice.reducer;
