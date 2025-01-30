import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaHeart, FaRegHeart, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { products } from '../data/products'; // Assuming the products data is imported

export default function ProductDetailsWithWishlist() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [wishlist, setWishlist] = useState(() => JSON.parse(localStorage.getItem('wishlist')) || []);
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundProduct = products.find((item) => item.id === parseInt(id));
    setProduct(foundProduct || null);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const toggleWishlist = () => {
    if (!product) return;
    if (wishlist.some((item) => item.id === product.id)) {
      setWishlist((prev) => prev.filter((item) => item.id !== product.id));
      alert(`${product.name} removed from wishlist.`);
    } else {
      setWishlist((prev) => [...prev, product]);
      alert(`${product.name} added to wishlist.`);
    }
  };

  const handleAddToCart = () => {
    if (!product) return;
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

  const relatedProducts = products.filter(
    (p) => p.category === product?.category && p.id !== product?.id
  );

  if (loading) {
    return <div className="text-center py-12 text-lg font-sans">Loading product details...</div>;
  }

  if (!product) {
    return <div className="text-center py-12 text-lg text-red-500 font-sans">Product not found!</div>;
  }

  return (
    <div className="container mx-auto py-10 px-4 sm:px-8 lg:px-12 font-sans">
      <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16 rounded-3xl shadow-lg p-6 sm:p-8">
        {/* Product Image */}
        <div className="lg:w-1/2 w-full bg-white p-4 rounded-3xl shadow-lg relative">
          <img
            src={product.image || '/placeholder-image.jpg'}
            alt={product.name || 'Product image not available'}
            className="w-full h-auto object-cover rounded-3xl transition-transform transform hover:scale-105"
          />
          <button
            onClick={toggleWishlist}
            className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform text-red-500 hover:text-red-600"
          >
            {wishlist.some((item) => item.id === product.id) ? <FaHeart size={24} /> : <FaRegHeart size={24} />}
          </button>
        </div>

        {/* Product Information */}
        <div className="lg:w-1/2 w-full flex flex-col">
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-xl font-serif font-semibold text-orange-600 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed font-sans">{product.description}</p>

          {/* Specifications */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2 font-serif">Specifications</h2>
            <ul className="list-disc pl-6 text-gray-600 font-sans">
              {product.specifications?.length ? (
                product.specifications.map((spec, index) => <li key={index}>{spec}</li>)
              ) : (
                <li>No specifications available</li>
              )}
            </ul>
          </div>

          {/* Shipping Info */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2 font-serif">Shipping Information</h2>
            <p className="text-gray-600 font-sans">
              {product.shipping || 'No shipping information available'}
            </p>
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-orange-500 text-white py-3 px-6 rounded-md shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-300 w-full sm:w-auto font-sans"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {relatedProducts.map((related) => (
            <div
              key={related.id}
              className="bg-white shadow-md rounded-3xl p-4 hover:shadow-2xl hover:scale-105 border-2 border-orange-100 hover:border-orange-400 transition-transform"
              onClick={() => (window.location.href = `/product/${related.id}`)}
            >
              <img
                src={related.image}
                alt={related.name}
                className="w-full h-auto object-cover rounded-xl mb-4"
              />
              <h3 className="text-base font-serif font-semibold text-gray-800 mb-2">{related.name}</h3>
              <p className="text-gray-600 mb-2">${related.price.toFixed(2)}</p>
              <button
                className="bg-orange-500 text-white text-xs px-2 py-1 rounded-md hover:bg-orange-700 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(related);
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
}
