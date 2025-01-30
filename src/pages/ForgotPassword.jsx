import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    setTimeout(() => {
      // Simulate password reset logic
      if (email === 'test@example.com') { // Replace with actual validation logic
        setSuccess('Password reset link sent to your email!');
        setLoading(false);
      } else {
        setError('Email not found. Please try again.');
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="h-screen w-screen relative flex items-center justify-center font-sans">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src="\videos\your-background-video.mp4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Forgot Password Section */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-6xl px-4">
        <div className="w-full max-w-sm bg-black p-6 rounded-lg shadow-lg border border-gray-500 mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-bold text-center text-white font-serif">Forgot Password</h2>

            {/* Error or Success */}
            {error && <div className="text-red-400 text-center font-sans">{error}</div>}
            {success && <div className="text-green-400 text-center font-sans">{success}</div>}

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-gray-300 font-medium font-sans">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleInputChange}
                className="w-full px-3 py-1.5 mt-1 bg-gray-700 text-white rounded-xl focus:ring-2 focus:ring-orange-400 outline-none font-sans"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full py-2 rounded-xl bg-orange-400 text-black hover:bg-orange-600 transition font-sans ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Reset Link'}
            </button>

            {/* Back to Login Link */}
            <div className="text-center mt-4">
              <button
                type="button"
                onClick={() => navigate('/login')}
                className="text-blue-400 underline hover:text-blue-500 transition font-sans"
              >
                Back to Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
