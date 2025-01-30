import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')) || {});
  const [editable, setEditable] = useState(false);
  const [formData, setFormData] = useState({ ...user });
  const [image, setImage] = useState(user.profilePicture || '/images/default-profile.jpg');
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(formData));
  }, [formData]);

  const handleLogout = () => {
    const confirmation = window.confirm('Are you sure you want to log out?');
    if (confirmation) {
      localStorage.removeItem('auth');
      alert('You have been logged out');
      navigate('/');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
      if (file.size > MAX_FILE_SIZE) {
        alert('File size exceeds the 5MB limit. Please choose a smaller file.');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const img = new Image();
        img.onload = () => {
          const MAX_DIMENSION = 1024;
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');

          let width = img.width;
          let height = img.height;

          if (width > height && width > MAX_DIMENSION) {
            height = (height * MAX_DIMENSION) / width;
            width = MAX_DIMENSION;
          } else if (height > MAX_DIMENSION) {
            width = (width * MAX_DIMENSION) / height;
            height = MAX_DIMENSION;
          }

          canvas.width = width;
          canvas.height = height;

          ctx.drawImage(img, 0, 0, width, height);

          const resizedImage = canvas.toDataURL('image/jpeg', 0.8);
          setImage(resizedImage);
          setFormData((prev) => ({ ...prev, profilePicture: resizedImage }));
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    setEditable(false);
  };

  return (
  <>
         
        <div className=" border-b-2 text-white "style={{ backgroundImage: "url('/images/bg.jpg')" }}>
    <div className="relative w-full h-[5vh] sm:h-[10vh] overflow-hidden">
      <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-30">
        <h1 className="text-xl sm:text-5xl font-bold font-serif text-white">Your Account</h1>
      </div>
    </div>
  </div>
    <div className="min-h-screen  font-sans flex  justify-center py-5 text-black">
      <div className="max-w-5xl w-full bg-white shadow-xl rounded-lg overflow-hidden border-4 border-gray-400 sm:flex h-min">
        <div className="sm:w-1/3  flex  justify-center sm:mb-auto m-2">
          <div className="w-40 h-40 sm:w-full sm:h-full  overflow-hidden">
            <img src={image} alt="Profile" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="sm:w-2/3 p-6 max-w-3xl text-gray-900">
          {editable ? (
            <form onSubmit={handleUpdateProfile} className="space-y-4">
              {['username', 'email', 'contactNumber', 'address'].map((field) => (
                <div key={field}>
                  <label
                    htmlFor={field}
                    className="block text-gray-900 font-medium capitalize font-serif"
                  >
                    {field.replace('Number', ' Number')}
                  </label>
                  <input
                    id={field}
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    value={formData[field] || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>
              ))}
              <div>
                <label
                  htmlFor="profilePicture"
                  className="block text-gray-900 font-medium font-serif"
                >
                  Profile Picture
                </label>
                <input
                  id="profilePicture"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full px-4 py-2 bg-gray-200 rounded-lg"
                />
              </div>
              <button
                type="submit"
                className="px-3 py-2 m-4 text-white font-bold  bg-green-600  rounded-lg hover:bg-white hover:text-green-600 transition-all duration-500 border-2 border-gray-300 font-sans"
              >
                Save Changes
              </button>
            </form>
          ) : (
            <>
              <h2 className="text-2xl font-semibold mb-4 font-serif">
                Account Details
              </h2>
              {['username', 'email', 'contactNumber', 'address'].map((field) => (
                <div key={field} className="mb-4">
                  <label className="block font-medium text-gray-900 capitalize font-serif">
                    {field.replace('Number', ' Number')}
                  </label>
                  <p className="bg-gray-200 px-4 py-2 rounded-lg">{formData[field] || 'N/A'}</p>
                </div>
              ))}
              <button
                onClick={() => setEditable(true)}
                className="px-3 py-2  text-white font-bold  bg-orange-500  rounded-lg hover:bg-white hover:text-orange-500 transition-all duration-500 border-2 border-gray-300 font-sans"
              >
                Edit Profile
              </button>
            </>
          )}
          <button
            onClick={handleLogout}
            className="px-3 mt-4 mx-5 py-2  text-white font-bold  bg-red-500  rounded-lg hover:bg-white hover:text-red-500 transition-all duration-500 border-2 border-gray-300 font-sans"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
