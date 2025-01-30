import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart } from 'react-icons/fa';
import { products } from '../data/products'; // Ensure you have this file with product data

export default function Products() {
  const navigate = useNavigate();

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState({
    price: [0, 500],
    category: [],
    rating: 0,
  });

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    alert(`${product.name} added to cart!`);
  };

  const handleAddToWishlist = (product, e) => {
    e.stopPropagation();
    setWishlist((prevWishlist) => {
      if (!prevWishlist.find((item) => item.id === product.id)) {
        return [...prevWishlist, product];
      }
      return prevWishlist.filter((item) => item.id !== product.id);
    });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCardClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  const handlePriceChange = (value) => {
    setFilters((prevFilters) => ({ ...prevFilters, price: value }));
  };

  const handleRatingChange = (value) => {
    setFilters((prevFilters) => ({ ...prevFilters, rating: value }));
  };

  const handleCategoryChange = (category) => {
    setFilters((prevFilters) => {
      const isSelected = prevFilters.category.includes(category);
      return {
        ...prevFilters,
        category: isSelected
          ? prevFilters.category.filter((cat) => cat !== category)
          : [...prevFilters.category, category],
      };
    });
  };

  useEffect(() => {
    let updatedProducts = products;

    if (filters.price) {
      const [minPrice, maxPrice] = filters.price;
      updatedProducts = updatedProducts.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
    }

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

    setFilteredProducts(updatedProducts);
  }, [filters, searchQuery]);

  const uniqueCategories = [...new Set(products.map((item) => item.category))];

  return (
    <section className="min-h-screen py-b  font-sans bg-white border-b-2 border-white w-full">
      <div className="w-full mx-auto">
        {/* Hero Section */}
        <div className=" border-b-2 text-white "style={{ backgroundImage: "url('/images/bg.jpg')" }}>
          <div className="relative w-full h-[5vh] sm:h-[10vh] overflow-hidden">
            <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-30">
              <h1 className="text-xl sm:text-5xl font-bold font-serif text-white">Our Products</h1>
            </div>
          </div>
        </div>

        <div className="col-span-1 flex flex-col space-y-1 min-w-32 lg:hidden border-2 border-x-gray-200 rounded-lg px-3 py-1 text-black h-min  bg-gray-500 text-xs">
          <div className="flex flex-col ">
            <input
              type="text"
              placeholder="Search products...🔍"
              className=" px-2  rounded-md sm:my-2 border-2 hover:border-custom-beige border-gray-400 sm:w-auto "
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <label className=" font-semibold">
              Price Range: ${filters.price[0]} - ${filters.price[1]}
            </label>
            <Slider
              range
              min={0}
              max={500}
              defaultValue={[0, 500]}
              value={filters.price}
              onChange={handlePriceChange}
            />
          </div>
          <div className="flex flex-col ">
            <label className=" font-semibold">
              Minimum Rating: {filters.rating} Stars
            </label>
            <Slider
              min={0}
              max={5}
              step={0.5}
              defaultValue={0}
              value={filters.rating}
              onChange={handleRatingChange}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label className=" font-semibold ">
              Categories:
            </label>
            <div className="grid grid-cols-4 text-[10px]">
              {uniqueCategories.map((category) => (
                <div key={category} className="flex items-center space-x-1">
                  <input
                    type="checkbox"
                    id={category}
                    checked={filters.category.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    className="form-checkbox h-3 w-3"
                  />
                  <label htmlFor={category} className="">
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container sm:mx-auto py-2 sm:py-5 sm:px-1 grid lg:grid-cols-5 gap-6 grid-cols-2">
        <div className="col-span-1 lg:flex flex-col space-y-4 min-w-32 hidden border-2 border-x-gray-100 rounded-lg p-3 text-black  bg-gray-400">
          <div className="flex flex-col space-y-2">
            <input
              type="text"
              placeholder="Search products...🔍"
              className="sm:px-2 sm:py-2 px-2 rounded-xl sm:my-2 border-2 hover:border-custom-beige border-gray-200 sm:w-auto placeholder:text-sm placeholder:text-black"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <label className="text-sm font-semibold">
              Price Range: ${filters.price[0]} - ${filters.price[1]}
            </label>
            <Slider
              range
              min={0}
              max={500}
              defaultValue={[0, 500]}
              value={filters.price}
              onChange={handlePriceChange}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className=" font-semibold">
              Minimum Rating: {filters.rating} Stars
            </label>
            <Slider
              min={0}
              max={5}
              step={0.5}
              defaultValue={0}
              value={filters.rating}
              onChange={handleRatingChange}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-semibold">Categories:</label>
            {uniqueCategories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={category}
                  checked={filters.category.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="form-checkbox h-4 w-4 text-orange-500"
                />
                <label htmlFor={category} className="text-sm">
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-4 grid text-sm grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 ml-1">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className=" min-w-32 shadow-md rounded-lg p-4 hover:shadow-2xl hover:scale-105 transition-transform h-auto relative"
              onClick={() => handleCardClick(product.id)}
            >
              <div className="relative w-full aspect-w-1 aspect-h-1 rounded-md overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <button
                  className={`absolute top-1 right-1 rounded-full p-1 transition-colors ${
                    wishlist.some((item) => item.id === product.id)
                      ? 'text-red-500'
                      : 'text-gray-400'
                  }`}
                  onClick={(e) => handleAddToWishlist(product, e)}
                >
                  <FaHeart size={15} />
                </button>
              </div>
              <h3 className="mt-2 text-base font-semibold font-serif text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
              <p className="text-gray-500 text-xs mb-2 font-sans">
                {product.description}
              </p>
              <div className="flex items-center mb-6">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <span key={i}>
                      {i < Math.floor(product.rating) ? (
                        <FaStar className="text-yellow-500" />
                      ) : i < product.rating ? (
                        <FaStarHalfAlt className="text-yellow-500" />
                      ) : (
                        <FaRegStar className="text-yellow-500" />
                      )}
                    </span>
                  ))}
              </div>
              <button
                className="absolute bottom-2 right-2 bg-orange-500 text-white text-[10px] font-medium p-1 rounded-lg hover:bg-white hover:text-orange-500 transition-all duration-500 border-2 border-white font-sans"
                onClick={(e) => handleAddToCart(product, e)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
