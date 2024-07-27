import "./App.css";

import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./contexts/authContext.jsx";

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

function App() {

  const [authState, setAuthState] = useState({});

  const updateAuthState = (state) => {
    setAuthState(state);
  }

  const contextData = {
    email: authState.email,
    accessToken: authState.accessToken,
    firstName: authState.firstName,
    isAuth: !!authState.email, // TODO: update to check for ownerId
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
    <AuthContextProvider>
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
    </AuthContextProvider>
  );
}

export default App;
