import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '', confirmPassword: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Save user data to localStorage (or backend in a real app)
      const user = {
        username: formData.username,
        email: formData.email,
        password: formData.password, // In a real app, this should be hashed
      };
      localStorage.setItem('user', JSON.stringify(user));

      setSuccess('Sign Up successful! Redirecting to login...');
      setLoading(false);

      setTimeout(() => {
        navigate('/login'); // Redirect to login page
      }, 2000);
    }, 1000);
  };

  return (
    <>
        <div className=" border-b-2 text-white "style={{ backgroundImage: "url('/images/bg.jpg')" }}>
    <div className="relative w-full h-[5vh] sm:h-[20vh] overflow-hidden">
      <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-30">
        <h1 className="text-xl sm:text-5xl font-bold font-serif text-white">Sign Up</h1>
      </div>
    </div>
  </div>
    <div className="h-full w-full relative flex items-center justify-center bg-gray-300">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="\videos\your-background-video.mp4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='lg:grid lg:grid-cols-2'>
      <div className="hidden lg:flex items-center justify-center  ">
          <img
            src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?ga=GA1.1.863027414.1736430393&semt=ais_hybrid"
            alt="Login"
            className="max-w-md max-h-md rounded-3xl"
          />
        </div>
      {/* Sign Up Section */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center w-full max-w-6xl px-4">
        <div className="w-full  bg-black  p-4 rounded-3xl shadow-lg border border-gray-500 mx-auto">
          <form onSubmit={handleSubmit} className="space-y-3">
            <h2 className="text-xl font-bold text-center text-white font-serif">Sign Up Here</h2>

            {/* Error or Success Messages */}
            {error && <div className="text-red-400 text-center font-sans">{error}</div>}
            {success && <div className="text-green-400 text-center font-sans">{success}</div>}

            {/* Username Input */}
            <div>
              <label htmlFor="username" className="block text-gray-300 font-medium font-sans">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full px-3 py-1.5 mt-1 bg-gray-700 text-white rounded-xl focus:ring-2 focus:ring-orange-400 outline-none font-sans"
                placeholder="Enter your username"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-gray-300 font-medium font-sans">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-1.5 mt-1 bg-gray-700 text-white rounded-xl focus:ring-2 focus:ring-orange-400 outline-none font-sans"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-gray-300 font-medium font-sans">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-3 py-1.5 mt-1 bg-gray-700 text-white rounded-xl focus:ring-2 focus:ring-orange-400 outline-none font-sans"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Confirm Password Input */}
            <div>
              <label htmlFor="confirmPassword" className="block text-gray-300 font-medium font-sans">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full px-3 py-1.5 mt-1 bg-gray-700 text-white rounded-xl focus:ring-2 focus:ring-orange-400 outline-none font-sans"
                placeholder="Confirm your password"
                required
              />
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className={`w-full py-2 rounded-xl bg-orange-400 text-black hover:bg-orange-600 transition font-sans ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={loading}
            >
              {loading ? 'Signing Up...' : 'Sign Up Now'}
            </button>

            {/* Divider */}
            <div className="flex items-center my-2">
              <div className="flex-grow h-px bg-gray-600"></div>
              <span className="px-2 text-gray-400 font-sans">OR</span>
              <div className="flex-grow h-px bg-gray-600"></div>
            </div>

            {/* Social Buttons */}
            <button className="flex items-center justify-center w-full py-1.5 mb-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white transition text-sm font-sans">
              Sign Up with Google
            </button>
            <button className="flex items-center justify-center w-full py-1.5 rounded-xl bg-blue-800 hover:bg-blue-900 text-white transition text-sm font-sans">
              Sign Up with Facebook
            </button>
          </form>
        </div>
      </div>
      </div>
    </div>
    </>
  );
}
