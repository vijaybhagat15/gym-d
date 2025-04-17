// src/redux/slices/productslice.js
import { createSlice } from '@reduxjs/toolkit';
import { products as initialProducts } from '../../data/products';

/**
 * Filter products by price, category, rating, and search query.
 */
function filterProducts(products, filters, searchQuery) {
  let updatedProducts = products;

  const [minPrice, maxPrice] = filters.price;
  updatedProducts = updatedProducts.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );

  if (filters.category.length > 0) {
    updatedProducts = updatedProducts.filter((product) =>
      filters.category.includes(product.category)
    );
  }

  if (filters.rating) {
    updatedProducts = updatedProducts.filter(
      (product) => product.rating >= filters.rating
    );
  }

  if (searchQuery) {
    updatedProducts = updatedProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return updatedProducts;
}

const initialState = {
  cart: [],
  wishlist: [],
  filters: {
    price: [0, 500],
    category: [],
    rating: 0,
  },
  searchQuery: '',
  filteredProducts: initialProducts,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    /**
     * Add product to cart. If exists and quantity provided, set it; otherwise increment.
     */
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.cart.find((item) => item.id === product.id);

      if (existingItem) {
        // If quantity is explicitly passed (e.g., updating from cart)
        if (product.quantity !== undefined) {
          existingItem.quantity = product.quantity;
        } else {
          existingItem.quantity += 1;
        }
      } else {
        state.cart.push({ ...product, quantity: product.quantity || 1 });
      }
    },

    /**
     * Remove product from cart by ID.
     */
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    /**
     * Add or remove product from wishlist.
     */
    toggleWishlist: (state, action) => {
      const product = action.payload;
      const index = state.wishlist.findIndex((item) => item.id === product.id);
      if (index === -1) {
        state.wishlist.push(product);
      } else {
        state.wishlist.splice(index, 1);
      }
    },

    /**
     * Set filters and apply them to initial products.
     */
    setFilters: (state, action) => {
      state.filters = action.payload;
      state.filteredProducts = filterProducts(initialProducts, state.filters, state.searchQuery);
    },

    /**
     * Set search query and apply it along with filters.
     */
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.filteredProducts = filterProducts(initialProducts, state.filters, state.searchQuery);
    },

    /**
     * Reset all filters and show all products.
     */
    resetFilters: (state) => {
      state.filters = initialState.filters;
      state.searchQuery = '';
      state.filteredProducts = initialProducts;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  toggleWishlist,
  setFilters,
  setSearchQuery,
  resetFilters,
} = productsSlice.actions;

export default productsSlice.reducer;
