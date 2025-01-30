import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Slide1() {
  return (
<div
  className="bg-gray-500 h-screen grid grid-cols-1 md:grid-cols-2 items-center font-sans px-2 md:px-4 max-h-[450px]"
  style={{
    backgroundImage: "url('/images/img4.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover", // Ensures the image covers the entire div
    backgroundPosition: "center", // Centers the image within the div
  }}
>      {/* left Section: Text Content */}
      <motion.div
        className="flex items-center justify-center "
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="text-gray-900 px-8">
          <motion.p
            className="font-bold text-xl font-serif"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
           BarbellBase
          </motion.p>
          <motion.h1
            className="sm:text-4xl text-2xl font-extrabold mt-2 text-accent font-serif"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            GET EXCLUSIVE
            <br />
            GYM GUIDANCE
          </motion.h1>
          <motion.p
            className="mt-4 text-lg leading-relaxed text-gray-900 font-sans"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Achieve your fitness goals with Gym T1! <br />
             Explore top-quality supplements and connect <br /> 
             with expert trainers.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <Link
              to="/products"
              className="mt-6 px-6 py-3 bg-gray-200 text-gray-900 font-bold text-lg rounded-xl hover:bg-gray-600 inline-block text-center font-sans"
            >
              <div className="bg-gradient-to-r from-blue-500 via-orange-500 to-purple-500 bg-clip-text text-transparent animate-bounce">
              SHOP NOW
              </div>
            </Link>
          </motion.div>
        </div>
      </motion.div>
      {/* Left Section: Image Slider with Gradient Background */}
      <motion.div
        className="hidden md:flex justify-center items-center relative"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-[#000000] via-[#283618] to-transparent opacity-80 rounded-lg"></div>
        <div
          className="relative w-full max-w-md h-96 flex items-center justify-center z-10"
          style={{ width: "400px" }}
        >

        </div>
      </motion.div>
    </div>
  );
}

export default Slide1;
