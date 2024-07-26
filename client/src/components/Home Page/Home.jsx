import { useLocation, useNavigate  } from "react-router-dom";
import { useState,  useEffect } from "react";

import Hero from "./Hero.jsx";
import Market from "./Market.jsx";
import Feature from "./Feature.jsx";
import HowWorks from "./HowWorks.jsx";
import Customers from "./Customers.jsx";
import News from "./News.jsx";
// import BasicToast from '../Toast Components/BasicToast.jsx'
import SuccessToast from "../Toast Components/SuccessToast.jsx";
// import ErrorToast from '../Toast Components/ErrorToast.jsx'

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const [message, setMessage] = useState(location.state?.message || "");

  useEffect(() => {

    if (location.state?.message) {
      navigate(location.pathname, { replace: true, state: {} });
    }
    
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 5500); 

      return () => clearTimeout(timer);
    }
  }, [message, location, navigate]);

  return (
    <>
      <Hero />
      <Market />
      <Feature />
      <HowWorks />
      <Customers />
      <News />
      {message !=="" ? (<SuccessToast message={message}/>) : null}
    </>
  );
}
