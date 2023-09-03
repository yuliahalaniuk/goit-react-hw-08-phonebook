import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contacts/contactsSlice';
import authReducer from './auth/authSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    phonebook: contactsReducer,
    auth: persistReducer(persistConfig, authReducer),
  },
});

export const persistor = persistStore(store);
