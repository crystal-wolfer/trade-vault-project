import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useMessage = (input) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [message, setMessage] = useState(location.state?.message || input || "");

  useEffect(() => {
    if (location.state?.message) {
      navigate(location.pathname, { replace: true, state: {} });
    }

    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
      }, 5500); 

      return () => clearTimeout(timer);
    }
  }, [message, location, navigate]);

  return message;
};

export default useMessage;