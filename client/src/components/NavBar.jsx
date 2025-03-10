import { useState, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { AuthContext } from "../contexts/authContext.js";
import UserAvatar from "./partials/UserAvatar.jsx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const location = useLocation();
  const getLinkClasses = (path) => {
    return location.pathname === path
      ? "text-white bg-primary-700 rounded md:bg-transparent md:text-primary-700 md:dark:text-primary-500"
      : "text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-700 md:dark:hover:text-primary-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";
  };

  const { isAuth, ...userData } = useContext(AuthContext);

  return (
    <nav className="mb-14 bg-white border-gray-200 dark:bg-gray-900 fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-1 rtl:space-x-reverse"
        >
          <img src="/Logo.png" className="h-12" alt="TradeVault Logo" />
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {isAuth ? (
            <UserAvatar userData={userData} />
          ) : (
            <Link to="/register">
              <button type="button" className="btn-primary">
                Get started
              </button>
            </Link>
          )}

          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className={`block py-2 px-3 md:p-0 ${getLinkClasses("/")}`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className={`block py-2 px-3 md:p-0 ${getLinkClasses(
                  "/about-us"
                )}`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/market-overview"
                className={`block py-2 px-3 md:p-0 ${getLinkClasses(
                  "/market-overview"
                )}`}
              >
                Market Overview
              </Link>
            </li>

            <li>
              <Link
                to="/events"
                className={`block py-2 px-3 md:p-0 ${getLinkClasses(
                  "/events"
                )}`}
              >
                Events
              </Link>
            </li>

            {!isAuth && (
              <li>
                <Link
                  to="/login"
                  className={`block py-2 px-3 md:p-0 ${getLinkClasses(
                    "/login"
                  )}`}
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
