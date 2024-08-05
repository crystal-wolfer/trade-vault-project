import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Hero from "./Hero.jsx";
import Market from "./Market.jsx";
import Feature from "./Feature.jsx";
import HowWorks from "./HowWorks.jsx";
import Customers from "./Customers.jsx";
import News from "./News.jsx";
import SuccessToast from "../Toast Components/SuccessToast.jsx";

export default function Home() {
  const location = useLocation();
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (location.state && location.state.message) {
      setMessage(location.state.message);
      window.history.replaceState({}, document.title); // clearing the state from the history to prevent showing the toast again
    }
  }, [location.state]);


  return (
    <>
      <Hero />
      <Market />
      <Feature />
      <HowWorks />
      <Customers />
      <News />
      {message !== "" && <SuccessToast message={message} />}
    </>
  );
}
