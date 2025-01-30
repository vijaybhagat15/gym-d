import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products'; // Import products data
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart } from 'react-icons/fa';

const GymFitnessSection = () => {
  const navigate = useNavigate();
  // State for cart and wishlist with localStorage initialization
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });


  // Update localStorage on cart/wishlist change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Add to cart handler
  const handleAddToCart = (product, e) => {
    e.stopPropagation(); // Prevent navigation
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

  // Add/remove from wishlist handler
  const handleAddToWishlist = (product, e) => {
    e.stopPropagation(); // Prevent navigation
    setWishlist((prevWishlist) => {
      if (!prevWishlist.find((item) => item.id === product.id)) {
        return [...prevWishlist, product];
      }
      return prevWishlist.filter((item) => item.id !== product.id);
    });
  };
  const handleCardClick = (productId) => {
    navigate(`/products/${productId}`);
  };
  return (
    <div className="py-8">
      <h2 className="text-3xl font-sans font-bold text-center mb-6">Gym and Fitness</h2>
      <div className="overflow-x-auto scroll-smooth">
        <div className="flex gap-6 px-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-accent min-w-60 shadow-md rounded-xl p-4 hover:shadow-2xl hover:scale-105  transition-transform h-auto relative"
              onClick={() => handleCardClick(product.id)}
            >
              <div className="absolute inset-0 md:bg-gradient-to-t from-indigo-300  to-transparent opacity-50 hover:opacity-0 transition-opacity duration-300"></div>
              <div className=" w-52 h-52 aspect-w-1 aspect-h-1 rounded-md overflow-hidden">
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
              <div className="flex items-center">
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
                className="absolute bottom-2 right-2 hover:bg-gradient-to-t bg-gradient-to-b from-blue-500  to-purple-500 text-white text-[10px] font-medium p-2 rounded-lg hover:bg-white hover:text-orange- transition-all duration-500 border-2 border-white font-sans"
                onClick={(e) => handleAddToCart(product, e)}
              >
                Add to Cart
              </button>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GymFitnessSection;
