import { div } from "framer-motion/client"
import React from "react";
const AboutUs = () => {
  const customers = [
    { id: 1, image: "https://i.pravatar.cc/150?u=customer1", name: "Customer 1" },
    { id: 2, image: "https://i.pravatar.cc/150?u=customer2", name: "Customer 2" },
    { id: 3, image: "https://i.pravatar.cc/150?u=customer3", name: "Customer 3" },
    { id: 4, image: "https://i.pravatar.cc/150?u=customer4", name: "Customer 4" },
    { id: 5, image: "https://i.pravatar.cc/150?u=customer5", name: "Customer 5" },
    { id: 6, image: "https://i.pravatar.cc/150?u=customer6", name: "Customer 6" },
    { id: 7, image: "https://i.pravatar.cc/150?u=customer7", name: "Customer 7" },
    { id: 8, image: "https://i.pravatar.cc/150?u=customer8", name: "Customer 8" },
    { id: 9, image: "https://i.pravatar.cc/150?u=customer9", name: "Customer 9" },
    { id: 10, image: "https://i.pravatar.cc/150?u=customer10", name: "Customer 10" },
    { id: 11, image: "https://i.pravatar.cc/150?u=customer11", name: "Customer 11" },
    { id: 12, image: "https://i.pravatar.cc/150?u=customer12", name: "Customer 12" },
  ];
  return (
    <div className="bg-gray-300  text-black border-y-2 border-white">
    <div >
        {/* Hero Section */}
        <div className=" border-b-2 text-white "style={{ backgroundImage: "url('/images/bg.jpg')" }}>
          <div className="relative w-full h-[5vh] sm:h-[10vh] overflow-hidden">
            <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-30">
              <h1 className="text-xl sm:text-5xl font-bold  text-white font-serif">About Us</h1>
            </div>
          </div>
        </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-16 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image */}
          <div className="flex justify-center">
            <img
              src="https://as1.ftcdn.net/v2/jpg/02/64/23/78/1000_F_264237813_6Yn9JJkBZkuGP9gEgebCA5xVqhqz76v3.jpg"
              alt="Our Story"
              className="rounded-3xl shadow-lg"
            />
          </div>

          {/* Right Column: Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl  text-accent  font-serif">Our Journey</h2>
            <p className="mt-6  text-center md:text-left leading-relaxed">
            BarbellBase was founded with a single mission: to revolutionize the fitness
              industry by providing exceptional products and services. We aim to
              inspire individuals to achieve their fitness goals, supported by a
              vibrant community and cutting-edge solutions.
            </p>
            <p className="mt-4  text-center md:text-left leading-relaxed">
              From premium workout gear to expert guidance, BarbellBase is dedicated to
              enhancing your fitness journey. Join us in redefining what it means to
              lead a healthy, active lifestyle.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl  text-accent text-center font-serif">Our Mission</h2>
          <p className="mt-6  leading-relaxed text-center max-w-3xl mx-auto">
            At BarbellBase, we strive to empower individuals through fitness. Our mission
            is to provide top-quality products and expert support that help people
            reach their full potential, both physically and mentally.
          </p>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl  text-accent text-center mb-8 font-serif">Meet the Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Trainer 1 */}
              <div className=" bg-white font-bold text-xl p-1 rounded-lg shadow-lg border-2 border-transparent  hover:scale-105 transition-transform">
                <img src="https://as1.ftcdn.net/v2/jpg/02/64/23/78/1000_F_264237813_6Yn9JJkBZkuGP9gEgebCA5xVqhqz76v3.jpg" alt="Trainer 1" className="w-full h-64 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold mb-2  font-serif">John Doe</h3>
                <p className=" font-sans">Certified personal trainer with 5 years of experience in strength training.</p>
              </div>

              {/* Trainer 2 */}
              <div className=" bg-white font-bold text-xl p-1 rounded-lg shadow-lg border-2 border-transparent  hover:scale-105 transition-transform">
                <img
                  src="https://www.clientel3.com/wp-content/uploads/2022/06/BecomePersonalTrainer-1024x683-1.jpg"
                  alt="Trainer 2"
                  className="w-full h-64 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2  font-serif">Jane Smith</h3>
                <p className=" font-sans">Specialized in yoga and flexibility training to improve mobility.</p>
              </div>

              {/* Trainer 3 */}
              <div className="  bg-white  font-bold text-xl p-1 rounded-lg shadow-lg border-2 border-transparent  hover:scale-105 transition-transform">
                <img
                  src="https://az505806.vo.msecnd.net/cms/d58f1744-7071-415c-9d58-81f22ace4ad2/94e034fd-9635-4e7a-b591-57127fcfc4bc.jpg"
                  alt="Trainer 3"
                  className="w-full h-64 object-cover rounded-2xl mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 0  font-serif">Mark Lee</h3>
                <p className="font-sans">Certified nutritionist and strength training expert.</p>
              </div>
            </div>
            <div className="mt-16 bg-gradient-to-b  from-gray-600 to-transparent py-12 text-center rounded-lg border-2 border-white">
              <h2 className="text-3xl  font-serif">Join the BarbellBase Community</h2>
              <p className="mt-4 text-lg font-sans">
                Become a part of a vibrant fitness family and achieve your goals today!
              </p>
              <button className="mt-6 px-8 py-3 bg-white font-semibold rounded-lg shadow hover:bg-gray-100">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className=" py-10 font-sans border-b-2 border-white">
      {/* Section Title */}
      <h2 className="text-center text-2xl font-bold text-accent mb-8">
        OUR CUSTOMERS INCLUDE
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4 md:px-12 lg:px-20">
        {customers.map((customer) => (
          <div key={customer.id} className="flex flex-col items-center">
            <img
              src={customer.image}
              alt={customer.name}
              className="rounded-lg object-cover w-full h-full border border-gray-200 shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
