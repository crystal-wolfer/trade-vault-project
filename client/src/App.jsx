import "./App.css";

import { Routes, Route } from "react-router-dom";
import { AuthContext } from "./contexts/authContext.js";
import { useState, useEffect } from "react";

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
import AuthGuard from "./util/AuthGuard.jsx";
import GuestGuard from "./util/GuestGuard.jsx";
import Events from "./components/Home Page/Events.jsx";



function App() {
  const [authState, setAuthState] = useState({});

  const updateAuthState = (state) => {
    setAuthState(state);
  }

  const contextData = {
    email: authState.email,
    accessToken: authState.accessToken,
    firstName: authState.firstName,
    isAuth: !!authState.email,
    _id: authState._id,
    avatar: authState.avatar,
    updateAuthState,
  }

   useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      updateAuthState(foundUser);
    }
  }, []);
  

  return (
    <AuthContext.Provider value = {contextData}>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market-overview" element={<MarketOverview />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/my-profile" element={<AuthGuard> <MyProfile /> </AuthGuard>} />
          <Route path="/login" element={<GuestGuard> <Login /> </GuestGuard>} />
          <Route path="/register" element={<GuestGuard> <Register /> </GuestGuard>} />
          <Route path="/market-overview/trade/:id" element={<AuthGuard> <CoinDetails /> </AuthGuard>  } />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
