// src/redux/slices/loginSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to simulate login.
// It takes credentials as argument and compares with the registered user data from the signup slice.
export const loginUser = createAsyncThunk(
  'login/loginUser',
  async (credentials, { getState, rejectWithValue }) => {
    // Retrieve the registered user from the signup slice in Redux
    const { signup: { user: registeredUser } } = getState();
    
    // Simulate a network/API delay of 1 second
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Compare the provided credentials with the registered user's data.
    if (
      registeredUser &&
      registeredUser.username === credentials.username &&
      registeredUser.password === credentials.password
    ) {
      // If credentials match, return the registered user data.
      return registeredUser;
    } else {
      // Otherwise, return a rejection with an error message.
      return rejectWithValue('Invalid username or password');
    }
  }
);

const initialState = {
  isAuth: false,   // Global authentication flag
  user: null,      // Authenticated user data, set on successful login
  loading: false,  // Indicates if a login request is in progress
  error: '',       // Holds any error messages from login failures
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    // The logout reducer clears the authentication state.
    logout: (state) => {
      state.isAuth = false;
      state.user = null;
      state.error = ''; // Optionally, clear any lingering errors.
    },
    // Clear the login error message (for example, when dismissing alerts)
    clearError: (state) => {
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder
      // When the login request is in progress...
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      // When the login request is successful...
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuth = true;
      })
      // When the login request fails...
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Set the error message received from rejectWithValue.
        state.isAuth = false;
        state.user = null;
      });
  },
});

// Export actions for use in your components (logout, clearError)
export const { logout, clearError } = loginSlice.actions;
export default loginSlice.reducer;
