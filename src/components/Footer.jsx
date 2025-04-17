const Footer = () => {
  return (
    <footer className="bg-blue-100 text-gray-900 py-8 w-full">
      <div className="w-full max-w-screen-xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo and Contact Info */}
        <div>
          <img
            src="https://github.com/vijaybhagat15/gym-d/blob/main/public/logo.png?raw=true"
            alt="gym Logo"
            className="mb-2 w-40"
          />
          <h2 className="text-xl font-bold text-blue-900 mb-4">MUSCLE MART</h2>
          <p>
            address of gym/shop
          </p>
          <p className="mt-2">
            📞 +91-9359571296
          </p>
          <p className="mt-2">
            ✉️ <a href="mailto:musclemart@gmail.com" className="hover:text-red-500 lowercase">musclemart@gmail.com</a>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-4" style={{ fontSize: "22.5px" }}>Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-red-500">Home</a></li>
            <li><a href="#" className="hover:text-red-500">About Us</a></li>
            <li><a href="#" className="hover:text-red-500">Products</a></li>
            <li><a href="#" className="hover:text-red-500">Customer Care</a></li>
            <li><a href="#" className="hover:text-red-500">Careers</a></li>
          </ul>
        </div>

        {/* Shop By Category */}
        <div>
          <h4 className="font-bold mb-4" style={{ fontSize: "22.5px" }}>Shop By Category</h4>
          <ul className="space-y-2">
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
          <h4 className="font-bold mb-4" style={{ fontSize: "22.5px" }}>Privacy Policy</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-red-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-red-500">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-red-500">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-red-500">Return & Refund</a></li>
            <li><a href="#" className="hover:text-red-500">CERTIFIED by---</a></li>
          </ul>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="w-full max-w-screen-xl mx-auto px-4 mt-8">
        <div className="bg-indigo-900 py-4 px-6 rounded-lg flex flex-col md:flex-row justify-between items-center">
          <p className="text-white mb-4 md:mb-0">
            Stay ahead with updates on our latest collections and exclusive deals.
          </p>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="email"
              className="placeholder:text-gray-900 px-4 py-2 rounded-lg outline-none max-w-40 sm:max-w-max lowercase"
            />
            <button className="bg-purple-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom Social Links */}
      <div className="w-full max-w-screen-xl mx-auto px-4 mt-8 flex justify-between items-center">
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
