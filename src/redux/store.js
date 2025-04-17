import { configureStore } from '@reduxjs/toolkit';
import headerReducer from './slices/headerSlice';
import signupReducer from './slices/signupSlice';
import loginReducer from './slices/loginSlice';
import profileReducer from './slices/profileslice';
import productReducer from './slices/productslice';
const store = configureStore({
  reducer: {
    header: headerReducer,
    signup: signupReducer,
    login: loginReducer,
    profile: profileReducer,
    products: productReducer,
  },
});

export default store;
