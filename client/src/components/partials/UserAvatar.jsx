import { useState } from "react";
import { Link } from "react-router-dom";

export default function UserAvatar({ userData }) {
  const [showInfo, setShowInfo] = useState(false);

  const infoHandler = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="relative inline-block">
      <img
        onClick={infoHandler}
        id="avatarButton"
        type="button"
        data-dropdown-toggle="userDropdown"
        data-dropdown-placement="bottom-start"
        className="w-6 h-6 rounded-full cursor-pointer"
        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        alt="User dropdown"
      />

      {showInfo && (
        <div
          id="userDropdown"
          className="z-10 absolute left-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
          <div className="px-4 py-3 text-sm text-gray-400 dark:text-white">
            <div>
              {userData.firstName} {userData.email}
            </div>
          </div>

          <div class="py-1">
            <Link
              to="/my-profile"
              class="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              onClick={infoHandler}
            >
               My Profile
            </Link>
          </div>

          <div className="py-1">
            <Link
              to="/logout"
              className="block px-4 py-2 text-sm text-primary-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
