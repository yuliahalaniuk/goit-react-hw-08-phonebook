import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContacts,
  deleteContacts,
} from './contactsOperations';

const initialStateContacts = {
  contacts: {
    items: [],
    isLoading: false,
    isError: null,
  },

  filter: '',
};

const setError = (state, action) => {
  state.contacts.isError = action.payload;
  state.contacts.isLoading = false;
};

const setPendingStatus = (state, action) => {
  state.contacts.isError = null;
  state.contacts.isLoading = true;
};

const contactsSlice = createSlice({
  name: 'phonebook',

  initialState: initialStateContacts,

  reducers: {
    filterContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: setPendingStatus,
    [fetchContacts.fulfilled]: (state, action) => {
      state.contacts.items = action.payload;
      state.contacts.isLoading = false;
    },
    [fetchContacts.rejected]: setError,

    [addContacts.pending]: setPendingStatus,
    [addContacts.fulfilled]: (state, action) => {
      console.log('book added', action.payload);
      state.contacts.items.push(action.payload);
      state.contacts.isLoading = false;
    },
    [addContacts.rejected]: setError,

    [deleteContacts.pending]: setPendingStatus,
    [deleteContacts.fulfilled]: (state, action) => {
      console.log('get id', action.payload);
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload
      );
      state.contacts.isLoading = false;
    },
    [deleteContacts.rejected]: setError,
  },
});

export const { filterContacts } = contactsSlice.actions;

const contactsReducer = contactsSlice.reducer;

export default contactsReducer;
