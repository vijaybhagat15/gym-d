import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, toggleWishlist } from '../redux/slices/productslice';

const GymFitnessSection = () => {
  const navigate = useNavigate();
  const scrollContainerRef = useRef(null);
  const dispatch = useDispatch();

  const wishlist = useSelector((state) => state.products.wishlist);

  // Duplicate the product list for infinite scrolling
  const duplicatedProducts = [...products, ...products];

  // Infinite auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
        scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });

        if (scrollContainerRef.current.scrollLeft >= scrollContainerRef.current.scrollWidth / 2) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: "auto" });
        }
      }
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    dispatch(addToCart(product));
    alert(`${product.name} added to cart!`);
  };

  const handleAddToWishlist = (product, e) => {
    e.stopPropagation();
    dispatch(toggleWishlist(product));
  };

  const handleCardClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className="py-8">
      <h2 className="text-3xl font-sans font-bold text-center mb-6">Gym and Fitness</h2>

      <div className="overflow-hidden scroll-smooth">
        <div
          ref={scrollContainerRef}
          className="flex justify-center md:justify-start gap-6 px-4 overflow-x-scroll whitespace-nowrap no-scrollbar"
        >
          {duplicatedProducts.map((product, index) => (
            <div
              key={index}
              className="bg-accent min-w-[230px] sm:min-w-[200px] md:min-w-[250px] lg:min-w-[280px] shadow-md rounded-xl p-4 hover:shadow-2xl hover:scale-105 transition-transform h-auto relative"
              onClick={() => handleCardClick(product.id)}
            >
              {/* Gradient effect only on desktop */}
              <div className="absolute inset-0 hidden md:block bg-gradient-to-t from-indigo-300 to-transparent opacity-50 hover:opacity-0 transition-opacity duration-300 pointer-events-none rounded-xl"></div>

              <div className="w-full aspect-square rounded-md overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-md"
                />
                <button
                  className={`absolute top-2 right-2 bg-white p-1 rounded-full z-10 ${
                    wishlist.some((item) => item.id === product.id)
                      ? "text-red-500"
                      : "text-gray-400"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToWishlist(product, e);
                  }}
                >
                  <FaHeart size={16} />
                </button>
              </div>

              <h3 className="mt-2 text-base font-semibold font-serif text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>

              {/* Rating */}
              <div className="flex items-center gap-[1px] mt-1">
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

              {/* Add to Cart Button */}
              <button
                className="absolute bottom-2 right-2 bg-gradient-to-b from-blue-500 to-purple-500 text-white text-[10px] font-medium p-2 rounded-lg hover:bg-white hover:text-orange-500 transition-all duration-500 border-2 border-white font-sans"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(product, e);
                }}
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
