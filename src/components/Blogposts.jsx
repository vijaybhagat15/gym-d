const BlogPosts = () => {
  const posts = [
    {
      title: 'Treadmills for Home vs. Treadmills for Gym: Which One to Choose?',
      date: 'January 8, 2025',
      author: 'vijay',
      video: '/videos/v1.mp4',
    },
    {
      title: 'How To Build Muscle With A Dumbbell Set: Effective Tips',
      date: 'July 31, 2024',
      author: 'vijay',
      video: '/videos/v2.mp4',
    },
    {
      title: 'The Ultimate Guide to Choosing the Perfect Spin Bike',
      date: 'July 31, 2024',
      author: 'vijay',
      video: '/videos/v3.mp4',
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-10">Blog Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-lg group"
          >
            {/* Video with auto-start, loop, and no audio */}
            <div className="aspect-video w-full overflow-hidden">
              <video
                src={post.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              ></video>
            </div>

            {/* Gradient and text overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-300"></div>

            <div className="absolute bottom-0 p-4 text-white group-hover:opacity-0 transition-opacity duration-300">
              <h3 className="text-lg font-bold">{post.title}</h3>
              <div className="flex flex-wrap text-sm mt-1">
                <span className="mr-4">📅 {post.date}</span>
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
