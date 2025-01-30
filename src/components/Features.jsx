import React from "react";
import { FiGift, FiUsers, FiTruck, FiCheckCircle } from "react-icons/fi";

const Features = () => {
  const features = [
    {
      icon: <FiGift className="w-10 h-10 text-indigo-500" />,
      title: "1000+",
      subtitle: "Verified Products",
    },
    {
      icon: <FiUsers className="w-10 h-10 text-indigo-500" />,
      title: "1 Million+",
      subtitle: "Satisfied Customers",
    },
    {
      icon: <FiTruck className="w-10 h-10 text-indigo-500" />,
      title: "7 Days",
      subtitle: "Easy Return Policy",
    },
    {
      icon: <FiCheckCircle className="w-10 h-10 text-indigo-500" />,
      title: "Safe & Secure",
      subtitle: "Transport",
    },
  ];

  return (
    <div className="flex justify-center sm:gap-8 sm:py-8 py-4 gap-4 bg-white">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center max-w-[120px]"
        >
          <div className="flex items-center justify-center sm:w-20 sm:h-20 w-10 h-10 bg-indigo-50 rounded-full p-2">
            {feature.icon}
          </div>
          <h3 className="mt-4 sm:text-lg text-sm font-bold text-gray-900">{feature.title}</h3>
          <p className="mt-2 sm:text-sm text-xs text-gray-700">{feature.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
