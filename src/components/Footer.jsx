import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo and Contact Info */}
        <div>
          <img
            src="/images/logo.png"
            alt="Cockatoo Logo"
            className="mb-4 w-40"
          />
          <p className="text-gray-400">
            address of gym/shop
          </p>
          <p className="text-gray-400 mt-2">
            📞 +91-9359571296
          </p>
          <p className="text-gray-400 mt-2">
            ✉️ <a href="mailto:cockatooindia@gmail.com" className="hover:text-red-500">BarbellBase@gmail.com</a>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-red-500">Home</a></li>
            <li><a href="#" className="hover:text-red-500">About Us</a></li>
            <li><a href="#" className="hover:text-red-500">Products</a></li>
            <li><a href="#" className="hover:text-red-500">Customer Care</a></li>
            <li><a href="#" className="hover:text-red-500">Careers</a></li>
          </ul>
        </div>

        {/* Shop By Category */}
        <div>
          <h4 className="font-bold mb-4">Shop By Category</h4>
          <ul className="text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-red-500">Accessories</a></li>
            <li><a href="#" className="hover:text-red-500">Camping & Hiking</a></li>
            <li><a href="#" className="hover:text-red-500">Cardio Equipment</a></li>
            <li><a href="#" className="hover:text-red-500">Cycling</a></li>
            <li><a href="#" className="hover:text-red-500">Sports</a></li>
            <li><a href="#" className="hover:text-red-500">Strength Equipments</a></li>
            <li><a href="#" className="hover:text-red-500">Yoga</a></li>
            <li><a href="#" className="hover:text-red-500">New Year Sale</a></li>
          </ul>
        </div>

        {/* Privacy Policy */}
        <div>
          <h4 className="font-bold mb-4">Privacy Policy</h4>
          <ul className="text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-red-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-red-500">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-red-500">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-red-500">Return & Refund</a></li>
            <li><a href="#" className="hover:text-red-500">CERTIFIED by---</a></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">
        {/* Subscribe Section */}
        <div className="bg-gray-900 py-4 px-6 rounded-lg flex flex-col md:flex-row justify-between items-center">
          <p className="text-white mb-4 md:mb-0">
          Stay ahead with updates on our latest collections and exclusive deals.
          </p>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Email"
              className="placeholder:text-gray-900 px-4 py-2 rounded-lg outline-none max-w-40 sm:max-w-max"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white px-2 py-2 rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 text-gray-400 flex justify-between items-center">
        <div className="flex space-x-4">
          <a href="#" className="hover:text-red-500">Facebook</a>
          <a href="#" className="hover:text-red-500">Instagram</a>
          <a href="#" className="hover:text-red-500">YouTube</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
