import { createSlice } from '@reduxjs/toolkit';
import {
  loginUser,
  logoutUser,
  refreshUser,
  registerUser,
} from './authOperations';

const initialStateAuth = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialStateAuth,
  extraReducers: {
    [registerUser.pending]: (state, action) => {
      state.isRefreshing = true;
      state.isError = null;
    },
    [registerUser.fulfilled]: (state, action) => {
      console.log('fulfiled', action.payload);
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isRefreshing = false;
    },
    [registerUser.rejected]: (state, action) => {
      console.log('what the heck', action.payload);
      state.isRefreshing = false;
      state.isError = action.payload;
    },

    [loginUser.pending]: (state, action) => {
      state.isRefreshing = true;
      state.isError = null;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      console.log('logged in');
      state.isRefreshing = false;
    },
    [loginUser.rejected]: (state, action) => {
      console.log('log in failed');
      state.isRefreshing = false;
      state.isError = action.payload;
    },

    [logoutUser.pending]: (state, action) => {
      state.isRefreshing = true;
      state.isError = null;
    },
    [logoutUser.fulfilled]: (state, action) => {
      console.log('log out fulf', action.payload);
      state.isLoggedIn = false;
      state.user = { name: '', email: '' };
      state.token = null;
      state.isRefreshing = false;
    },
    [logoutUser.rejected]: (state, action) => {
      state.isRefreshing = false;
      console.log('failed log out', action.payload);
      state.isError = action.payload;
    },

    [refreshUser.pending]: (state, action) => {
      state.isRefreshing = true;
      state.isError = null;
    },
    [refreshUser.fulfilled]: (state, action) => {
      console.log('refresh fulfiled', action.payload);
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.user = action.payload.user;
    },
    [refreshUser.rejected]: (state, action) => {
      state.isRefreshing = false;
      // state.isError = action.payload;
    },
  },
});

const authReducer = authSlice.reducer;

export default authReducer;
