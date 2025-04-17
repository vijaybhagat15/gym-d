import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const slides = [
  { hedding:"BARBELLBASE",
    image: "images/img4.jpg",
    title: "GET EXCLUSIVE GYM GUIDANCE",
    description:"Achieve your fitness goals with Gym T1! Explore top-quality supplements and connect with expert trainers."
  },
  { hedding:"EXCLUSIVE DISCOUSINTS",
    image: "images/img2.jpg",
    title: "SELECT WORKOUTS, STAY COMMITTED",
    description:"Choose your workouts, stay committed, and conquer your fitness goals." 
  },
  { hedding:"SAVE UPTO 50% OFF",
    image: "images/img.jpg",
    title: "COACHES GUIDE,GOALS ACHIEVED",
    description:"Guided by coaches, driven by goals—your path to success starts here!"
  },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [loaderWidth, setLoaderWidth] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [index]);

  useEffect(() => {
    setLoaderWidth(0);
    const loaderInterval = setInterval(() => {
      setLoaderWidth((prev) => (prev < 100 ? prev + 2.5 : 100));
    }, 100);
    return () => clearInterval(loaderInterval);
  }, [index]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="relative w-full h-[600px] md:h-[400px] lg:h-[500px] overflow-hidden max-w-screen-2xl mx-auto">
<AnimatePresence mode="wait">
  <motion.div
    key={index}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 1.1 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
    className="absolute inset-0 w-full h-full flex items-center sm:justify-start justify-center text-left bg-cover bg-center p-12 sm:p-28"
    style={{
      backgroundImage: `url(${slides[index].image})`,
      transition: "background-image 0.8s ease-in-out",
    }}
  >
      <div className="absolute inset-0 bg-gray-500 bg-opacity-0 transition-opacity duration-500"></div>
        
        <div className="relative text-black max-w-sm lg:max-w-lg drop-shadow-lg">
          <div className=" sm:text-xl text-lg  ">
          {slides[index].hedding}
          </div>
          <h1 className="text-xl md:text-2xl font-bold tracking-wide animate-fadeIn">
            {slides[index].title}
          </h1>
          <p className="mt-3 sm:text-xl text-lg leading-relaxed">
            {slides[index].description}
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <Link
              to="/products"
              className="mt-6 px-6 py-3 bg-gray-200 text-white font-bold text-lg rounded-xl hover:bg-gray-600 inline-block text-center font-sans"
            >
              <div className="bg-gradient-to-r from-blue-500 via-orange-500 to-purple-500 bg-clip-text text-transparent">
              SHOP NOW
              </div>
            </Link>
          </motion.div>
        </div>
    </motion.div>
</AnimatePresence>
      {/* Left Arrow */}
      <button onClick={prevSlide} className="absolute sm:left-4 left-1 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 sm:p-3 rounded-full text-white">
        <FaChevronLeft size={16} />
      </button>
      {/* Right Arrow */}
      <button onClick={nextSlide} className="absolute sm:right-4 right-1 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 sm:p-3 rounded-full text-white">
        <FaChevronRight size={16} />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 flex space-x-2 left-1/2 transform -translate-x-1/2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-gray-400"}`}
          ></button>
        ))}
      </div>

      {/* Loader UI */}
      <div className="absolute bottom-0 left-0 w-full bg-black border-t-2 border-gray-800">
        <div className="relative mx-auto h-2 w-full bg-gray-600">
          <div className="absolute h-2 bg-black transition-all" style={{ width: `${loaderWidth}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
