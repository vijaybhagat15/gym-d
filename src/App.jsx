import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetailsWithWishlist from './components/ProductDetailsWithWishlist';
import ProductDetail from './pages/ProductDetail';
import CategoryPage from './pages/CategoryPage';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Cart from './pages/Cart';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import ForgotPassword from './pages/ForgotPassword';
import Wishlist from './pages/Wishlist';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
Checkout
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/product/:id" element={<ProductDetailsWithWishlist />} />
            <Route path="/category/:id" element={<CategoryPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/about" element={<About />} />
            <Route path="/checkout" element={<Checkout />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;