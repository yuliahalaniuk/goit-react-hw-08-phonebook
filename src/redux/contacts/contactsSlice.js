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

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, setPendingStatus)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
        state.contacts.isLoading = false;
      })
      .addCase(fetchContacts.rejected, setError)
      //------------------------------------------------
      .addCase(addContacts.pending, setPendingStatus)
      .addCase(addContacts.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
        state.contacts.isLoading = false;
      })
      .addCase(addContacts.rejected, setError)
      //------------------------------------------------
      .addCase(deleteContacts.pending, setPendingStatus)
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== action.payload
        );
        state.contacts.isLoading = false;
      })
      .addCase(deleteContacts.rejected, setError);
  },
});

export const { filterContacts } = contactsSlice.actions;

const contactsReducer = contactsSlice.reducer;

export default contactsReducer;
