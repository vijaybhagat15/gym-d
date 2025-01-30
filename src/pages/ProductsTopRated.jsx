import { useState, useEffect } from 'react';
import { products } from '../data/products';
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import React from "react";
export default function ProductsTopRated() {
  const navigate = useNavigate();

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

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

  useEffect(() => {
    // Group products by category
    const groupedProducts = products.reduce((acc, product) => {
      acc[product.category] = acc[product.category] || [];
      acc[product.category].push(product);
      return acc;
    }, {});

    // Get top 3 highest-rated products from each category
    const topRatedProducts = Object.values(groupedProducts).flatMap((categoryProducts) => {
      return categoryProducts
        .sort((a, b) => b.rating - a.rating) // Sort by rating in descending order
        .slice(0, 3); // Take the top 3
    });

    setFilteredProducts(topRatedProducts);
  }, []);

  return (
    <section className="min-h-screen py-4 px-3 font-sans bg-[#283618]  border-b-2 border-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold font-serif text-accent my-8 text-center">Top Rated Products</h1>
      </div>
      <div className="container mx-1 sm:mx-auto py-2 px-4 sm:py-5 sm:px-14">
        <div className="grid text-sm grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 rounded-3xl">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-accent min-w-32 shadow-md rounded-3xl p-4 hover:shadow-2xl hover:scale-105 border-2 border-orange-100 hover:border-orange-400 transition-transform h-auto relative"
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
              <h3 className="mt-2 text-base font-semibold font-serif text-gray-800">{product.name}</h3>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
              <p className="text-gray-500 text-xs mb-2 font-sans">{product.description}</p>
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
                className="text-white text-[10px] font-medium p-2 absolute bottom-2 right-2 bg-orange-500  rounded-lg hover:bg-white hover:text-orange-500 transition-all duration-500 border-2 border-white font-sans"
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
