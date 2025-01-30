import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { products } from '../data/products';
import { FaHeart, FaRegHeart, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import React from "react";
export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundProduct = products.find((product) => product.id === parseInt(id));
    setProduct(foundProduct || null);
    setLoading(false);
  }, [id]);

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

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
    if (wishlist.some((item) => item.id === product.id)) {
      setWishlist((prevWishlist) =>
        prevWishlist.filter((item) => item.id !== product.id)
      );
      alert(`${product.name} removed from wishlist.`);
    } else {
      setWishlist((prevWishlist) => [...prevWishlist, product]);
      alert(`${product.name} added to wishlist.`);
    }
  };

  const handleCardClick = (productId) => {
    window.location.href = `/product/${productId}`;
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
    <div className=" mx-auto py-10 px-4 sm:px-8 lg:px-12 font-sans  border-b-2 border-white ">
      <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16 rounded-3xl shadow-lg p-6 sm:p-8 bg-black text-white ">
        {/* Product Image */}
        <div className="lg:w-1/2 w-full bg-white p-4 rounded-3xl shadow-lg relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover rounded-3xl transition-transform transform hover:scale-110 duration-300"
          />
          <button
            onClick={(e) => handleAddToWishlist(product, e)}
            className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform text-red-500 hover:text-red-600"
          >
            {wishlist.some((item) => item.id === product.id) ? <FaHeart size={24} /> : <FaRegHeart size={15} />}
          </button>
        </div>

        {/* Product Information */}
        <div className="lg:w-1/2 w-full flex flex-col">
          <h1 className="text-2xl sm:text-3xl font-serif font-bold  mb-4">{product.name}</h1>
          <p className="text-xl font-serif font-semibold text-green-600 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-200 text-base sm:text-lg mb-6 leading-relaxed font-sans">{product.description}</p>
          {/* Product Specifications */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-white mb-2 font-serif">Specifications</h2>
            <ul className="list-disc pl-6 text-gray-200 font-sans">
              {product.specifications && product.specifications.length > 0 ? (
                product.specifications.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))
              ) : (
                <li>No specifications available</li>
              )}
            </ul>
          </div>

          {/* Product Details */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-white mb-2 font-serif">Details</h2>
            <p className="text-gray-200 font-sans">
              {product.details || 'No additional details available'}
            </p>
          </div>

          {/* Shipping Info */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-white mb-2 font-serif">Shipping Information</h2>
            <p className="text-gray-200 font-sans">
              {product.shipping || 'No shipping information available'}
            </p>
          </div>
          <div className="mt-auto">
            <button
              onClick={(e) => handleAddToCart(product, e)}
              className=" hover:bg-white hover:text-gray-500 bg-gray-500 text-white  hover:border-gray-500 py-3 px-6 rounded-md shadow-md  focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-300 w-full sm:w-auto font-sans font-bold"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-serif font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {relatedProducts.map((related) => (
            <div
              key={related.id}
              className="bg-white min-w-32 shadow-md rounded-xl p-4 hover:shadow-2xl hover:scale-105 border-2 border-gray-300 hover:border-gray-400 transition-transform h-auto relative"
              onClick={() => handleCardClick(related.id)}
            >
              <div className="relative w-full aspect-w-1 aspect-h-1 rounded-md overflow-hidden">
                <img
                  src={related.image}
                  alt={related.name}
                  className="w-full h-full object-cover"
                />
                <button
                  className={`absolute top-1 right-1 rounded-full p-1 transition-colors ${
                    wishlist.some((item) => item.id === related.id)
                      ? 'text-red-500'
                      : 'text-gray-400'
                  }`}
                  // onClick={(e) => handleAddToWishlist(related, e)}
                >
                  <FaHeart size={15} />
                </button>
              </div>
              <h3 className="mt-2 text-base font-semibold font-serif text-gray-800">{related.name}</h3>
              <p className="text-gray-600">${related.price.toFixed(2)}</p>
              <p className="text-gray-500 text-xs mb-2 font-sans">{related.description}</p>
              <div className="flex items-center mb-6">
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
                className="absolute bottom-2 right-2 bg-orange-500 text-white text-[10px] font-medium p-2 rounded-lg hover:bg-white hover:text-orange-500 transition-all duration-500 border-2 border-white font-sans"
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
}
