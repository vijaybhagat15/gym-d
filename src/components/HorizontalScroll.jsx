import React from "react";
import { products } from "../data/products"; // Import products data

const HorizontalScroll = () => {
  return (
    <div className="flex justify-center bg-gray-200">
      <div className="flex overflow-x-auto space-x-4 p-1 scrollbar-hide scroll-smooth">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center flex-shrink-0 hover:scale-110 transform transition duration-300">
            {/* Gradient Border */}
            <div
              className="sm:w-[90px] sm:h-[90px] w-[50px] h-[50px] rounded-full bg-gradient-to-r from-pink-500 via-orange-500 to-purple-500 p-[2px]"
            >
              {/* Inner Circle */}
              <div className="rounded-full bg-white overflow-hidden w-full h-full z-0">
                <img
                  src={product.image} // Use product image from products.js
                  alt={product.name} // Use product name as alt text
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            {/* Title */}
            <p className="text-sm mt-1 text-gray-900">{product.name}</p> {/* Display product name */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
