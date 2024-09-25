import { useState, useEffect } from "react";
import Loginbtn from "./Loginbtn";
import Registerbtn from "./Registerbtn";
import UserProfile from "./Userprofile";
import { useAuthContext } from "../contexts/AuthContext";

const Nav = () => {
  const { user } = useAuthContext();

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const navmenu = {
    ROLE_ADMIN: [
      { name: "Home", link: "/" },
      {
        name: (
          <span className="flex items-center space-x-5 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Add a Book
          </span>
        ),
        link: "/add",
      },
    ],
    ROLE_MODERATOR: [
      { name: "Home", link: "/" },
      {
        name: (
          <span className="flex items-center space-x-5 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Add a Book
          </span>
        ),
        link: "/add",
      },
    ],
    ROLE_USER: [{ name: "Home", link: "/" }],
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost text-xl">
            <span className="text-base-100 font-bold text-red-600 text-3xl font-thin">
              LIBRARY
            </span>{" "}
            Manage
          </a>
        </div>

        <div className="navbar-end space-x-2">
          <ul className="menu menu-horizontal px-1">
            {user &&
              navmenu[user.roles[0]].map((menuItem) => (
                <li key={menuItem.name}>
                  <a
                    href={menuItem.link}
                    className="text-base hover:text-emerald-800"
                  >
                    {menuItem.name}
                  </a>
                </li>
              ))}
          </ul>
        </div>

        {/* User Profile or Auth Buttons */}
        <div className="hidden md:flex items-center space-x-6 p-4 ">
          {user ? (
            <>
              {/* Welcome Message and Roles */}
              <div className="flex items-center space-x-2">
                <span className="text-lg font-semibold text-gray-800">
                  Welcome,
                </span>
                <span className="text-lg font-bold text-blue-600">
                  {user.username}
                </span>

                {/* Display Roles with Styled Badges */}
                {user.roles?.length > 0 && (
                  <div className="flex space-x-2">
                    {user.roles.map((role, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-green-400 to-blue-500 text-white text-sm font-medium rounded-full shadow-sm"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* User Profile Button */}
              <UserProfile />
            </>
          ) : (
            <div className="flex space-x-4">
              {/* Register and Login Buttons */}
              <Registerbtn />
              <Loginbtn />
            </div>
          )}
        </div>

        {/* controller theme check */}
        <label className="grid cursor-pointer place-items-center">
          <input
            type="checkbox"
            value="synthwave"
            onChange={handleToggle}
            checked={theme === "dark" ? true : false}
            className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
          />
          <svg
            className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Nav;
