import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useMessage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [message, setMessage] = useState(location.state?.message || '');

  useEffect(() => {
    if (location.state?.message) {
      navigate(location.pathname, { replace: true, state: {} });
    }

    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
      }, 5500); // Adjust the time as needed

      return () => clearTimeout(timer);
    }
  }, [message, location, navigate]);

  return message;
};

export default useMessage;