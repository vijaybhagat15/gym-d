import AboutHorizontalscroll from "../components/AboutHorizontalscroll";

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
    <div className="text-black border-y-2 border-white">
      {/* About Header */}
      <div className="mx-auto flex justify-center text-center text-2xl sm:text-3xl font-bold border-2 border-indigo-200 bg-indigo-100 py-4 px-2">
        About Us
      </div>

      <AboutHorizontalscroll />

      {/* About Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Our Journey Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-center md:text-left">Our Journey</h2>
            <p className="mt-4 text-sm sm:text-base text-center md:text-left leading-relaxed">
              BarbellBase was founded with a single mission: to revolutionize the fitness
              industry by providing exceptional products and services. We aim to
              inspire individuals to achieve their fitness goals, supported by a
              vibrant community and cutting-edge solutions.
            </p>
            <p className="mt-4 text-sm sm:text-base text-center md:text-left leading-relaxed">
              From premium workout gear to expert guidance, BarbellBase is dedicated to
              enhancing your fitness journey. Join us in redefining what it means to
              lead a healthy, active lifestyle.
            </p>
          </div>
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="images/about.avif"
              alt="Our Story"
              className="w-full max-w-md rounded-3xl shadow-lg border border-indigo-400"
            />
          </div>
        </div>

        {/* Our Mission */}
        <div className="mt-16 text-center px-2">
          <h2 className="text-xl sm:text-2xl font-semibold text-accent">Our Mission</h2>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            At BarbellBase, we strive to empower individuals through fitness. Our mission
            is to provide top-quality products and expert support that help people
            reach their full potential, both physically and mentally.
          </p>
        </div>

        {/* Meet the Team */}
        <div className="mt-16">
          <h2 className="text-xl sm:text-2xl font-semibold text-center text-accent mb-8">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {/* Team Member */}
            {[
              {
                name: "John Doe",
                image: "https://as1.ftcdn.net/v2/jpg/02/64/23/78/1000_F_264237813_6Yn9JJkBZkuGP9gEgebCA5xVqhqz76v3.jpg",
                role: "Certified personal trainer with 5 years of experience in strength training.",
              },
              {
                name: "Jane Smith",
                image: "https://www.clientel3.com/wp-content/uploads/2022/06/BecomePersonalTrainer-1024x683-1.jpg",
                role: "Specialized in yoga and flexibility training to improve mobility.",
              },
              {
                name: "Mark Lee",
                image: "https://oxbridgehomelearning.uk/wp-content/uploads/2021/06/clipboard-smiling.jpg",
                role: "Certified nutritionist and strength training expert.",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition-transform"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-md mb-4 border-2 border-indigo-400"
                />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-sm sm:text-base">{member.role}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-b from-indigo-400 to-transparent py-12 text-center rounded-lg border-2 border-white px-4">
            <h2 className="text-2xl sm:text-3xl font-bold">Join the BarbellBase Community</h2>
            <p className="mt-4 text-base sm:text-lg">
              Become a part of a vibrant fitness family and achieve your goals today!
            </p>
            <button className="mt-6 px-6 py-2 sm:px-8 sm:py-3 bg-white font-semibold rounded-lg shadow hover:bg-gray-100 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Customers Section */}
      <div className="py-10 border-t-2 border-white px-4 sm:px-6">
        <h2 className="text-center text-xl sm:text-2xl font-bold text-accent mb-8">
          OUR CUSTOMERS INCLUDE
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {customers.map((customer) => (
            <div key={customer.id} className="flex flex-col items-center">
              <img
                src={customer.image}
                alt={customer.name}
                className="rounded-lg object-cover w-full h-auto max-w-[100px] sm:max-w-[120px] shadow-lg border"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
