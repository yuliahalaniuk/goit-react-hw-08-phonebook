import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'phonebook/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'phonebook/addContact',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      console.log({
        name: `${name}`,
        number: `${number}`,
      });
      const response = await axios.post('/contacts', {
        name: `${name}`,
        number: `${number}`,
      });

      console.log('res', response);
      return response.data;
    } catch (error) {
      console.log('err', error);
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'phonebook/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
