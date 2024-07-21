import { useState, useEffect } from "react";

const useToastTimer = (initialTime = 2) => {
  const [showToast, setShowToast] = useState(true);
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 0.04);
      }, 100);
      return () => clearInterval(timer);
    } else {
      setShowToast(false);
    }
  }, [timeLeft]);

  const handleClose = () => {
    setShowToast(false);
  };

  return { showToast, timeLeft, handleClose };
};

export default useToastTimer;