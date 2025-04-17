import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSidebarOpen: false,
  cartCount: parseInt(localStorage.getItem('cartCount')) || 0,
  wishlistCount: parseInt(localStorage.getItem('wishlistCount')) || 0,
  isAuthenticated: !!localStorage.getItem('auth'),

  // 🔗 Top-level Navigation Links
  links: [
    { path: '/', label: 'Home' },
    { path: '/About', label: 'About Us' },
    { path: '/product', label: 'Shop' },
    { path: '/contact', label: 'Contact' },
  ],
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const {
  toggleSidebar,
  setCartCount,
  setWishlistCount,
  setAuth,
} = headerSlice.actions;

export default headerSlice.reducer;
