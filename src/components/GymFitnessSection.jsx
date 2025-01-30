import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../data/products"; // Import products data
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart } from "react-icons/fa";

const GymFitnessSection = () => {
  const navigate = useNavigate();
  const scrollContainerRef = useRef(null);

  // State for cart and wishlist with localStorage initialization
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Auto-scroll effect every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const scrollAmount = scrollContainerRef.current.clientWidth * 0.8; // Scroll dynamically
        scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });

        // Reset scroll if at the end
        if (
          scrollContainerRef.current.scrollLeft + scrollContainerRef.current.clientWidth >=
          scrollContainerRef.current.scrollWidth
        ) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Manual scroll handlers
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  // Handlers for cart & wishlist
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

  const handleCardClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className="py-8">
      <h2 className="text-3xl font-sans font-bold text-center mb-6">Gym and Fitness</h2>

      {/* Buttons for manual navigation */}
      <div className="flex justify-center gap-4 mb-4">
        <button
          onClick={scrollLeft}
          className="bg-gray-300 px-4 py-2 rounded-lg text-black hover:bg-gray-400"
        >
          ◀ Prev
        </button>
        <button
          onClick={scrollRight}
          className="bg-gray-300 px-4 py-2 rounded-lg text-black hover:bg-gray-400"
        >
          Next ▶
        </button>
      </div>

      <div className="overflow-hidden scroll-smooth">
        <div ref={scrollContainerRef} className="flex gap-6 px-4 overflow-x-scroll whitespace-nowrap no-scrollbar">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-accent min-w-60 shadow-md rounded-xl p-4 hover:shadow-2xl hover:scale-105 transition-transform h-auto relative"
              onClick={() => handleCardClick(product.id)}
            >
              <div className="absolute inset-0 md:bg-gradient-to-t from-indigo-300 to-transparent opacity-50 hover:opacity-0 transition-opacity duration-300"></div>
              <div className="w-52 h-52 aspect-w-1 aspect-h-1 rounded-md overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                <button
                  className={`absolute top-1 right-1 rounded-full p-1 transition-colors ${
                    wishlist.some((item) => item.id === product.id) ? "text-red-500" : "text-gray-400"
                  }`}
                  onClick={(e) => handleAddToWishlist(product, e)}
                >
                  <FaHeart size={15} />
                </button>
              </div>
              <h3 className="mt-2 text-base font-semibold font-serif text-gray-800">{product.name}</h3>
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
                className="absolute bottom-2 right-2 hover:bg-gradient-to-t bg-gradient-to-b from-blue-500 to-purple-500 text-white text-[10px] font-medium p-2 rounded-lg hover:bg-white hover:text-orange transition-all duration-500 border-2 border-white font-sans"
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
