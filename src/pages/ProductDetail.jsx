import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { products } from '../data/products';
import { FaHeart, FaRegHeart, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleWishlist, addToCart } from '../redux/slices/productslice';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const wishlist = useSelector((state) => state.products.wishlist);

  useEffect(() => {
    const foundProduct = products.find((product) => product.id === parseInt(id));
    setProduct(foundProduct || null);
    setLoading(false);
  }, [id]);

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    dispatch(addToCart(product));
    alert(`${product.name} added to cart!`);
  };

  const handleAddToWishlist = (product, e) => {
    e.stopPropagation();
    dispatch(toggleWishlist(product));
    const exists = wishlist.some((item) => item.id === product.id);
    alert(`${product.name} ${exists ? 'removed from' : 'added to'} wishlist.`);
  };

  const handleCardClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  const relatedProducts = products.filter(
    (p) => p.category === product?.category && p.id !== product?.id
  );

  if (loading) return <div className="text-center py-12 text-lg font-sans">Loading product details...</div>;

  if (!product) return <div className="text-center py-12 text-lg text-red-500 font-sans">Product not found!</div>;

  return (
    <div className="container mx-auto py-10 px-4 font-sans border-b-2 border-white">
      <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16 rounded-3xl shadow-lg p-4 sm:p-6 md:p-8 bg-gray-200 text-black">
        {/* Product Image */}
        <div className="lg:w-1/2 w-full bg-white p-2 sm:p-4 rounded-2xl shadow-md relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto max-h-[300px] sm:max-h-[400px] object-contain rounded-2xl transition-transform hover:scale-105 duration-300"
          />
          <button
            onClick={(e) => handleAddToWishlist(product, e)}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white p-2 rounded-full shadow hover:scale-110 transition-transform text-red-500 hover:text-red-600"
          >
            {wishlist.some((item) => item.id === product.id) ? <FaHeart size={20} /> : <FaRegHeart size={18} />}
          </button>
        </div>

        {/* Product Info */}
        <div className="lg:w-1/2 w-full flex flex-col">
          <h1 className="text-2xl sm:text-3xl font-serif font-bold mb-4">{product.name}</h1>
          <p className="text-xl font-semibold text-green-600 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-base sm:text-lg mb-6 leading-relaxed">{product.description}</p>

          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Specifications</h2>
            <ul className="list-disc pl-5 text-black">
              {product.specifications?.length ? (
                product.specifications.map((spec, idx) => <li key={idx}>{spec}</li>)
              ) : (
                <li>No specifications available</li>
              )}
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Details</h2>
            <p>{product.details || 'No additional details available'}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Shipping Information</h2>
            <p>{product.shipping || 'No shipping information available'}</p>
          </div>

          <div className="mt-auto">
            <button
              onClick={(e) => handleAddToCart(product, e)}
              className="bg-gradient-to-b from-blue-500 to-purple-500 text-white py-3 px-6 rounded-md shadow-md w-full sm:w-auto font-bold hover:from-purple-500 hover:to-blue-500 transition-all"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-serif font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {relatedProducts.map((related) => (
            <div
              key={related.id}
              className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl hover:scale-[1.03] border hover:border-gray-300 transition-transform relative cursor-pointer"
              onClick={() => handleCardClick(related.id)}
            >
              <div className="relative w-full overflow-hidden rounded-lg mb-2">
                <img
                  src={related.image}
                  alt={related.name}
                  className="w-full h-40 object-contain"
                />
                <button
                  className={`absolute top-2 right-2 p-1 rounded-full ${
                    wishlist.some((item) => item.id === related.id)
                      ? 'text-red-500'
                      : 'text-gray-400'
                  }`}
                  onClick={(e) => handleAddToWishlist(related, e)}
                >
                  <FaHeart size={16} />
                </button>
              </div>
              <h3 className="text-base font-semibold text-gray-800">{related.name}</h3>
              <p className="text-sm text-gray-600">${related.price.toFixed(2)}</p>
              <p className="text-xs text-gray-500 mb-2">{related.description}</p>

              {/* Rating */}
              <div className="flex items-center mb-3">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <span key={i}>
                      {i < Math.floor(related.rating) ? (
                        <FaStar className="text-yellow-500" />
                      ) : i < related.rating ? (
                        <FaStarHalfAlt className="text-yellow-500" />
                      ) : (
                        <FaRegStar className="text-yellow-500" />
                      )}
                    </span>
                  ))}
              </div>

              <button
                onClick={(e) => handleAddToCart(related, e)}
                className="absolute bottom-3 right-3 text-[10px] font-semibold bg-gradient-to-b from-blue-500 to-purple-500 text-white px-3 py-1 rounded-lg border border-white hover:from-purple-500 hover:to-blue-500 transition-all"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
