import { products } from "../data/products";

const HorizontalScroll = () => {
  return (
    <div className="w-full bg-gray-200 py-2">
      <div className="flex overflow-x-auto space-x-4 px-4 scrollbar-hide scroll-smooth">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center flex-shrink-0 hover:scale-105 transform transition duration-300"
          >
            {/* Gradient Border Circle */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-pink-500 via-orange-500 to-purple-500 p-[2px]">
              {/* Inner Image Circle */}
              <div className="rounded-full bg-white overflow-hidden w-full h-full flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Product Name */}
            <p className="text-xs sm:text-sm mt-1 text-gray-900 text-center max-w-[5rem] truncate">
              {product.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
