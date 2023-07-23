import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
    deleteConfirmation: null,
  },

  reducers: {
    setDeleteConfirmation: (state, action) => {
      state.deleteConfirmation = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {})
      .addCase((state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state, action) => {
        if (!state.deleteConfirmation) {
          state.isLoading = true;
        }
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        if (!state.deleteConfirmation) {
          state.isLoading = false;
          state.error = null;
          state.contacts = state.contacts.filter(
            contact => contact.id !== action.payload
          );
        }
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setDeleteConfirmation } = contactsSlice.actions;
export default contactsSlice.reducer;
