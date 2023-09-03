export const getFilter = state => state.phonebook.filter;
export const getLoading = state => state.phonebook.contacts.isLoading;
export const getError = state => state.phonebook.contacts.isError;
export const getContacts = state => state.phonebook.contacts.items;

export const getAuthError = state => state.auth.isError;
