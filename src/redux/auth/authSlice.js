import { createSlice } from '@reduxjs/toolkit';
import {
  loginUser,
  logoutUser,
  refreshUser,
  registerUser,
} from './authOperations';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isError: null,
};

const setPendingStatus = (state, action) => {
  state.isRefreshing = true;
  state.isError = null;
};

const setError = (state, action) => {
  state.isRefreshing = false;
  state.isError = action.payload;
  state.isLoggedIn = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, setPendingStatus)
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isRefreshing = false;
      })
      .addCase(registerUser.rejected, setError)
      //-------------------------------------------------
      .addCase(loginUser.pending, setPendingStatus)
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isRefreshing = false;
      })
      .addCase(loginUser.rejected, setError)
      //-------------------------------------------------
      .addCase(logoutUser.pending, setPendingStatus)
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.user = { name: '', email: '' };
        state.token = null;
        state.isRefreshing = false;
      })
      .addCase(logoutUser.rejected, setError)
      //-------------------------------------------------
      .addCase(refreshUser.pending, setPendingStatus)
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.user = action.payload.user;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
      });
  },
});

const authReducer = authSlice.reducer;

export default authReducer;
