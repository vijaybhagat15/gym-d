import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, clearError } from '../redux/slices/loginSlice';

function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Read login slice states
  const { isAuth, loading, error } = useSelector((state) => state.login);
  
  // Update input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission: dispatch loginUser thunk
  const handleSubmit = (e) => {
    e.preventDefault();
    // Optionally clear old errors
    dispatch(clearError());
    dispatch(loginUser(formData));
  };

  // When login is successful, navigate to the homepage
  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);

  return (
    <div>
      {/* Hero Section */}
      <div className='mx-auto flex text-center justify-center text-3xl border-2 border-indigo-200 bg-indigo-100'>Login Here</div>


      {/* Main Content */}
      <div className="h-full w-full flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center max-w-6xl w-full">
          {/* Login Image */}
          <div className="hidden lg:flex items-center justify-center">
            <img
              src="https://img.freepik.com/free-vector/gym-school-design-concept_1284-19997.jpg?uid=R183362148&ga=GA1.1.863027414.1736430393&semt=ais_hybrid"
              alt="Login"
              className="max-w-md max-h-md rounded-3xl"
            />
          </div>

          {/* Login Form */}
          <div className="flex flex-col items-center bg-black p-3 rounded-3xl shadow-lg border border-gray-500 mx-auto max-w-md w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-2xl font-bold text-center text-white font-serif">Login Here</h2>

              {/* Display error if any */}
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

              <button
                type="submit"
                className={`w-full py-2 rounded-xl bg-orange-400 text-black hover:bg-orange-600 transition font-sans ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'Login Now'}
              </button>

              <div className="flex items-center my-2">
                <div className="flex-grow h-px bg-gray-600"></div>
                <span className="px-2 text-gray-400 font-sans">OR</span>
                <div className="flex-grow h-px bg-gray-600"></div>
              </div>

              <button className="flex items-center justify-center w-full py-1.5 mb-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white transition text-sm font-sans">
                Login with Google
              </button>
              <button className="flex items-center justify-center w-full py-1.5 rounded-xl bg-blue-800 hover:bg-blue-900 text-white transition text-sm font-sans">
                Login with Facebook
              </button>
              <Link to="/SignUp">
                <div className="text-[10px] text-center m-auto py-3 text-sm underline text-blue-500">
                  New to GymBro? Create an account
                </div>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
