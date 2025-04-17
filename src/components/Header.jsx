import Sidebar from './Sidebar';
import {
  FaUser,
  FaShoppingCart,
  FaSignInAlt,
  FaBars,
  FaHeart,
} from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {toggleSidebar,} from '../redux/slices/headerSlice';
import SearchInput from './SearchInput';
import SearchInputmobile from './SearchInputmobile';
const Header = () => {
const cart = useSelector((state) => state.products.cart);
const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
const wishlist = useSelector((state) => state.products.wishlist);
const wishlistCount = wishlist.length;

  const dispatch = useDispatch();
  const location = useLocation();

  const {
    isSidebarOpen,
    links,
  } = useSelector((state) => state.header);

  const isActive = (path) => location.pathname === path;
  const isAuthenticated =true; //useSelector((state) => state.login.isAuth);
  
  return (
    <header className="text-gray-900 bg-white top-0 sticky z-50 border-2 border-gray-300">
      {/* Top Section */}
      <div className=" mx-auto py-2 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center ml-2 mr-auto">
          <img src="logo.png" alt="Maison Flavour Logo" className="h-10 md:h-16" />
          <div className="font-bold text-xl lg:text-2xl">MuscleMart</div>
        </Link>
          {/* Search Bar */}
          <SearchInput />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 text-sm px-2">
          {links.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`hover:text-indigo-500 text-base transition-colors duration-300 ${isActive(path) ? 'text-indigo-500 font-bold underline' : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4 pr-1 text-lg">
          {/* {!isAuthenticated ? ( */}
                      {!isAuthenticated ? (
            <>
              <Link
                to="/login"
                className="relative group flex items-center justify-center sm:w-14 w-10 sm:h-7 h-5 text-[10px] bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-xl transition-all duration-500 border border-gray-300 overflow-hidden"
              >
                <span className="transition-opacity duration-200 opacity-100 group-hover:opacity-0 p-2">
                  <FaSignInAlt className="text-[12px] sm:text-[15px]" />
                </span>
                <span className="absolute items-center text-[10px] sm:text-[15px] left-1/2 -translate-x-1/2 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2">
                  Login
                </span>
              </Link>

              <Link to="/login" className="relative sm:border-[1px] border-indigo-500 rounded-full sm:p-2">
                <FaShoppingCart className="hover:text-indigo-500 text-gray-500 cursor-pointer text-xl" />
              </Link>
            </>
          ) : (
            <>
              <Link to="/profile" className='relative sm:border-[1px] border-indigo-500 rounded-full sm:p-2'>
                <FaUser className="hover:text-indigo-500 text-gray-500 cursor-pointer text-xl" />
              </Link>
              <Link to="/Wishlist" className="relative sm:border-[1px] border-indigo-500 rounded-full sm:p-2">
                <FaHeart className="hover:text-indigo-500 text-gray-500 cursor-pointer text-xl" />
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">{wishlistCount}</span>
              </Link>
              <Link to="/cart" className="relative sm:border-[1px] border-indigo-500 rounded-full sm:p-2">
                <FaShoppingCart className="hover:text-indigo-500 text-gray-500 cursor-pointer text-xl" />
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">{cartCount}</span>
              </Link>
            </>
          )}
                  {/* Hamburger */}
        <div className=" flex items-center ">
          <button
            className="md:hidden bg-blue-600 hover:bg-blue-500 text-white lg:text-base text-[12px] py-1 px-2 rounded-md"
            onClick={() => dispatch(toggleSidebar())}
            aria-label="Toggle Sidebar"
          >
            <FaBars />
          </button>
        </div>
        </div>

        {/* Sidebar */}
        {isSidebarOpen && (<Sidebar/>
        )}
      </div>
      <nav className='flex justify-center bg-gray-200'>          
        {/* Search Bar */}
          <SearchInputmobile className="mx-auto" />
      </nav>
    </header>
  );
};

export default Header;
