import { useNavigate } from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart } from 'react-icons/fa';
import { products } from '../data/products'; // Your static products data
import { useSelector, useDispatch } from 'react-redux';
import {addToCart,toggleWishlist,setFilters,setSearchQuery,} from '../redux/slices/productslice';

export default function Products() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Read all product-related states from the Redux store.
  const { wishlist, filteredProducts, filters, searchQuery } = useSelector(
    (state) => state.products
  );

  // Compute the unique categories from your static products.
  const uniqueCategories = [...new Set(products.map((item) => item.category))];

  // Callback function: dispatch action to add product to cart.
  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    dispatch(addToCart(product));
    alert(`${product.name} added to cart!`);
  };

  // Callback function: dispatch action to toggle product in wishlist.
  const handleAddToWishlist = (product, e) => {
    e.stopPropagation();
    dispatch(toggleWishlist(product));
  };

  // Callback for search field changes
  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  // Navigate to product details on card click.
  const handleCardClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  // Callback to update price filter.
  const handlePriceChange = (value) => {
    dispatch(setFilters({ ...filters, price: value }));
  };

  // Callback to update rating filter.
  const handleRatingChange = (value) => {
    dispatch(setFilters({ ...filters, rating: value }));
  };

  // Callback to update category filter.
  const handleCategoryChange = (category) => {
    const isSelected = filters.category.includes(category);
    const updatedCategories = isSelected
      ? filters.category.filter((cat) => cat !== category)
      : [...filters.category, category];
    dispatch(setFilters({ ...filters, category: updatedCategories }));
  };

  // Since our products slice is responsible for updating filteredProducts when filters or searchQuery change,
  // we don't need to manually recalculate here.

  return (
    <section className="min-h-screen py-b font-sans bg-white border-b-2 border-white w-full">
      <div className="w-full mx-auto">
        <div className='mx-auto flex text-center justify-center text-3xl border-2 border-indigo-200 bg-indigo-100'>Products</div>
        {/* Mobile Filter View */}
        <div className="lg:hidden">
          <div className="col-span-1 flex flex-col space-y-1 min-w-32 max-w-80 mx-auto lg:hidden border-2 border-x-gray-200 rounded-lg px-3 py-1 text-white h-min bg-indigo-500 text-xs">
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Search products..."
                className="px-2 rounded-md sm:my-2 border-2 hover:border-custom-beige border-gray-400 sm:w-auto placeholder-black"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <label className="font-semibold">
                Price Range: ${filters.price[0]} - ${filters.price[1]}
              </label>
              <Slider
                range
                min={0}
                max={500}
                value={filters.price}
                onChange={handlePriceChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">
                Minimum Rating: {filters.rating} Stars
              </label>
              <Slider
                min={0}
                max={5}
                step={0.5}
                value={filters.rating}
                onChange={handleRatingChange}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label className="font-semibold">Categories:</label>
              <div className="grid grid-cols-4 text-[10px]">
                {uniqueCategories.map((category) => (
                  <div key={category} className="flex items-center space-x-1">
                    <input
                      type="checkbox"
                      id={category}
                      checked={filters.category.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                      className="form-checkbox h-3 w-3"
                    />
                    <label htmlFor={category}>{category}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container sm:mx-auto py-2 sm:py-5 sm:px-1 grid lg:grid-cols-5 gap-6 grid-cols-2">
        <div className="col-span-4 grid text-sm grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 ml-1">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="min-w-32 shadow-md rounded-lg p-4 hover:shadow-2xl hover:scale-105 transition-transform h-auto relative"
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
              <h3 className="mt-2 text-base font-semibold font-serif text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
              <p className="text-gray-500 text-xs mb-2 font-sans">
                {product.description}
              </p>
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
                className="absolute bottom-2 right-2 hover:bg-gradient-to-t bg-gradient-to-b from-blue-500 to-purple-500 text-white text-[10px] font-medium p-2 rounded-lg hover:bg-white hover:text-orange transition-all duration-500 border-2 border-white font-sans"
                onClick={(e) => handleAddToCart(product, e)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <div className="col-span-1 hidden lg:flex flex-col space-y-4 min-w-32 border-2 border-x-gray-100 rounded-lg p-3 text-white bg-indigo-500">
          <div className="flex flex-col space-y-2">
            <input
              type="text"
              placeholder="Search products..."
              className="sm:px-2 sm:py-2 px-2 rounded-xl sm:my-2 border-2 hover:border-custom-beige border-gray-200 sm:w-auto placeholder:text-sm placeholder:text-black"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <label className="text-sm font-semibold">
              Price Range: ${filters.price[0]} - ${filters.price[1]}
            </label>
            <Slider
              range
              min={0}
              max={500}
              value={filters.price}
              onChange={handlePriceChange}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-semibold">
              Minimum Rating: {filters.rating} Stars
            </label>
            <Slider
              min={0}
              max={5}
              step={0.5}
              value={filters.rating}
              onChange={handleRatingChange}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-semibold">Categories:</label>
            {uniqueCategories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={category}
                  checked={filters.category.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="form-checkbox h-4 w-4 text-orange-500"
                />
                <label htmlFor={category} className="text-sm">
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
