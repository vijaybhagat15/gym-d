import { FaEnvelope, FaPhoneAlt, FaUser, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      {/* Header Section */}
        <div className=" border-b-2 text-white "style={{ backgroundImage: "url('/images/bg.jpg')" }}>
        <div className="relative w-full h-[5vh] sm:h-[10vh] overflow-hidden">
          <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-30">
            <h1 className="text-xl sm:text-5xl font-bold text-white font-serif">Customer Care</h1>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-screen-lg mx-auto p-8 space-y-12 font-sans">
        {/* Introduction Section */}
        <div className="text-center space-y-4">
          <p className="text-gray-900">
            At BarbellBase, we are committed to providing you with a seamless and enjoyable shopping experience. We strive to ensure the best possible service for our customers.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Customer-Centric Approach */}
          <div className="space-y-4">
            <img
              src="\images\cus.avif"
              alt="Customer Support"
              className="w-full rounded-lg shadow-md"
            />
            <h2 className="text-xl font-bold font-serif">Customer-Centric Approach:</h2>
            <p className="text-gray-900">
              Your satisfaction is our top priority. We are dedicated to understanding and meeting your needs, offering personalized assistance whenever required.
            </p>
          </div>

          {/* Continuous Improvement */}
          <div className="space-y-4">
            <img
              src="\images\impro.jpg"
              alt="Continuous Improvement"
              className="w-full rounded-lg shadow-md"
            />
            <h2 className="text-xl font-bold font-serif">Continuous Improvement:</h2>
            <p className="text-gray-900">
              We believe in evolving with time. We constantly update our processes and technologies to enhance your experience and provide you with unmatched service.
            </p>
          </div>
        </div>

        {/* Help Section */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-center font-serif">How we can help you?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Contact Us */}
            <div className="bg-green-100 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold flex items-center gap-2 font-serif">
                <span className="text-green-500">
                  <FaPhoneAlt className="text-green-500" />
                </span>
                Contact Us
              </h3>
              <p className="text-gray-900">
                Reach out via phone, email, or live chat. Our team is available to assist you with any queries.
              </p>
            </div>

            {/* FAQs */}
            <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold flex items-center gap-2 font-serif">
                <span className="text-yellow-500">
                  <FaEnvelope className="text-yellow-500" />
                </span>
                FAQs
              </h3>
              <p className="text-gray-900">
                Explore our FAQ section for answers to common questions related to orders, shipping, and more.
              </p>
            </div>

            {/* Feedback */}
            <div className="bg-red-100 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold flex items-center gap-2 font-serif">
                <span className="text-red-500">
                  <FaPaperPlane className="text-red-500" />
                </span>
                Feedback
              </h3>
              <p className="text-gray-900">
                Share your feedback to help us serve you better. Your suggestions are crucial for our improvement.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className=" flex flex-col lg:flex-row items-center justify-center p-6 font-sans">
        {/* Contact Info */}
        <div className="w-full lg:w-1/2 max-w-md mb-8 lg:mb-0 lg:mr-12">
          <div className=" shadow-lg rounded-lg p-8 mb-6 border-2 border-gray-400 hover:border-gray-600 transition-all duration-300 hover:scale-105 ">
            <div className="flex items-center mb-4">
              <FaPhoneAlt className="text-gray-900 mr-4 text-2xl" />
              <h2 className="text-lg font-bold text-gray-800 font-serif">Call to Us</h2>
            </div>
            <p className="text-gray-700 mb-2">
              We are available 24/7, 7 days a week.
            </p>
            <p className="text-gray-900 font-semibold">Phone: +1 234 567 890</p>
          </div>

          <div className="shadow-lg rounded-lg p-8 border-2 border-gray-400 hover:border-gray-600 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-gray-900 mr-4 text-2xl" />
              <h2 className="text-lg font-bold text-gray-800 font-serif">Email Us</h2>
            </div>
            <p className="text-gray-700 mb-2">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-gray-900 font-semibold">customer@BarbellBase.com</p>
            <p className="text-gray-900 font-semibold">support@BarbellBase.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-1/2 max-w-md">
          <div className=" shadow-xl rounded-lg p-8 border-2 border-gray-400 hover:border-gray-600 transition-all duration-300 hover:scale-105">
            <h1 className="text-lg font-bold text-center mb-6 font-serif">Give Feedback</h1>
            <form className="space-y-4">
              <div>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-900" />
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="placeholder:text-gray-900 w-full pl-10 pr-3 py-3 border rounded-md focus:outline-none focus:ring-2 transition-all duration-300 border-gray-400 focus:ring-gray-600"
                  />
                </div>
              </div>
              <div>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-900" />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="placeholder:text-gray-900 w-full pl-10 pr-3 py-3 border rounded-md focus:outline-none focus:ring-2 transition-all duration-300 border-gray-400 focus:ring-gray-600"
                  />
                </div>
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="placeholder:text-gray-900 w-full px-3 py-3 border rounded-md focus:outline-none focus:ring-2 transition-all duration-300 border-gray-900 focus:ring-gray-600"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3  text-gray-100 font-semibold  flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gray-600  bg-orange-500  rounded-lg hover:bg-white hover:text-orange-500 transition-all duration-500 border-2 border-gray-300 font-sans"
              >
                <FaPaperPlane className="mr-2" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
