import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices/loginSlice';
import { setProfileData, setEditable, setImage } from '../redux/slices/profileslice';

export default function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get registered user data from signup slice
  const registeredUser = useSelector((state) => state.signup.user);
  // Get profile-specific state from profile slice
  const profile = useSelector((state) => state.profile);
  // profile: { formData, editable, image }

  // On mount, if a registered user exists, populate the profile slice
  useEffect(() => {
    if (registeredUser) {
      dispatch(setProfileData(registeredUser));
      if (registeredUser.profilePicture) {
        dispatch(setImage(registeredUser.profilePicture));
      }
    }
  }, [registeredUser, dispatch]);

  // Logout: Dispatch logout action from login slice instead of using localStorage
  const handleLogout = () => {
    const confirmation = window.confirm('Are you sure you want to log out?');
    if (confirmation) {
      dispatch(logout());
      alert('You have been logged out');
      navigate('/');
    }
  };

  // Update profile form data when an input changes (updates profile slice)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setProfileData({ [name]: value }));
  };

  // Handle changes to the profile image
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
          dispatch(setImage(resizedImage));
          dispatch(setProfileData({ profilePicture: resizedImage }));
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  };

  // When the profile is updated, toggle out of edit mode
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    dispatch(setEditable(false));
    // Here you could also dispatch an async thunk to update the profile on a backend
  };

  return (
    <div>
              <div className='mx-auto flex text-center justify-center text-3xl border-2 border-indigo-200 bg-indigo-100'>Your Profile</div>

      <div className="min-h-screen font-sans flex justify-center py-5 text-black">
        <div className="max-w-5xl w-full bg-white shadow-xl rounded-2xl overflow-hidden border-[1px] border-indigo-500 sm:flex h-min">
          <div className="sm:w-1/3 flex justify-center sm:mb-auto m-2">
            <div className="w-40 h-40 sm:w-full sm:h-full overflow-hidden">
              <img src={profile.image} alt="Profile" className="w-full h-full object-contain rounded-2xl border-[1px] border-indigo-500" />
            </div>
          </div>
          <div className="sm:w-2/3 p-6 max-w-3xl text-gray-900">
            {profile.editable ? (
              <form onSubmit={handleUpdateProfile} className="space-y-4">
                {['username', 'email', 'contactNumber', 'address'].map((field) => (
                  <div key={field}>
                    <label htmlFor={field} className="block text-gray-900 font-medium capitalize font-serif">
                      {field.replace('Number', ' Number')}
                    </label>
                    <input
                      id={field}
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      value={profile.formData[field] || ''}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="profilePicture" className="block text-gray-900 font-medium font-serif">
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
                  className="px-3 py-2 m-4 text-white font-bold bg-green-600 rounded-lg hover:bg-white hover:text-green-600 transition-all duration-500 border-2 border-gray-300 font-sans"
                >
                  Save Changes
                </button>
              </form>
            ) : (
              <>
                <h2 className="text-2xl font-semibold mb-4 font-serif">Account Details</h2>
                {['username', 'email', 'contactNumber', 'address'].map((field) => (
                  <div key={field} className="mb-4">
                    <label className="block font-medium text-gray-900 capitalize font-serif">
                      {field.replace('Number', ' Number')}
                    </label>
                    <p className="bg-gray-200 px-4 py-2 rounded-lg">{profile.formData[field] || 'N/A'}</p>
                  </div>
                ))}
                <button
                  onClick={() => dispatch(setEditable(true))}
                  className="px-3 py-2 text-white font-bold bg-orange-500 rounded-lg hover:bg-white hover:text-orange-500 transition-all duration-500 border-2 border-gray-300 font-sans"
                >
                  Edit Profile
                </button>
              </>
            )}
            <button
              onClick={handleLogout}
              className="px-3 mt-4 mx-5 py-2 text-white font-bold bg-red-500 rounded-lg hover:bg-white hover:text-red-500 transition-all duration-500 border-2 border-gray-300 font-sans"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
