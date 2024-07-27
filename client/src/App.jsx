import "./App.css";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home Page/Home.jsx";
import Footer from "./components/Footer.jsx";
import MarketOverview from "./components/Market Overview Page/MarketOverview.jsx";
import About from "./components/Static Pages/About.jsx";
import MyProfile from "./components/My Profile Page/MyProfile.jsx";
import Login from "./components/Login Register Page/Login.jsx";
import Register from "./components/Login Register Page/Register.jsx";
import CoinDetails from "./components/Market Overview Page/CoinDetails.jsx";
import NotFound from "./components/Static Pages/404.jsx";
import { AuthContext } from "./contexts/authContext.js";

function App() {
  const [authState, setAuthState] = useState({});

  const updateAuthState = (state) => {
    setAuthState(state);
  }

  const contextData = {
    email: authState.email,
    accessToken: authState.accessToken,
    firstName: authState.firstName,
    userId: authState._id,
    isAuth: !!authState.email, // TODO: update to check for ownerId
    updateAuthState,
  }

  return (
    <AuthContext.Provider value={contextData}>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market-overview" element={<MarketOverview />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/market-overview/trade/:id" element={<CoinDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
