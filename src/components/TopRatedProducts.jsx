import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, toggleWishlist } from "../redux/slices/productslice";

const TopRatedProducts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const scrollContainerRef = useRef(null);

  const wishlist = useSelector((state) => state.products.wishlist);

  const getTopProductsByCategory = (products) => {
    const grouped = products.reduce((acc, product) => {
      acc[product.category] = acc[product.category] || [];
      acc[product.category].push(product);
      return acc;
    }, {});
    return Object.values(grouped)
      .flatMap((categoryProducts) =>
        categoryProducts.sort((a, b) => b.rating - a.rating).slice(0, 3)
      );
  };

  const filteredProducts = getTopProductsByCategory(products);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const scrollAmount = container.clientWidth * 0.8;

        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
          container.scrollTo({ left: 0, behavior: "auto" });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
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

  const handleToggleWishlist = (product, e) => {
    e.stopPropagation();
    dispatch(toggleWishlist(product));
  };

  const handleCardClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className="py-8">
      <h2 className="text-3xl font-sans font-bold text-center mb-6">Top Rated Products</h2>

      <div className="overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 px-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
        >
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="snap-start bg-accent min-w-[75%] sm:min-w-[250px] md:min-w-[300px] shadow-md rounded-xl p-4 hover:shadow-2xl hover:scale-105 transition-transform duration-300 h-auto relative cursor-pointer"
              onClick={() => handleCardClick(product.id)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-300 to-transparent opacity-100 md:opacity-50 md:hover:opacity-0 transition-opacity duration-300 rounded-xl"></div>

              <div className="relative w-full h-52 rounded-md overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain rounded-md"
                />
                <button
                  className={`absolute top-1 right-1 rounded-full p-1 transition-colors z-10 ${
                    wishlist.some((item) => item.id === product.id)
                      ? "text-red-500"
                      : "text-gray-400"
                  }`}
                  onClick={(e) => handleToggleWishlist(product, e)}
                >
                  <FaHeart size={15} />
                </button>
              </div>

              <h3 className="mt-2 text-base font-semibold font-serif text-gray-800">{product.name}</h3>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>

              <div className="flex items-center mb-1">
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
                className="absolute bottom-2 right-2 bg-gradient-to-b from-blue-500 to-purple-500 text-white text-[10px] font-medium p-2 rounded-lg hover:bg-white hover:text-orange-500 border-2 border-white font-sans transition-all duration-500"
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

export default TopRatedProducts;
