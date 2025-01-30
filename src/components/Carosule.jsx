import Slide1 from "./slides/Slide1";
import Slide2 from "./slides/Slide2";
import Slide3 from "../components/slides/Slide3";
import { useState, useEffect } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaderWidth, setLoaderWidth] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const slides = [<Slide1 key="slide1" />, <Slide2 key="slide2" />, <Slide3 key="slide3" />];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    setLoaderWidth(0);
    const loaderInterval = setInterval(() => {
      setLoaderWidth((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 40);

    return () => clearInterval(loaderInterval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Touch events for swipe detection
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX !== null && touchEndX !== null) {
      const swipeDistance = touchStartX - touchEndX;
      if (swipeDistance > 50) {
        nextSlide(); // Swipe left -> next slide
      } else if (swipeDistance < -50) {
        prevSlide(); // Swipe right -> previous slide
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className="intro-container relative overflow-hidden border-b-2 border-white"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      <div
        className="slides flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 h-full">
            {slide}
          </div>
        ))}
      </div>

      {/* Loader */}
      <div className="bg-black border-t-2 border-gray-800">
        <div className="relative mx-auto h-2 w-full bg-gray-600">
          <div className="absolute h-2 bg-black transition-all" style={{ width: `${loaderWidth}%` }}></div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute sm:left-4 left-1 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold p-2 rounded-full border-2 border-transparent"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute sm:right-4 right-1 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold p-2 rounded-full border-2 border-transparent"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
