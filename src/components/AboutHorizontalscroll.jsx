
// Replace products array with human images
const people = [
  { id: 1, name: "Alex", image: "https://randomuser.me/api/portraits/men/1.jpg" },
  { id: 2, name: "Sophia", image: "https://randomuser.me/api/portraits/women/2.jpg" },
  { id: 3, name: "James", image: "https://randomuser.me/api/portraits/men/3.jpg" },
  { id: 4, name: "Emma", image: "https://randomuser.me/api/portraits/women/4.jpg" },
  { id: 5, name: "Michael", image: "https://randomuser.me/api/portraits/men/5.jpg" },
  { id: 1, name: "Alex", image: "https://randomuser.me/api/portraits/men/1.jpg" },
  { id: 2, name: "Sophia", image: "https://randomuser.me/api/portraits/women/2.jpg" },
  { id: 3, name: "James", image: "https://randomuser.me/api/portraits/men/3.jpg" },
  { id: 4, name: "Emma", image: "https://randomuser.me/api/portraits/women/4.jpg" },
  { id: 5, name: "Michael", image: "https://randomuser.me/api/portraits/men/5.jpg" },
  { id: 1, name: "Alex", image: "https://randomuser.me/api/portraits/men/1.jpg" },
  { id: 2, name: "Sophia", image: "https://randomuser.me/api/portraits/women/2.jpg" },
  { id: 3, name: "James", image: "https://randomuser.me/api/portraits/men/3.jpg" },
  { id: 4, name: "Emma", image: "https://randomuser.me/api/portraits/women/4.jpg" },
  { id: 5, name: "Michael", image: "https://randomuser.me/api/portraits/men/5.jpg" },
  { id: 1, name: "Alex", image: "https://randomuser.me/api/portraits/men/1.jpg" },
  { id: 2, name: "Sophia", image: "https://randomuser.me/api/portraits/women/2.jpg" },
  { id: 3, name: "James", image: "https://randomuser.me/api/portraits/men/3.jpg" },
  { id: 4, name: "Emma", image: "https://randomuser.me/api/portraits/women/4.jpg" },
  { id: 5, name: "Michael", image: "https://randomuser.me/api/portraits/men/5.jpg" },
  { id: 1, name: "Alex", image: "https://randomuser.me/api/portraits/men/1.jpg" },
  { id: 2, name: "Sophia", image: "https://randomuser.me/api/portraits/women/2.jpg" },
  { id: 3, name: "James", image: "https://randomuser.me/api/portraits/men/3.jpg" },
  { id: 4, name: "Emma", image: "https://randomuser.me/api/portraits/women/4.jpg" },
  { id: 5, name: "Michael", image: "https://randomuser.me/api/portraits/men/5.jpg" },
  { id: 1, name: "Alex", image: "https://randomuser.me/api/portraits/men/1.jpg" },
  { id: 2, name: "Sophia", image: "https://randomuser.me/api/portraits/women/2.jpg" },
  { id: 3, name: "James", image: "https://randomuser.me/api/portraits/men/3.jpg" },
  { id: 4, name: "Emma", image: "https://randomuser.me/api/portraits/women/4.jpg" },
  { id: 5, name: "Michael", image: "https://randomuser.me/api/portraits/men/5.jpg" },
  { id: 1, name: "Alex", image: "https://randomuser.me/api/portraits/men/1.jpg" },
  { id: 2, name: "Sophia", image: "https://randomuser.me/api/portraits/women/2.jpg" },
  { id: 3, name: "James", image: "https://randomuser.me/api/portraits/men/3.jpg" },
  { id: 4, name: "Emma", image: "https://randomuser.me/api/portraits/women/4.jpg" },
  { id: 5, name: "Michael", image: "https://randomuser.me/api/portraits/men/5.jpg" },
  { id: 1, name: "Alex", image: "https://randomuser.me/api/portraits/men/1.jpg" },
  { id: 2, name: "Sophia", image: "https://randomuser.me/api/portraits/women/2.jpg" },
  { id: 3, name: "James", image: "https://randomuser.me/api/portraits/men/3.jpg" },
  { id: 4, name: "Emma", image: "https://randomuser.me/api/portraits/women/4.jpg" },
  { id: 5, name: "Michael", image: "https://randomuser.me/api/portraits/men/5.jpg" },
];

const AboutHorizontalscroll = () => {
  return (
    <div className="flex justify-center bg-gray-200">
      <div className="flex overflow-x-auto space-x-4 p-1 scrollbar-hide scroll-smooth">
        {people.map((person) => (
          <div key={person.id} className="flex flex-col items-center flex-shrink-0 hover:scale-110 transform transition duration-300">
            {/* Gradient Border */}
            <div
              className="sm:w-[90px] sm:h-[90px] w-[50px] h-[50px] rounded-full bg-gradient-to-r from-pink-500 via-orange-500 to-purple-500 p-[2px]"
            >
              {/* Inner Circle */}
              <div className="rounded-full bg-white overflow-hidden w-full h-full z-0">
                <img
                  src={person.image} // Using human images
                  alt={person.name} // Person name as alt text
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            {/* Title */}
            <p className="text-sm mt-1 text-gray-900">{person.name}</p> {/* Display person name */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutHorizontalscroll;
