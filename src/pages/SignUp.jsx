import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signupUser, clearMessages } from '../redux/slices/signupSlice';

export default function SignUp() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '', confirmPassword: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, success } = useSelector((state) => state.signup);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearMessages());

    if (formData.password !== formData.confirmPassword) {
      return dispatch(clearMessages()) || alert('Passwords do not match');
    }

    const user = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };

    dispatch(signupUser(user));
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        navigate('/login');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [success, navigate]);

  return (
    <>
      <div className='mx-auto flex text-center justify-center text-3xl border-2 border-indigo-200 bg-indigo-100'>SignUp</div>


      <div className="h-full w-full relative flex items-center justify-center p-2">
        <div className='lg:grid lg:grid-cols-2'>
          <div className="hidden lg:flex items-center justify-center">
            <img src="images/signup_vector.jpg" alt="Login" className="max-w-md max-h-md rounded-3xl" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center w-full max-w-6xl px-4">
            <div className="w-full bg-gray-900 p-4 px-14 rounded-3xl shadow-lg border border-gray-500 mx-auto">
              <form onSubmit={handleSubmit} className="space-y-3">
                <h2 className="text-xl font-bold text-center text-white">Sign Up Here</h2>

                {error && <div className="text-red-400 text-center">{error}</div>}
                {success && <div className="text-green-400 text-center">{success}</div>}

                {['username', 'email', 'password', 'confirmPassword'].map((field) => (
                  <div key={field}>
                    <label htmlFor={field} className="block text-gray-300 font-medium capitalize">
                      {field.replace(/([A-Z])/g, ' $1')}
                    </label>
                    <input
                      type={field.includes('password') ? 'password' : field === 'email' ? 'email' : 'text'}
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleInputChange}
                      className="w-full px-3 py-1.5 mt-1 bg-gray-700 text-white rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
                      placeholder={`Enter your ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
                      required
                    />
                  </div>
                ))}

                <button
                  type="submit"
                  className={`w-full py-2 rounded-xl bg-indigo-400 text-black hover:bg-indigo-600 transition ${
                    loading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={loading}
                >
                  {loading ? 'Signing Up...' : 'Sign Up Now'}
                </button>

                <div className="flex items-center my-2">
                  <div className="flex-grow h-px bg-gray-600"></div>
                  <span className="px-2 text-gray-400">OR</span>
                  <div className="flex-grow h-px bg-gray-600"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
