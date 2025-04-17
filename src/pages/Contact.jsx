import { FaEnvelope, FaPhoneAlt, FaUser, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      {/* Heading */}
      <div className="mx-auto text-center text-xl md:text-3xl font-bold py-6 border-2 border-indigo-200 bg-indigo-100 w-full">
        Contact Us
      </div>

      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-6 md:py-12 space-y-12">
        {/* Intro */}
        <div className="text-center space-y-4">
          <p className="text-gray-900 text-sm md:text-base">
            At MuscleMart, we are committed to providing you with a seamless and enjoyable shopping experience.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <img
              src="/images/cus.avif"
              alt="Customer Support"
              className="w-full rounded-lg shadow-md border border-indigo-500"
            />
            <h2 className="text-xl md:text-2xl font-bold">Customer-Centric Approach:</h2>
            <p className="text-gray-900">
              Your satisfaction is our top priority.
            </p>
          </div>

          <div className="space-y-4">
            <img
              src="/images/impro.jpg"
              alt="Continuous Improvement"
              className="w-full rounded-lg shadow-md border border-indigo-500"
            />
            <h2 className="text-xl md:text-2xl font-bold">Continuous Improvement:</h2>
            <p className="text-gray-900">
              We constantly update our processes and technologies to enhance your experience.
            </p>
          </div>
        </div>

        {/* Help Section */}
        <div className="space-y-8">
          <h2 className="text-xl md:text-2xl font-bold text-center">How we can help you?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-green-100 p-6 rounded-lg shadow-md border border-indigo-500">
              <h3 className="text-base font-bold flex items-center gap-2">
                <FaPhoneAlt className="text-green-500" />
                Contact Us
              </h3>
              <p className="text-gray-900 text-sm">
                Reach out via phone, email, or live chat. Our team is here to assist you.
              </p>
            </div>

            <div className="bg-yellow-100 p-6 rounded-lg shadow-md border border-indigo-500">
              <h3 className="text-base font-bold flex items-center gap-2">
                <FaEnvelope className="text-yellow-500" />
                FAQs
              </h3>
              <p className="text-gray-900 text-sm">
                Check our FAQ section for answers to common questions.
              </p>
            </div>

            <div className="bg-red-100 p-6 rounded-lg shadow-md border border-indigo-500">
              <h3 className="text-base font-bold flex items-center gap-2">
                <FaPaperPlane className="text-red-500" />
                Feedback
              </h3>
              <p className="text-gray-900 text-sm">
                Your feedback helps us improve. Share your thoughts with us.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center px-4 md:px-8 py-8 gap-8">
        {/* Contact Info */}
        <div className="w-full lg:w-1/2 max-w-md space-y-6">
          <div className="shadow-lg rounded-lg p-6 border border-indigo-500 hover:border-gray-600 transition duration-300 hover:scale-105">
            <div className="flex items-center mb-2">
              <FaPhoneAlt className="text-gray-900 mr-3 text-2xl" />
              <h2 className="text-base font-bold text-gray-800">Call to Us</h2>
            </div>
            <p className="text-gray-700 text-sm mb-1">We are available 24/7, 7 days a week.</p>
            <p className="text-gray-900 font-semibold text-sm">Phone: +1 234 567 890</p>
          </div>

          <div className="shadow-lg rounded-lg p-6 border border-indigo-500 hover:border-gray-600 transition duration-300 hover:scale-105">
            <div className="flex items-center mb-2">
              <FaEnvelope className="text-gray-900 mr-3 text-2xl" />
              <h2 className="text-base font-bold text-gray-800">Email Us</h2>
            </div>
            <p className="text-gray-700 text-sm mb-1">
              Fill out the form and we’ll get back to you within 24 hours.
            </p>
            <p className="text-gray-900 font-semibold text-sm">customer@musclemart.com</p>
            <p className="text-gray-900 font-semibold text-sm">support@musclemart.com</p>
          </div>
        </div>

        {/* Form */}
        <div className="w-full lg:w-1/2 max-w-md">
          <div className="shadow-xl rounded-lg p-6 border border-indigo-500 hover:border-gray-600 transition duration-300 hover:scale-105">
            <h1 className="text-base font-bold text-center mb-4">Give Feedback</h1>
            <form className="space-y-4">
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-900" />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="placeholder:text-gray-900 w-full pl-10 pr-3 py-3 border rounded-md focus:outline-none focus:ring-2 border-gray-400 focus:ring-gray-600"
                />
              </div>

              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-900" />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="placeholder:text-gray-900 w-full pl-10 pr-3 py-3 border rounded-md focus:outline-none focus:ring-2 border-gray-400 focus:ring-gray-600"
                />
              </div>

              <div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="placeholder:text-gray-900 w-full px-3 py-3 border rounded-md focus:outline-none focus:ring-2 border-gray-900 focus:ring-gray-600"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 font-semibold flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-lg border border-gray-300 hover:bg-gradient-to-t bg-gradient-to-b from-blue-500 to-purple-500 text-white transition duration-500"
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
