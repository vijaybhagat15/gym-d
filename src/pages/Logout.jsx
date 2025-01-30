import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('auth'); // Clear login state
    alert('You have been logged out.');
    navigate('/login'); // Redirect to login page
  }, [navigate]);

  return null; // No UI needed for logout
}
