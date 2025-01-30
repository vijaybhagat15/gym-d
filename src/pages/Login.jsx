import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Moon() {
  const [formData, setFormData] = useState({ username: '', password: '' });
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
    setLoading(true);

    setTimeout(() => {
      const storedUser = JSON.parse(localStorage.getItem('user'));

      if (
        storedUser &&
        storedUser.username === formData.username &&
        storedUser.password === formData.password
      ) {
        localStorage.setItem('auth', 'true');
        setSuccess('Login successful!');
        setLoading(false);
        navigate('/'); // Redirect to homepage or another page
      } else {
        setError('Invalid username or password');
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <>              {/* Hero Section */}
        <div className=" border-b-2 text-white "style={{ backgroundImage: "url('/images/bg.jpg')" }}>
<div className="relative w-full h-[5vh] sm:h-[20vh] overflow-hidden">
  <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-30">
    <h1 className="text-xl sm:text-5xl font-bold font-serif text-white">Login Page</h1>
  </div>
</div>
</div>
    <div className="h-full w-full flex items-center justify-center bg-gray-300">

      {/* Main container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center max-w-6xl w-full bg-gray-300">
        {/* Login Image */}
        <div className="hidden lg:flex items-center justify-center  ">
          <img
            src="https://static.vecteezy.com/system/resources/previews/002/710/265/original/profile-login-style-vector.jpg"
            alt="Login"
            className="max-w-md max-h-md rounded-3xl"
          />
        </div>

        {/* Login Section */}
        <div className="flex flex-col items-center bg-black p-3 rounded-3xl shadow-lg border border-gray-500 mx-auto max-w-md w-full">
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-bold text-center text-white font-serif">Login Here</h2>

            {/* Error or Success */}
            {error && (
              <div className="text-red-400 text-center space-y-2">
                <div className="font-sans">{error}</div>
                <button
                  type="button"
                  onClick={() => navigate('/forgot-password')}
                  className="text-blue-400 underline hover:text-blue-500 transition font-sans"
                >
                  Forgot Password?
                </button>
              </div>
            )}
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
                className="w-full px-3 py-2 mt-1 bg-gray-700 text-white rounded-xl focus:ring-2 focus:ring-orange-400 outline-none font-sans"
                placeholder="Enter your username"
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
                className="w-full px-3 py-2 mt-1 bg-gray-700 text-white rounded-xl focus:ring-2 focus:ring-orange-400 outline-none font-sans"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className={`w-full py-2 rounded-xl bg-orange-400 text-black hover:bg-orange-600 transition font-sans ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login Now'}
            </button>

            {/* Divider */}
            <div className="flex items-center my-2">
              <div className="flex-grow h-px bg-gray-600"></div>
              <span className="px-2 text-gray-400 font-sans">OR</span>
              <div className="flex-grow h-px bg-gray-600"></div>
            </div>

            {/* Social Buttons */}
            <button className="flex items-center justify-center w-full py-1.5 mb-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white transition text-sm font-sans">
              Login with Google
            </button>
            <button className="flex items-center justify-center w-full py-1.5 rounded-xl bg-blue-800 hover:bg-blue-900 text-white transition text-sm font-sans">
              Login with Facebook
            </button>
            <Link to="/SignUp">
              <div className="text-[10px] text-center m-auto py-3 text-sm underline text-blue-500">New to GymBro? Create an account</div>
            </Link>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default Moon;
