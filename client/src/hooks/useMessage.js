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
      }, 3000); 

      return () => clearTimeout(timer);
    }
  }, [message, location, navigate]);

  return [message, setMessage];
};

export default useMessage;