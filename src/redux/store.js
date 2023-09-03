import { configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import contactsReducer from '../redux/contactsSlice';
import authReducer from '../redux/authSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    phonebook: contactsReducer,
    auth: persistedReducer,
  },
});

export const persistor = persistStore(store);
