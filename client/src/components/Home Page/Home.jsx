import useMessage from "../../hooks/useMessage.js";
import * as eventsAPI from "../../API/eventsAPI.js";

import Hero from "./Hero.jsx";
import Market from "./Market.jsx";
import Feature from "./Feature.jsx";
import HowWorks from "./HowWorks.jsx";
import Customers from "./Customers.jsx";
import News from "./News.jsx";
import SuccessToast from "../Toast Components/SuccessToast.jsx";

export default function Home() {
  const [message, setMessage] = useMessage();

  eventsAPI.getEvents()

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
