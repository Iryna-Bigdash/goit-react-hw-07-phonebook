import { createSlice } from "@reduxjs/toolkit";
// import { fetchContacts, addContact, removeContact } from "./operations";

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://64873c9fbeba629727904ae9.mockapi.io";



export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      console.log(response.data)
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", contact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  "contacts/removeContact",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

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
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(removeContact.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(removeContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== action.payload
        );
      })
      .addCase(removeContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;

export default contactsSlice;





// const handlePending = (state) => {
//   console.log('fetchContacts.pending')
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const handleFulfilled = (state) => {
//   state.isLoading = false;
//   state.error = null;
// };

// const contactsSlice = createSlice({
//   name: "contacts",
//   initialState: {
//     contacts: [],
//     isLoading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchContacts.pending, handlePending)
//       .addCase(fetchContacts.fulfilled, handleFulfilled, (state, action) => {
//         handleFulfilled();
//         state.contacts = action.payload;
//       })
//       .addCase(fetchContacts.rejected, handleRejected)
//       .addCase(addContact.pending, handlePending)
//       .addCase(addContact.fulfilled, handleFulfilled, (state, action) => {
//         handleFulfilled();
//         state.contacts.push(action.payload);
//       })
//       .addCase(addContact.rejected, handleRejected)
//       .addCase(removeContact.pending, handlePending)
//       .addCase(removeContact.fulfilled, handleFulfilled, (state, action) => {
//         handleFulfilled();
//         const index = state.contacts.findIndex(
//           (contact) => contact.id === action.payload.id
//         );
//         if (index !== -1) {
//           state.contacts.splice(index, 1);
//           // state.contacts.splice(index, 1, action.payload);
//         }
//       })
//       .addCase(removeContact.rejected, handleRejected);
//   },
// });

// export const contactsReducer = contactsSlice.reducer;


