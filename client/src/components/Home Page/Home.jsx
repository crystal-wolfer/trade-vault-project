import useMessageHandler from "../../hooks/useMessageHandler.js";

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
  const message = useMessageHandler();

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
