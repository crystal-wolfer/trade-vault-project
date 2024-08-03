import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/authContext.js";
import * as authAPI from "../../API/authAPI.js";

export default function UserAvatar({ userData }) {
  const [showInfo, setShowInfo] = useState(false);

  const infoHandler = () => {
    setShowInfo(!showInfo);
  };

  const { updateAuthState } = useContext(AuthContext);
  const navigate = useNavigate();

  const { firstName, lastName, email, avatar, ...oldStorage } = JSON.parse(
    localStorage.getItem("user")
  );

  const logoutHandler = async () => {
    const logout = await authAPI.logout();
    updateAuthState({});
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="relative inline-block">
      <img
        onClick={infoHandler}
        id="avatarButton"
        type="button"
        data-dropdown-toggle="userDropdown"
        data-dropdown-placement="bottom-start"
        className="w-8 h-8 rounded-full cursor-pointer"
        src={avatar}
        alt="User dropdown"
      />

      {showInfo && (
        <div
          id="userDropdown"
          className="z-10 absolute right-0 sm:left-1/2 sm:transform sm:-translate-x-1/2 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600 sm:w-60"
        >
          <div className="px-4 py-3 text-sm text-gray-500 dark:text-white">
            <div>Welcome back, {firstName}!</div>
          </div>

          <div className="py-1">
            <Link
              to="/my-profile"
              className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              onClick={infoHandler}
            >
              My Profile
            </Link>
          </div>

          <div className="py-1">
            <a
              onClick={logoutHandler}
              className="block px-4 py-2 text-sm text-primary-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
