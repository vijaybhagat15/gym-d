// src/redux/slices/profileslice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    username: '',
    email: '',
    contactNumber: '',
    address: '',
    profilePicture: '',
  },
  editable: false,
  image: '/images/default-profile.jpg',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileData: (state, action) => {
      // Merge new data into formData
      state.formData = { ...state.formData, ...action.payload };
    },
    setEditable: (state, action) => {
      state.editable = action.payload;
    },
    setImage: (state, action) => {
      state.image = action.payload;
      state.formData.profilePicture = action.payload;
    },
  },
});

export const { setProfileData, setEditable, setImage } = profileSlice.actions;
export default profileSlice.reducer;
