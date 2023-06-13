import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, removeContact } from "./operations";

const handlePending = (state) => {
  console.log('fetchContacts.pending')
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = null;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFulfilled, (state, action) => {
        handleFulfilled();
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, handleFulfilled, (state, action) => {
        handleFulfilled();
        state.contacts.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(removeContact.pending, handlePending)
      .addCase(removeContact.fulfilled, handleFulfilled, (state, action) => {
        handleFulfilled();
        const index = state.contacts.findIndex(
          (contact) => contact.id === action.payload.id
        );
        if (index !== -1) {
          state.contacts.splice(index, 1, action.payload);
        }
      })
      .addCase(removeContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
