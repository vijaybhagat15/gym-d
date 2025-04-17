import { useState } from "react";

export default function Checkout() {
  const [formData, setFormData] = useState({
    pincode: "",
    city: "",
    state: "",
    fullName: "",
    house: "",
    area: "",
    landmark: "",
    saveAddress: false,
  });

  const [cartItems] = useState([
    {
      id: 1,
      name: "Dumbbell Set (20kg)",
      price: 49.99,
      description: "A durable and adjustable dumbbell set for strength training.",
      image: "https://pngimg.com/uploads/dumbbell/dumbbell_PNG16411.png",
    },
  ]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  return (
    <div className="min-h-screen bg-blue-100 pb-8 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center text-2xl font-semibold py-4 border-2 border-indigo-200 bg-indigo-100">
        Your Cart
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Left Panel - Cart Summary */}
          <div className="bg-indigo-700 text-white p-6 space-y-4">
            <h2 className="text-2xl font-bold">MuscleMart</h2>
            <p className="text-base text-blue-200">MuscleMart Trusted Business</p>

            <div className="bg-indigo-500 p-4 rounded-lg space-y-3">
              <div className="flex items-center justify-between gap-4">
                <img
                  src={cartItems[0].image}
                  alt={cartItems[0].name}
                  className="w-16 h-16 rounded-lg object-contain"
                />
                <div className="flex-1">
                  <p className="font-semibold text-base">{cartItems[0].name}</p>
                  <p className="text-base">Qty: 1</p>
                </div>
                <p className="font-semibold text-lg">₹{cartItems[0].price}</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <p className="text-base">GST Number</p>
                  <button className="text-blue-300 underline text-base">Add</button>
                </div>
                <div className="flex justify-between">
                  <p className="text-base">Order instructions</p>
                  <button className="text-blue-300 underline text-base">Add</button>
                </div>
              </div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg text-base mt-6">
              Coupons and offers
            </button>
          </div>

          {/* Right Panel - Address Form */}
          <div className="col-span-2 p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-2xl font-semibold mb-4">Add Delivery Address</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="pincode"
                  placeholder="Pincode"
                  className="border border-gray-300 rounded-lg p-3 w-full text-base"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                />
                <div className="flex gap-4 w-full">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    className="border border-gray-300 rounded-lg p-3 w-1/2 text-base"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    className="border border-gray-300 rounded-lg p-3 w-1/2 text-base"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <input
                type="text"
                name="fullName"
                placeholder="Full name"
                className="border border-gray-300 rounded-lg p-3 w-full text-base"
                value={formData.fullName}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="house"
                placeholder="House no / Building / Apartment"
                className="border border-gray-300 rounded-lg p-3 w-full text-base"
                value={formData.house}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="area"
                placeholder="Area, Sector, Street, Village"
                className="border border-gray-300 rounded-lg p-3 w-full text-base"
                value={formData.area}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="landmark"
                placeholder="Landmark (optional)"
                className="border border-gray-300 rounded-lg p-3 w-full text-base"
                value={formData.landmark}
                onChange={handleChange}
              />

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="saveAddress"
                  checked={formData.saveAddress}
                  onChange={handleChange}
                />
                <label htmlFor="saveAddress" className="text-base">Save my address</label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-b from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white py-3 rounded-lg font-medium text-base"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
