import { useNavigate } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import {addToCart,toggleWishlist,} from '../redux/slices/productslice';

export default function Wishlist() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ Access wishlist and cart from Redux state
  const wishlist = useSelector((state) => state.products.wishlist);
  const wishlistCount = wishlist.length;

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    dispatch(addToCart(product));
    alert(`${product.name} added to cart!`);
  };

  const handleRemoveFromWishlist = (product, e) => {
    e.stopPropagation();
    dispatch(toggleWishlist(product));
  };

  const handleCardClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <section className="min-h-screen pb-4 font-sans">
      {/* Hero Section */}
      <div className='mx-auto flex text-center justify-center text-3xl border-2 border-indigo-200 bg-indigo-100'>Your Wishlist Items</div>

      <p className="text-center text-white font-sans bg-indigo-500">
        Total items in wishlist: {wishlistCount}
      </p>

      <div className="container mx-auto py-2 px-4 sm:py-20 sm:px-14">
        {wishlist.length === 0 ? (
          <p className="text-center text-gray-600 font-sans">
            Your wishlist is empty. Start adding your favorite products!
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 rounded-3xl">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="bg-white min-w-32 shadow-md rounded-lg p-4 hover:shadow-2xl hover:scale-105 transition-transform h-auto relative cursor-pointer"
                onClick={() => handleCardClick(product.id)}
              >
                <div className="relative w-full aspect-w-1 aspect-h-1 rounded-md overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <button
                    className="absolute top-1 right-1 rounded-full p-1 text-red-500 hover:text-red-700 transition"
                    onClick={(e) => handleRemoveFromWishlist(product, e)}
                  >
                    <FaHeart size={15} />
                  </button>
                </div>

                <h3 className="mt-2 text-base font-semibold text-gray-800 font-serif">
                  {product.name}
                </h3>
                <p className="text-gray-600 font-sans">${product.price.toFixed(2)}</p>
                <p className="text-gray-500 text-xs mb-2 font-sans">{product.description}</p>

                <div className="flex items-center mb-2">
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
        )}
      </div>
    </section>
  );
}
