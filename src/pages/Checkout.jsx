import React, { useState } from "react";

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
    <div className="min-h-screen bg-blue-100 font-sans pb-8">
              {/* Hero Section */}
        <div className=" border-b-2 text-white "style={{ backgroundImage: "url('/images/bg.jpg')" }}>
                <div className="relative w-full h-[5vh] sm:h-[10vh] overflow-hidden">
                  <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-30">
                    <h1 className="text-xl sm:text-5xl font-bold  text-white font-serif">Checkout</h1>
                  </div>
                </div>
              </div>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="col-span-1 bg-blue-800 text-white p-6 space-y-4">
            <h2 className="text-xl font-bold font-serif">BarbellBase</h2>
            <p className="text-sm text-blue-200 font-sans">
              BarbellBase Trusted Business
            </p>

            <div className="bg-blue-700 p-4 rounded-lg space-y-3">
              <div className="flex items-center justify-between">
                <img
                  src={cartItems[0].image}
                  alt={cartItems[0].name}
                  className="w-16 h-16 rounded-lg"
                />
                <div>
                  <p className="font-semibold font-sans">{cartItems[0].name}</p>
                  <p className="font-sans">Qty: 1</p>
                </div>
                <p className="font-semibold text-lg font-sans">
                  ₹{cartItems[0].price}
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p>GST Number</p>
                  <button className="text-blue-300 underline">Add</button>
                </div>
                <div className="flex items-center justify-between">
                  <p>Order instructions</p>
                  <button className="text-blue-300 underline">Add</button>
                </div>
              </div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg mt-6">
              Coupons and offers
            </button>
          </div>

          <div className="col-span-2 p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-xl font-semibold font-serif">
                Add delivery address
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="pincode"
                  placeholder="Pincode"
                  className="border border-gray-300 rounded-lg p-3 w-full"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                />
                <div className="flex gap-4">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    className="border border-gray-300 rounded-lg p-3 w-1/2"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    className="border border-gray-300 rounded-lg p-3 w-1/2"
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
                className="border border-gray-300 rounded-lg p-3 w-full"
                value={formData.fullName}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="house"
                placeholder="House no / Building / Apartment"
                className="border border-gray-300 rounded-lg p-3 w-full"
                value={formData.house}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="area"
                placeholder="Area, Sector, Street, Village"
                className="border border-gray-300 rounded-lg p-3 w-full"
                value={formData.area}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                className="text-blue-600 underline"
                onClick={() => setFormData({ ...formData, landmark: "" })}
              >
                + Add landmark (optional)
              </button>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="saveAddress"
                  checked={formData.saveAddress}
                  onChange={handleChange}
                />
                <p className="text-sm">Save my address as</p>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800"
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
