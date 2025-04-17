// src/redux/slices/signupSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simulate async signup (you can replace this with a real API later)
export const signupUser = createAsyncThunk(
  'signup/signupUser',
  async (userData, { rejectWithValue }) => {
    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return userData;
    } catch (err) {
      return rejectWithValue(err+'Signup failed ');
    }
  }
);

const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    user: null,
    loading: false,
    error: '',
    success: '',
  },
  reducers: {
    clearMessages: (state) => {
      state.error = '';
      state.success = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = '';
        state.success = '';
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.success = 'Sign Up successful! Redirecting to login...';
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Signup failed';
      });
  },
});

export const { clearMessages } = signupSlice.actions;
export default signupSlice.reducer;
