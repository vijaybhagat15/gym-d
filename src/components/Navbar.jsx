import React, { useEffect, useState } from 'react';
import {
  FaUser,
  FaInfoCircle,
  FaShoppingCart,
  FaSearch,
  FaSignInAlt,
  FaBars,
  FaHeart,
  FaPhoneAlt,
  FaBoxOpen,
  FaHome,
  FaTimes
} from "react-icons/fa";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown } from "lucide-react";
const nav=[
  { label: 'Yoga', options: ['Mats', 'Blocks', 'Clothing'] },
  { label: 'Fitness', options: ['Equipment', 'Weights', 'Accessories'] },
  { label: 'Travelling', options: ['Bags', 'Shoes', 'Gear'] },
  { label: 'Quick Links', options: ['Sale', 'New_Arrivals', 'Top_Picks'] }
]

const Navbar = () => {

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Fetch cartCount from localStorage when the component mounts
    const stoindigoCartCount = localStorage.getItem('cartCount');
    setCartCount(stoindigoCartCount ? parseInt(stoindigoCartCount, 10) : 0);
  }, []);
  const savedWishlistCount = localStorage.getItem('wishlistCount');
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isAuthenticated = localStorage.getItem('auth');

  const isActive = (path) => location.pathname === path;

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
 
  return (
    <header className="text-gray-900 bg-white font-sans border-b-2 border-white">
      {/* Top Section */}
      <div className="container mx-auto py-2 flex items-center justify-between">
        <div className="space-x-2 flex items-center px-1">
          <button
            className="md:hidden bg-blue-600 hover:bg-blue-500 text-white lg:text-base text-[12px] py-1 px-2 rounded-md"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
            <FaBars />
          </button>
        </div>

        {/* Logo */}
        <Link to="/" className="flex items-center ml-2 mr-auto">
          <div className="font-bold text-xl lg:text-3xl">MuscleMart</div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 text-sm lg:text-lg lg:px-16">
          {[
            { path: '/', label: 'Home' },
            { path: '/About', label: 'About Us' },
            { path: '/products', label: 'Shop' },
            { path: '/contact', label: 'Contact' }
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`hover:text-indigo-500 transition-colors duration-300 ${isActive(path) ? 'text-indigo-500 font-bold underline' : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4 pr-6 lg:pr-10 text-lg">
          <FaSearch className="flex sm:hidden" />
          {!isAuthenticated ? (
            <>
            <Link
              to="/login"
              className="relative group flex items-center sm:w-14 w-10 sm:h-7 h-5 duration-600 ml-auto text-[10px] sm:text-lg bg-blue-500 hover:bg-blue-400 text-white font-bold   rounded-xl  transition-all duration-500 border-2 border-gray-300 font-sans"
            >
              <FaSignInAlt className="transition-opacity duration-200 opacity-100 group-hover:opacity-0 mx-auto animate-bounce text-[12px] sm:text-[15px]" />
              <span className="absolute font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 px-1">
                Login
              </span>
            </Link>
              <Link to="/Login" className="relative sm:border-[1px] border-gray-500  rounded-full sm:p-2">
              <FaShoppingCart className="hover:text-indigo-500 text-gray-500 cursor-pointer text-xl" />
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">{cartCount}</span>
              </Link>
              </>

          ) : (
            <>
              <Link to="/profile" className='relative sm:border-[1px] border-indigo-500 rounded-full sm:p-2'>
                <FaUser className="hover:text-indigo-500 text-gray-500 cursor-pointer text-xl" />
              </Link>
              <Link to="/Wishlist" className="relative sm:border-[1px] border-indigo-500 rounded-full sm:p-2  ">
                <FaHeart className="hover:text-indigo-500 text-gray-500 cursor-pointer text-xl" />
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">{savedWishlistCount}</span>
              </Link>
              <Link to="/cart" className="relative sm:border-[1px] border-indigo-500  rounded-full sm:p-2">
                <FaShoppingCart className="hover:text-indigo-500 text-gray-500 cursor-pointer text-xl" />
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">{cartCount}</span>
              </Link>
            </>
          )}
        </div>

        {/* Sidebar */}
        {isSidebarOpen && (
  <div className="fixed inset-0 bg-white bg-opacity-50 z-40">
    <div className="bg-indigo-500 text-white w-4/6 md:w-1/3 fixed top-0 right-0 h-full shadow-lg rounded-r-lg" >
      {/* Header Section */}
      <div className="flex justify-between items-center px-4 py-2 bg-indigo-900">
        <span className="font-semibold uppercase">Menu</span>
        <button
          className="text-xl"
          onClick={toggleSidebar}
          aria-label="Close Sidebar"
        >
          <FaTimes />
        </button>
      </div>

      {/* Menu Items */}
      <div className="space-y-4 bg-transparent mr-6 mt-10 rounded-xl p-2 ">
        {[
          { path: '/', label: 'Home', icon: FaHome },
          { path: '/products', label: 'Shop', icon: FaBoxOpen },
          { path: '/contact', label: 'Contact', icon: FaPhoneAlt },
          { path: '/About', label: 'About Us', icon: FaInfoCircle }
        ].map(({ path, label, icon: Icon }) => (
          <Link
            key={path}
            to={path}
            className={`flex justify-between items-center pl-2 py-2   rounded-xl  ${
              isActive(path)
                ? 'bg-indigo-800'
                : 'hover:bg-gray-400 text-white'
            }`}
            onClick={toggleSidebar}
          >
            <span className="text-base font-semibold flex gap-2">
              <Icon size={24} />
              {label}
            </span>
            <span className="text-lg">{'>'}</span>
          </Link>
        ))}
      </div>
    </div>
  </div>
)}

      </div>

      {/* Bottom Section - Links */}
      <nav className="bg-indigo-500 text-white text-[13px] sm:text-lg flex justify-center">
  <div className="px-4 py-2 flex items-center space-x-3 sm:space-x-20">
            {/* Search Bar */}
            <div className=" lg:pr-5 hidden sm:flex">
          <input
            type="text"
            placeholder="Search.....          🔍"
            className="max-w-[160px] px-4 py-2 rounded-lg bg-white text-gray-900 placeholder-gray-900 outline-none text-sm"
          />
        </div>
    {nav.map(({ label, options }) => (
      <div className="relative group" key={label}>
        {/* Field Name with Arrow */}
        <button className="flex items-center space-x-1 hover:text-indigo-500 transition-colors duration-300">
          <span>{label}</span>
          <span className="text-sm">&#709;</span>
        </button>

        {/* Tooltip Dropdown */}
        <div className="absolute left-0 hidden group-hover:block bg-indigo-800 text-white rounded shadow-lg group z-20">
          <ul>
            {options.map((option) => (
              <li key={option}>
                <Link to="/products" className="block px-4 py-2 hover:bg-gray-500">
                  {option}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
</nav>
    </header>
  );
};
export default Navbar;