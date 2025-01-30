import React from 'react';

const BlogPosts = () => {
  const posts = [
    {
      title: 'Treadmills for Home vs. Treadmills for Gym: Which One to Choose?',
      date: 'January 8, 2025',
      author: 'vijay',
      video: '/videos/v1.mp4', // Replace with your video URL
    },
    {
      title: 'How To Build Muscle With A Dumbbell Set: Effective Tips',
      date: 'July 31, 2024',
      author: 'vijay',
      video: '/videos/v2.mp4', // Replace with your video URL
    },
    {
      title: 'The Ultimate Guide to Choosing the Perfect Spin Bike',
      date: 'July 31, 2024',
      author: 'vijay',
      video: '/videos/v3.mp4', // Replace with your video URL
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-6">Blog posts</h2>
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg group">
            {/* Video with auto-start, loop, and no audio */}
            <video
              src={post.video}
              autoPlay
              loop
              muted
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
            ></video>

            {/* Text hidden on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 group-hover:opacity-0 transition-opacity"></div>
            <div className="absolute bottom-0 p-4 text-white group-hover:opacity-0 transition-opacity">
              <h3 className="text-lg font-bold">{post.title}</h3>
              <div className="flex items-center text-sm mt-2">
                <span className="mr-2">📅 {post.date}</span>
                <span>👤 {post.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPosts;
