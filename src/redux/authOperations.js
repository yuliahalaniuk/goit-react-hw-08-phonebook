import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

function setToken(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}
function unsetToken() {
  axios.defaults.headers.common.Authorization = ``;
}

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      setToken(res.data.token);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post('/users/login', credentials);
      setToken(res.data.token);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { rejectWithValue, getState }) => {
    const { token } = getState().auth;
    try {
      const res = await axios.post('/users/logout', token);
      console.log('in logout', res.data);
      unsetToken();
      return 'horray';
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, { rejectWithValue, getState }) => {
    const { token } = getState().auth;
    console.log(token);
    setToken(token);

    if (!token) {
      console.log('all end');
      return rejectWithValue('No token');
    }

    try {
      console.log('trying');
      const res = await axios.get('/users/current');

      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
