import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, addToCart } from '../redux/slices/productslice';

export default function Cart() {
  const cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();
  

    const calculateTaxes = () => {
        const taxRate = 0.1; // 10% tax rate
        return calculateTotal() * taxRate;
    };

    const calculateCouponDiscount = () => {
        const couponDiscount = 15; // Flat $15 discount
        return cart.length > 0 ? couponDiscount : 0;
    };
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({ price: [0, 500], category: [], rating: 0 });
    const navigate = useNavigate();

    const handleRemoveItem = (id) => {
      dispatch(removeFromCart(id));
    };
    

    const handleUpdateQuantity = (id, quantity) => {
      if (quantity < 1) return;
      dispatch(addToCart({ id, quantity }));
    };

    const calculateTotal = () =>
        cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const calculateSavings = () =>
        cart.reduce((savings, item) => savings + (item.discount || 0) * item.quantity, 0);

    const handleCheckout = () => {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        navigate('/checkout');
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handlePriceChange = (value) => {
        setFilters((prevFilters) => ({ ...prevFilters, price: value }));
    };

    const handleRatingChange = (value) => {
        setFilters((prevFilters) => ({ ...prevFilters, rating: value }));
    };

    const handleCategoryChange = (category) => {
        setFilters((prevFilters) => {
            const isSelected = prevFilters.category.includes(category);
            return {
                ...prevFilters,
                category: isSelected
                    ? prevFilters.category.filter((cat) => cat !== category)
                    : [...prevFilters.category, category],
            };
        });
    };

    const filteredCart = cart.filter((item) => {
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesPrice =
            item.price >= filters.price[0] && item.price <= filters.price[1];
        const matchesCategory =
            filters.category.length > 0
                ? filters.category.includes(item.category)
                : true;
        const matchesRating = item.rating >= filters.rating;
        return matchesSearch && matchesPrice && matchesCategory && matchesRating;
    });

    const uniqueCategories = [...new Set(cart.map((item) => item.category))];

    return (
        <div className="min-h-screen b-6  bg-white max-w-full">
            <div className=" mx-auto">
                {/* Header Section */}
                <div className='mx-auto flex text-center justify-center text-3xl border-2 border-indigo-200 bg-indigo-100'>Your Cart</div>

        <div className="col-span-1 flex flex-col space-y-1 min-w-32 lg:hidden border-2 border-x-gray-200 rounded-lg px-3 py-1 text-white h-min  bg-indigo-500 text-xs">
          <div className="flex flex-col ">
            <input
              type="text"
              placeholder="Search products...🔍"
              className=" px-2  rounded-md sm:my-2 border-2 hover:border-custom-beige border-gray-400 sm:w-auto placeholder-black"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <label className=" font-semibold">
              Price Range: ${filters.price[0]} - ${filters.price[1]}
            </label>
            <Slider
              range
              min={0}
              max={500}
              defaultValue={[0, 500]}
              value={filters.price}
              onChange={handlePriceChange}
            />
          </div>
          <div className="flex flex-col ">
            <label className=" font-semibold">
              Minimum Rating: {filters.rating} Stars
            </label>
            <Slider
              min={0}
              max={5}
              step={0.5}
              defaultValue={0}
              value={filters.rating}
              onChange={handleRatingChange}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label className=" font-semibold ">
              Categories:
            </label>
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
                  <label htmlFor={category} className="">
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                    {/* Cart Items or Empty Message */}
                    <div className="lg:col-span-2 space-y-6">
                        {filteredCart.length > 0 ? (
                            filteredCart.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex flex-col sm:flex-row items-center justify-between border border-gray-300 rounded-lg p-4 bg-white shadow-sm"
                                >
                                    <div className="flex flex-col sm:flex-row items-center space-x-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-24 h-24 object-cover rounded-lg"
                                        />
                                        <div className="text-center sm:text-left">
                                            <h2 className="text-base md:text-lg font-bold text-gray-800 ">
                                                {item.name}
                                            </h2>
                                            <p className="text-sm md:text-base text-gray-600">
                                                ${item.price.toFixed(2)}
                                            </p>
                                            {item.outOfStock && (
                                                <p className="text-red-500 font-semibold">
                                                    Out of Stock
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-4 sm:mt-0">
                                        <button
                                            className="bg-gray-200 text-gray-800 p-2 rounded-full hover:bg-gray-300"
                                            onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                                            disabled={item.outOfStock}
                                        >
                                            <FaMinus />
                                        </button>
                                        <span className="text-lg font-medium">{item.quantity}</span>
                                        <button
                                            className="bg-gray-200 text-gray-800 p-2 rounded-full hover:bg-gray-300"
                                            onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                                            disabled={item.outOfStock}
                                        >
                                            <FaPlus />
                                        </button>
                                        <button
                                            className="text-red-500 p-2 rounded-full hover:bg-red-100"
                                            onClick={() => handleRemoveItem(item.id)}
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-600">
                                No products match the filters. Adjust the filters to view items.
                            </p>
                        )}
                    </div>
                    {/* Price Details */}
                    {filteredCart.length > 0 && (
                        <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-sm">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 ">
                                Price Details
                            </h3>
                            <div className="space-y-2">
                                <div className="flex justify-between text-gray-600">
                                    <span>Price ({cart.length} items)</span>
                                    <span>${calculateTotal().toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Discount</span>
                                    <span className="text-green-500">-${calculateSavings().toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Coupon Discount</span>
                                    <span className="text-green-500">-${calculateCouponDiscount()}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Taxes</span>
                                    <span>${calculateTaxes().toFixed(2)}</span>
                                </div>
                            </div>
                            <hr className="my-4" />
                            <div className="flex justify-between font-bold text-gray-800">
                                <span>Total</span>
                                <span>${(calculateTotal() - calculateSavings() - calculateCouponDiscount() + calculateTaxes()).toFixed(2)}</span>
                            </div>
                            <button
                                className="mt-4 w-full hover:border-gray-500 py-2 font-bold  hover:bg-gradient-to-t bg-gradient-to-b from-blue-500 to-purple-500 text-white  rounded-lg hover:bg-white transition-all duration-500 border-2 border-gray-300"
                                onClick={handleCheckout}
                            >
                                Checkout
                            </button>
                        </div>
                    )}
                                        {/* Filters Section */}
        <div className="col-span-1 lg:flex flex-col space-y-4 min-w-32  border-2 border-x-gray-200 rounded-lg p-3 text-white hidden bg-indigo-500">
          <div className="flex flex-col space-y-2">
            <input
              type="text"
              placeholder="Search products...🔍"
              className="sm:px-2 sm:py-2 px-2 rounded-md sm:my-2 border-2 hover:border-custom-beige border-gray-400 sm:w-auto placeholder-black"
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
              defaultValue={[0, 500]}
              value={filters.price}
              onChange={handlePriceChange}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-semibold ">
              Minimum Rating: {filters.rating} Stars
            </label>
            <Slider
              min={0}
              max={5}
              step={0.5}
              defaultValue={0}
              value={filters.rating}
              onChange={handleRatingChange}
              
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-semibold">
              Categories:
            </label>
            <div className="grid grid-cols-2">
              {uniqueCategories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={category}
                    checked={filters.category.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    className="form-checkbox h-4 w-4"
                  />
                  <label htmlFor={category} className="text-sm">
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
                </div>
            </div>
        </div>
    );
}
